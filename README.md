# SduiHax
Dieses Repository beinhaltet ein "User-Script", das die folgenden Features in [Sdui](https://beta.app.sdui.de/) einbaut.

Es funktioniert zurzeit nur in Browsern, die Userscripts in Addons unterstützen (u.A. Firefox und Chrome) und in der deutschen Version von Sdui.

Wir arbeiten nicht mit Sdui zusammen. Die Benutzung dieses Scripts ist u.U. ein Verstoß gegen die AGB von Sdui -
Wir sind nicht für eventuellen Verlust eures Accounts und/oder rechtliche Probleme verantwortlich!

## Features
* Dark Theme! (yay!)
* Automatisch Lesebestätigungen senden
* Namen von Lehrern ersetzen (dazu mehr weiter unten)
* Das Flackern des Vertretungsplans entfernen
* Automatisch News in der Einzelansicht (wenn man nur 1 news sieht) erweitern, auf der Seite ist ja nur eine news, es ergibt also keinen Sinn die klein zu halten.

## Installation
1. [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) (Chrome) oder [Greasemonkey](https://addons.mozilla.org/de/firefox/addon/greasemonkey/) (Firefox) installieren.
2. Das [Userscript](https://github.com/SduiHax/Userscript/raw/main/sduihax.user.js) installieren.
3. [Sdui](https://beta.app.sdui.de/) aufrufen (Es sollte jetzt funktionieren!)

## Eigene Lehrernamen
Mit diesem Feature lassen sich die Namen von Lehrern einfach lokal (nur bei euch!) ersetzen.
Das ist allerdings noch nicht 100% ausgereift (Die Namen werden nicht überall ersetzt, um Leistung zu sparen)

Hierfür einfach oben im Userscript diese Einträge bearbeiten:
```
const namesToReplace = {
  "Hofmann": "Hoffmann",
  // Hier andere Namen hinzufügen und danach die // wegmachen:
  // "Eigentlicher Name": "Neuer name",
  // UNBEDINGT Groß/Kleinschreibung etc. beachten!
}
```

## Rechtliches
- Es wurde kein Eigentum von Sdui veröffentlicht oder verletzt.
- Es wird nur die Nutzeroberfläche von allen, die den Installationsschritten folgen, verändert.
- Für Sdui entstehen hier keinerlei Kosten, ganz im Gegenteil, wir nehmen Sdui sogar Arbeit ab, indem wir Features einbauen!
- Rechtliche Anfragen und Beschwerden können an sduihax@pm.me gesendet werden.
