Im package.json ist "type": "module" gesetzt.
Das bedeutet, dass das genutzte Modul-System für *.js
ESM ist.

Unabhängig davon kann ich *.cjs (CommonJS) oder *.mjs (ESM)
Dateien erzeugen, die explizit über ihre Endung das verwendete
Modul-System festlegen.

Zusammenfassung:
1. Exportiert wird ein Default Export (vgl CommonJS) und/oder benannte Exports
   Hinweis: wenn nur eine Sache exprtiert wird, tendieren Entwickler eher zum Default-Export.
2. Module-Code wird nur einmal durchlaufen
3. Der Import mit dem Keyword "import" wird gehoisted, "hochgezogen"
4. Import-Varianten

import DefaultExport from './module.js'
import { namedEx1, namedEx2 } from './module.js'
import DefaultExport, { namedEx1, namedEx2 } from './module.js'

