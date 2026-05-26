# FakeStore Webáruház

A FakeStore webáruház egy demo projekt, amely a [FakeStore API](https://fakestoreapi.com/) nyilvános végpontjához csatlakozik.

## Projekt célja

A projekt célja, hogy megismerjük a RESTful alkalmazások készítésének alapjait, és gyakoroljuk a JavaScript osztályalapú programozást.

## Funkciók

- **Termékek listázása**: A FakeStore API-ról termékek lekérése és megjelenítése
- **Felhasználók listázása**: Felhasználói adatok lekérése és megjelenítése
- **Dinamikus tartalom**: Aszinkron API hívások fetch használatával
- **Tiszta kód**: Osztályalapú architektúra, szeparált nézetek

## Projekt struktúra

```
fakestore/
├── src/
│   ├── index.js        # Fő belépési pont, eseménykezelők
│   ├── Services.js     # API kommunikációs szolgáltatás
│   ├── Termek.js       # Egy termék megjelenítése
│   ├── Termekek.js     # Termékek listájának megjelenítése
│   ├── User.js         # Egy felhasználó megjelenítése
│   ├── Users.js        # Felhasználók listájának megjelenítése
│   └── index.css       # Stílusok
├── out/                # Generált dokumentáció
├── index.html          # Főoldal
├── jsdoc.json          # JSDoc konfiguráció
├── package.json        # NPM projekt konfiguráció
└── README.md           # Projekt dokumentáció
```

## Telepítés

1. Klónozd le a repository-t:
```bash
git clone https://github.com/Boronen/fakestore.git
cd fakestore
```

2. Telepítsd a függőségeket:
```bash
npm install
```

## Használat

Nyisd meg az `index.html` fájlt egy böngészőben vagy használj egy live servert.

A felületen két gomb található:
- **Termékek** - Betölti és megjeleníti a termékeket
- **Felhasználók** - Betölti és megjeleníti a felhasználókat

## Dokumentáció

A projekt JSDoc segítségével dokumentált. A dokumentáció generálása:

```bash
npm run doc
```

A generált dokumentáció az `out/` mappában érhető el. Nyisd meg az `out/index.html` fájlt böngészőben a dokumentáció megtekintéséhez.

### JSDoc konfiguráció

A projekt a **docdash** sablont használja a dokumentáció generálásához, amely modernebb és áttekinthetőbb megjelenést biztosít.

## Technológiák

- **Vanilla JavaScript (ES6+)**: Osztályok, modulok, fetch API
- **HTML5 & CSS3**: Alapvető webes technológiák
- **FakeStore API**: RESTful API demo adatokkal
- **JSDoc**: Automatikus dokumentáció generálás

## API Végpontok

- Termékek: `https://fakestoreapi.com/products`
- Felhasználók: `https://fakestoreapi.com/users`

## Fejlesztés

Az alkalmazás moduláris felépítésű:
- **Services**: API hívások kezelése
- **View osztályok**: Termékek és felhasználók megjelenítése
- **Szeparált felelősségek**: Minden osztály egy jól definiált feladatot lát el

## Licensz

ISC

## Kapcsolat

Ha kérdésed van a projekttel kapcsolatban, nyiss egy issue-t a GitHub repository-ban.
