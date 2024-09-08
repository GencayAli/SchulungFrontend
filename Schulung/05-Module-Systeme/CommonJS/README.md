Im package.json ist "type": "commonjs" gesetzt.
Das bedeutet, dass das genutzte Modul-System für *.js
CommonJS ist.

Unabhängig davon kann ich *.cjs (CommonJS) oder *.mjs (ESM)
Dateien erzeugen, die explizit über ihre Endung das verwendete
Modul-System festlegen.

Zusammenfassung:
1. Exportiert wird immer nur "ein" Value!
2. Module-Code wird nur einmal durchlaufen
3. Der Import über require geschieht genau an der Code-Stelle (vgl das Verhalten bei ESM,
dort wird nämlich gehoisted, "hochgezogen")
