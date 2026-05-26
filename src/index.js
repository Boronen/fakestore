/**
 * @file index.js
 * @description A FakeStore webáruház fő belépési pontja.
 * Az alkalmazás inicializálását és az eseménykezelőket tartalmazza.
 */

import Services from "./Services.js"
import Termekek from "./Termekek.js"
import Users from "./Users.js"

/**
 * A termékek megjelenítésére szolgáló szülő DOM elem.
 * @constant {HTMLElement}
 */
const SZULOELEM = document.querySelector(".termekek")

/**
 * A FakeStore API termékek végpontjának URL-je.
 * @constant {string}
 */
const VEGPONT = `https://fakestoreapi.com/products`

/**
 * A termékek betöltését indító gomb.
 * @constant {HTMLElement}
 */
const TERMEKEKGOMB=document.querySelector("#termekek")

/**
 * A felhasználók betöltését indító gomb.
 * @constant {HTMLElement}
 */
const felhasznaloGOMB=document.querySelector("#felhasznalok")

/**
 * Services példány az API hívások kezeléséhez.
 * @constant {Services}
 */
const services = new Services()

/**
 * Eseménykezelő a termékek betöltésére.
 * @listens HTMLElement#click
 */
TERMEKEKGOMB.addEventListener("click", (event)=>{
    event.preventDefault()
    services.getData(VEGPONT, termekAdatok)
})

/**
 * Eseménykezelő a felhasználók betöltésére.
 * @listens HTMLElement#click
 */
felhasznaloGOMB.addEventListener("click", (event)=>{
    event.preventDefault()
    services.getData("https://fakestoreapi.com/users", felhasznaloAdatok)
})

/**
 * Callback függvény a termékadatok feldolgozására.
 * Törli a meglévő tartalmat és megjeleníti a lekért termékeket.
 * @param {Array<Object>} data - A termékek tömbje az API-tól.
 * @returns {void}
 */
function termekAdatok(data){
    console.log(data)
    SZULOELEM.innerHTML = ""
    new Termekek(data, SZULOELEM)
}

/**
 * Callback függvény a felhasználói adatok feldolgozására.
 * Törli a meglévő tartalmat és megjeleníti a lekért felhasználókat.
 * @param {Array<Object>} data - A felhasználók tömbje az API-tól.
 * @returns {void}
 */
function felhasznaloAdatok(data){
    console.log(data)
    SZULOELEM.innerHTML = ""
    new Users(data, SZULOELEM)
}
