(() => {
  'use strict';

  const translations = {
    'Skip to content': 'Zum Inhalt',
    'Menu': 'Menü',
    'Network': 'Netzwerk',
    'How to join': 'So trittst du bei',
    'Team': 'Team',
    'Community': 'Community',
    'Checking server': 'Server wird geprüft',
    'Status unavailable': 'Status nicht verfügbar',
    'Use pitschonix.eu to connect.': 'Verbinde dich über pitschonix.eu.',
    'Server online': 'Server online',
    'Server offline': 'Server offline',
    'The network may be in development or maintenance.': 'Das Netzwerk wird möglicherweise gerade entwickelt oder gewartet.',
    'The live status service could not be reached.': 'Der Live-Statusdienst konnte nicht erreicht werden.',
    'Minecraft Java Network': 'Minecraft-Java-Netzwerk',
    'Public beta': 'Öffentliche Beta',
    'Classic combat. Modern worlds. One community.': 'Klassischer Kampf. Moderne Welten. Eine Community.',
    'A cross-version Minecraft network designed around a clean lobby, varied game modes and a consistent player experience.': 'Ein versionsübergreifendes Minecraft-Netzwerk mit einer übersichtlichen Lobby, abwechslungsreichen Spielmodi und einem einheitlichen Spielerlebnis.',
    'Copy server address': 'Serveradresse kopieren',
    'Explore the network': 'Netzwerk entdecken',
    'Edition': 'Edition',
    'friendly': 'freundlich',
    'optional': 'optional',
    'Scroll': 'Scrollen',
    'Network status': 'Netzwerkstatus',
    'Server address': 'Serveradresse',
    'Players': 'Spieler',
    'Copy IP': 'IP kopieren',
    'Beta phase': 'Beta-Phase',
    'Pitschonix is currently in public beta.': 'Pitschonix befindet sich derzeit in der öffentlichen Beta.',
    'Please expect occasional bugs and temporary issues. Some game modes and features are still being developed, tested or polished, so not every mode is finished or fully refined yet.': 'Gelegentliche Fehler und vorübergehende Probleme sind möglich. Einige Spielmodi und Funktionen werden noch entwickelt, getestet oder verbessert und sind daher noch nicht vollständig fertig.',
    'Report an issue': 'Problem melden',
    'The network': 'Das Netzwerk',
    'One server address.': 'Eine Serveradresse.',
    'More than one way to play.': 'Mehr als eine Art zu spielen.',
    'Pitschonix combines a legacy-friendly lobby with room for modern servers, competitive modes and long-term community worlds.': 'Pitschonix verbindet eine Legacy-freundliche Lobby mit modernen Servern, kompetitiven Modi und langfristigen Community-Welten.',
    'Core': 'Kern',
    'Planned': 'Geplant',
    'A focused 1.8.8 network hub that remains accessible to newer supported clients.': 'Eine auf 1.8.8 basierende Netzwerk-Lobby, die weiterhin mit neueren unterstützten Clients erreichbar ist.',
    'Native 1.8.8': 'Nativ 1.8.8',
    'Cross-version': 'Versionsübergreifend',
    'Classic combat foundations for Duels, SkyWars, BedWars and other fast game modes.': 'Klassischer Kampf als Grundlage für Duelle, Himmel Kriege, Betten Kriege und weitere schnelle Spielmodi.',
    '1.8 combat': '1.8-Kampfsystem',
    'Competitive': 'Kompetitiv',
    'Modern Games': 'Moderne Spiele',
    'Current Paper-based modes built for newer Minecraft versions and modern mechanics.': 'Aktuelle Paper-basierte Modi für neuere Minecraft-Versionen und moderne Mechaniken.',
    'Modern Paper': 'Modernes Paper',
    'SMP & Events': 'SMP & Events',
    'Persistent survival, special event servers and room for the community to grow together.': 'Dauerhaftes Survival, besondere Event-Server und Raum für eine gemeinsam wachsende Community.',
    'Long-term': 'Langfristig',
    'Built for both eras': 'Für beide Epochen gebaut',
    'Classic where it matters.': 'Klassisch, wo es zählt.',
    'Modern where it fits.': 'Modern, wo es passt.',
    'The network is structured to welcome players through a legacy lobby while individual modes can use their own verified version requirements.': 'Das Netzwerk empfängt Spieler über eine Legacy-Lobby, während einzelne Modi eigene geprüfte Versionsanforderungen verwenden können.',
    'Wide client support': 'Breite Client-Unterstützung',
    'Join the lobby from supported Minecraft Java versions between 1.8 and 26.2.': 'Betritt die Lobby mit unterstützten Minecraft-Java-Versionen zwischen 1.8 und 26.2.',
    'Clear version rules': 'Klare Versionsregeln',
    'Modern modes can require newer clients without disconnecting incompatible players from the lobby.': 'Moderne Modi können neuere Clients voraussetzen, ohne inkompatible Spieler aus der Lobby zu werfen.',
    'Optional client extras': 'Optionale Client-Extras',
    'Vanilla clients remain supported; NoRisk Client features are optional enhancements.': 'Vanilla-Clients bleiben unterstützt; NoRisk-Client-Funktionen sind optionale Erweiterungen.',
    'Start playing': 'Jetzt spielen',
    'Join in three steps.': 'In drei Schritten beitreten.',
    'No launcher tricks and no required resource pack. Open Minecraft Java Edition and connect.': 'Keine Launcher-Tricks und kein verpflichtendes Ressourcenpaket. Öffne Minecraft Java Edition und verbinde dich.',
    'Open Minecraft Java': 'Minecraft Java öffnen',
    'Use a supported version from 1.8 through 26.2.': 'Verwende eine unterstützte Version von 1.8 bis 26.2.',
    'Add a multiplayer server': 'Mehrspieler-Server hinzufügen',
    'Open Multiplayer, select Add Server and choose any server name.': 'Öffne Mehrspieler, wähle Server hinzufügen und vergib einen beliebigen Namen.',
    'Enter the address': 'Adresse eingeben',
    'Use ': 'Verwende ',
    ', save it and join the network.': ', speichere den Eintrag und tritt dem Netzwerk bei.',
    'SERVER ADDRESS': 'SERVERADRESSE',
    'Primary address': 'Primäre Adresse',
    'Alternative address': 'Alternative Adresse',
    'Click to copy': 'Zum Kopieren klicken',
    'Live status updates automatically.': 'Der Live-Status aktualisiert sich automatisch.',
    'The team': 'Das Team',
    'Built by the owners.': 'Von den Ownern aufgebaut.',
    'Pitschonix is led by two Minecraft network owners working under one shared identity.': 'Pitschonix wird von zwei Minecraft-Netzwerk-Ownern unter einer gemeinsamen Identität geleitet.',
    'Minecraft network owner': 'Minecraft-Netzwerk-Owner',
    'Stay connected': 'Bleib verbunden',
    'Follow the network.': 'Folge dem Netzwerk.',
    'News, clips, updates and community announcements will be shared through the official Pitschonix channels.': 'Neuigkeiten, Clips, Updates und Community-Ankündigungen erscheinen auf den offiziellen Pitschonix-Kanälen.',
    'Quick answers': 'Schnelle Antworten',
    'Before you join.': 'Bevor du beitrittst.',
    'What is the server address?': 'Wie lautet die Serveradresse?',
    'Use ': 'Verwende ',
    '. The alternative address ': '. Die alternative Adresse ',
    ' connects to the same network.': ' verbindet dich mit demselben Netzwerk.',
    'Which Minecraft versions are supported?': 'Welche Minecraft-Versionen werden unterstützt?',
    'The network target is Minecraft Java Edition 1.8 through 26.2. Individual modern modes may require Minecraft 1.21.11 or newer.': 'Das Netzwerk unterstützt Minecraft Java Edition 1.8 bis 26.2. Einzelne moderne Modi können Minecraft 1.21.11 oder neuer erfordern.',
    'Do I need NoRisk Client?': 'Brauche ich den NoRisk Client?',
    'No. Vanilla Minecraft clients remain supported. NoRisk Client features are optional enhancements.': 'Nein. Vanilla-Minecraft-Clients bleiben unterstützt. NoRisk-Client-Funktionen sind optionale Erweiterungen.',
    'Is the network already finished?': 'Ist das Netzwerk bereits fertig?',
    'Not yet. Pitschonix is currently in public beta. Bugs and temporary issues may occur, and some game modes or features are still unfinished, unavailable or being polished.': 'Noch nicht. Pitschonix befindet sich in der öffentlichen Beta. Fehler und vorübergehende Probleme können auftreten; einige Spielmodi und Funktionen sind noch unfertig, nicht verfügbar oder werden verbessert.',
    'A Minecraft Java network for classic and modern play.': 'Ein Minecraft-Java-Netzwerk für klassisches und modernes Spielen.',
    'Navigate': 'Navigation',
    'Copy server IP': 'Server-IP kopieren',
    'Privacy': 'Datenschutz',
    'All rights reserved.': 'Alle Rechte vorbehalten.',
    'Pitschonix. All rights reserved.': 'Pitschonix. Alle Rechte vorbehalten.',
    'Not affiliated with Mojang Studios or Microsoft.': 'Nicht mit Mojang Studios oder Microsoft verbunden.',
    'Server address copied.': 'Serveradresse kopiert.',
    'JavaScript is disabled. You can still join with ': 'JavaScript ist deaktiviert. Du kannst trotzdem beitreten mit ',
    'Back to home': 'Zur Startseite',
    'Privacy by design': 'Datenschutz von Anfang an',
    'Privacy.': 'Datenschutz.',
    'Pitschonix is a free community network. We only use the data that is genuinely needed to operate the game, protect the network and save your settings.': 'Pitschonix ist ein kostenloses Community-Netzwerk. Wir verwenden nur Daten, die für den Spielbetrieb, den Schutz des Netzwerks und deine gespeicherten Einstellungen wirklich nötig sind.',
    'Download as PDF': 'Als PDF herunterladen',
    'In short': 'Kurz gesagt',
    'No sales. No tracking. No paywalls.': 'Keine Verkäufe. Kein Tracking. Keine Paywalls.',
    'We do not sell, rent or trade personal data.': 'Wir verkaufen, vermieten oder handeln keine personenbezogenen Daten.',
    'We do not use your data for advertising, profiling or hidden analytics.': 'Wir nutzen deine Daten nicht für Werbung, Profiling oder versteckte Analysen.',
    'There are no paywalls and no purchasable gameplay advantages.': 'Es gibt keine Paywalls und keine kaufbaren Spielvorteile.',
    'We do not share data with third parties for their own purposes.': 'Wir geben Daten nicht für eigene Zwecke an Dritte weiter.',
    '01 / Scope': '01 / Geltungsbereich',
    'When this notice applies': 'Wann diese Hinweise gelten',
    'This notice applies to the Minecraft server, the website ': 'Diese Hinweise gelten für den Minecraft-Server, die Website ',
    ' and their connected network features. By using the server or website, you confirm that you have read and accepted this notice. If a voluntary feature requires separate consent, we will ask for it separately.': ' und die damit verbundenen Netzwerkfunktionen. Durch die Nutzung des Servers oder der Website bestätigst du, diese Hinweise gelesen und akzeptiert zu haben. Falls eine freiwillige Funktion eine gesonderte Einwilligung erfordert, fragen wir separat danach.',
    '02 / Necessary data': '02 / Notwendige Daten',
    'What is processed technically': 'Was technisch verarbeitet wird',
    'To keep the network working and fair, we may process the following data in particular:': 'Damit das Netzwerk funktioniert und fair bleibt, können insbesondere folgende Daten verarbeitet werden:',
    'Minecraft username and UUID;': 'Minecraft-Spielername und UUID;',
    'IP address and technical connection data in time-limited server and security logs;': 'IP-Adresse und technische Verbindungsdaten in zeitlich begrenzten Server- und Sicherheitsprotokollen;',
    'game progress, coins, statistics, ranks, clan, friend and party features;': 'Spielstände, Coins, Statistiken, Ränge sowie Clan-, Freundes- und Partyfunktionen;',
    'selected language, cosmetics and other personal network settings;': 'ausgewählte Sprache, Cosmetics und andere persönliche Netzwerkeinstellungen;',
    'moderation and security data where needed to investigate a rule violation.': 'Moderations- und Sicherheitsdaten, wenn dies zur Bearbeitung eines Regelverstoßes erforderlich ist.',
    '03 / Purpose & sharing': '03 / Zweck & Weitergabe',
    'Why the data is used': 'Wofür die Daten verwendet werden',
    'Processing is limited to operating the network, saving your progress, preventing abuse, diagnosing errors and protecting network security. We do not share data for advertising, sales or profiling.': 'Die Verarbeitung dient ausschließlich dem Betrieb des Netzwerks, der Speicherung deines Fortschritts, der Missbrauchsprävention, der Fehleranalyse und der Netzwerksicherheit. Eine Weitergabe für Werbung, Verkauf oder Profiling findet nicht statt.',
    'Technical hosting and infrastructure providers may process data only where required to operate the systems securely. They may not use it for their own advertising.': 'Technische Hosting- und Infrastruktur-Anbieter dürfen Daten nur insoweit verarbeiten, wie es für den sicheren Betrieb der Systeme erforderlich ist. Sie dürfen diese Daten nicht für eigene Werbung verwenden.',
    '04 / Website': '04 / Website',
    'A deliberately simple website': 'Eine bewusst einfache Website',
    'The Pitschonix website currently uses no advertising or analytics trackers, sells nothing and requires no user account. External links open the relevant platform, where that provider’s privacy rules apply.': 'Die Pitschonix-Website verwendet derzeit keine Werbe- oder Analyse-Tracker, verkauft nichts und benötigt kein Benutzerkonto. Externe Links öffnen die jeweilige Plattform; dort gelten deren Datenschutzregeln.',
    '05 / Retention & rights': '05 / Speicherung & Rechte',
    'As little and as briefly as possible': 'So wenig und so kurz wie möglich',
    'Technical logs are kept only as long as needed for troubleshooting, security or abuse prevention. Persistent gameplay features remain stored for as long as the player profile is needed by the network.': 'Technische Protokolle werden nur so lange aufbewahrt, wie sie für Fehleranalyse, Sicherheit oder Missbrauchsprävention benötigt werden. Dauerhafte Spielfunktionen bleiben gespeichert, solange das Spielerprofil für das Netzwerk benötigt wird.',
    'You can request access, correction or deletion through the official Pitschonix Discord. Security, evidence or ban data may be retained longer where a legitimate protective reason requires it.': 'Du kannst über den offiziellen Pitschonix-Discord Auskunft, Berichtigung oder Löschung anfragen. Sicherheits-, Nachweis- oder Sperrdaten können bei einem berechtigten Schutzgrund länger aufbewahrt werden.',
    'Document information': 'Dokumentinformationen',
    'Version': 'Version',
    'Current as of 1 September 2026': 'Stand: 1. September 2026',
    'Document version 1.1': 'Dokumentversion 1.1',
    'Contact via Discord': 'Kontakt über Discord',
    'free · ad-free · community-first': 'kostenlos · werbefrei · community-first'
  };

  const storageKey = 'pnx-language';
  const supported = new Set(['en', 'de']);
  const saved = (() => { try { return localStorage.getItem(storageKey); } catch (_) { return null; } })();
  let language = supported.has(saved) ? saved : 'en';

  const translateTextNodes = () => {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        if (node.parentElement?.closest('script, style, code')) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach((node) => {
      const trimmed = node.nodeValue.trim();
      if (!node.__pnxEnglish) node.__pnxEnglish = trimmed;
      const value = language === 'de' ? (translations[node.__pnxEnglish] || node.__pnxEnglish) : node.__pnxEnglish;
      node.nodeValue = node.nodeValue.replace(trimmed, value);
    });
  };

  const apply = () => {
    document.documentElement.lang = language;
    translateTextNodes();
    const privacyPage = /privacy\.html$/.test(location.pathname);
    if (privacyPage) {
      document.title = language === 'de' ? 'Datenschutz — Pitschonix' : 'Privacy — Pitschonix';
      const description = document.querySelector('meta[name="description"]');
      if (description) description.content = language === 'de'
        ? 'Datenschutz- und Privatsphäre-Hinweise des Pitschonix Minecraft-Netzwerks.'
        : 'Privacy notice for the Pitschonix Minecraft network and website.';
    }
    document.querySelectorAll('[data-language]').forEach((button) => {
      const active = button.dataset.language === language;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    document.dispatchEvent(new CustomEvent('pnx:language', { detail: { language } }));
  };

  const setLanguage = (next) => {
    if (!supported.has(next)) return;
    language = next;
    try { localStorage.setItem(storageKey, language); } catch (_) {}
    apply();
  };

  window.PNX_I18N = {
    get language() { return language; },
    t: (english) => language === 'de' ? (translations[english] || english) : english,
    apply,
    setLanguage
  };

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-language]').forEach((button) => {
      button.addEventListener('click', () => setLanguage(button.dataset.language));
    });
    apply();
  });
})();
