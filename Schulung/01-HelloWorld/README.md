# Start einer Node.js JavaScript-Datei

1. Ohne package.json

    node datei.js
    node datei
    node .              # Startet "Default"-Datei index.js
    node ordner/datei   # Startet Datei ordner/datei.js
    node ordner         # Startet ordner/index.js

2. Mit Package.json ohne Start-Script

    npm start         # Startet "node server.js"

3. Mit Start-Script in der package.json

    npm start         # Führt Code des Start-Scripts aus

4. Beliebige Script in der package.json

    npm run script-name

5. Mit main-Property definiert

   Default-Script für "node ." wird gesetzt.
   
