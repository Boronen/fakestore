import Termek from "./Termek.js"

/**
 * @class Termekek
 * @classdesc Több termék (lista) együttes megjelenítéséért felelős osztály.
 * Végigiterál a termékek listáján és létrehozza az egyes Termek példányokat.
 */
export default class Termekek {
    /**
     * A megjelenítendő termékek listája.
     * @private
     * @type {Array<Object>}
     */
    #list = []

    /**
     * Létrehoz egy új Termekek példányt és elindítja a renderelést.
     * @param {Array<Object>} list - A megjelenítendő termékek tömbje.
     * @param {HTMLElement} szuloElem - A szülő DOM elem, ahova a termékek listája kerülni fog.
     */
    constructor(list, szuloElem){
        console.log(list)
        this.#list = list
        this.szuloElem = szuloElem
        this.megjelenit()
    }

    /**
     * Végigiterál a termékek listáján, és minden egyes elemére létrehoz egy új Termek példányt.
     * @returns {void}
     */
    megjelenit(){
        this.#list.forEach((termek) => {
            new Termek(termek, this.szuloElem)
        })
    }
}
