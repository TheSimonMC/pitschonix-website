/**
 * Pitschonix website configuration.
 * The live status service may report Velocity's broad protocol range. The
 * public website uses supportedClientRange for the versions players can join.
 */
window.PITSCHONIX_CONFIG = Object.freeze({
  serverAddress: 'pitschonix.eu',
  alternateAddress: 'play.pitschonix.eu',
  supportedClientRange: '1.8–26.2',
  panelUrl: 'https://panel.pitschonix.eu',
  statusUrl: 'https://status.pitschonix.eu',
  liveStatusEndpoint: 'https://api.mcsrvstat.us/3/pitschonix.eu',
  social: Object.freeze({
    youtube: 'https://www.youtube.com/@Pitschonix',
    tiktok: 'https://www.tiktok.com/@pitschonix',
    instagram: 'https://www.instagram.com/pitschonix/',
    x: 'https://x.com/pitschonix',
    discord: 'https://discord.gg/92xE2whxzm'
  })
});
