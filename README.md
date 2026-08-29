# Pitschonix Website

A responsive, dependency-free static landing page for the Pitschonix Minecraft Java network.

## Included

- Purple, gold and dark pixel-style design based on the supplied Pitschonix artwork
- Responsive desktop, tablet and mobile layouts
- Subtle page, card, menu and scroll animations
- Server address copy buttons for `pitschonix.eu` and `play.pitschonix.eu`
- Live Java server status and player count through a public status endpoint
- Player-facing join range fixed to Minecraft Java `1.8–26.2`
- Visible public-beta notice explaining that bugs may occur and some modes are still unfinished or being polished
- Network, connection guide, owner team, community and FAQ sections
- Owner skin-head cards for `PitschiTV` and `SonixHD`
- Working YouTube, TikTok, Instagram, X and Discord buttons
- Web manifest, favicons, sitemap, robots file and matching 404 page
- Example Nginx configuration

## Official community links

The configured links are:

```text
YouTube   https://www.youtube.com/@Pitschonix
TikTok    https://www.tiktok.com/@pitschonix
Instagram https://www.instagram.com/pitschonix/
X         https://x.com/pitschonix
Discord   https://discord.gg/92xE2whxzm
```

They can be changed centrally in:

```text
assets/js/config.js
```

## Live server status

The site checks:

```text
https://api.mcsrvstat.us/3/pitschonix.eu
```

The status API may report Velocity's full protocol advertisement, such as `1.7.2–26.2`. The website deliberately does not display that API version string. It displays the configured player-facing join range `1.8–26.2`, because clients below 1.8 are not allowed to join.

Change the public range or status endpoint in `assets/js/config.js`. If the endpoint cannot be reached, the page safely displays “Status unavailable.”

## Owner skin heads

The team section requests current skin heads from MCHeads by Minecraft username. If the service is unavailable, the local Pitschonix logo is used as a fallback.

## Local preview

From the website directory:

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080` in a browser.

## Deploy with GitHub Pages

1. Publish the repository's `main` branch from the repository root.
2. Keep the included `CNAME` file set to `www.pitschonix.eu`.
3. Point the DNS `www` CNAME directly to the account's `github.io` hostname.
4. Wait for GitHub Pages to issue its certificate, then enable HTTPS enforcement.

The apex domain `pitschonix.eu` remains dedicated to the Minecraft network and is not changed by this website deployment.

## Deploy with Nginx

1. Copy the complete folder to the web root, for example `/var/www/pitschonix`.
2. Use `nginx-example.conf` as a starting point.
3. Validate Nginx with `sudo nginx -t`.
4. Reload Nginx with `sudo systemctl reload nginx`.
5. Add HTTPS only after DNS points to the server and a valid certificate has been issued.

Do not remove the `assets` directory or change its relative structure unless the HTML paths are updated too.
