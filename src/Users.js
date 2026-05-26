import User from "./User.js"

/**
 * @class Users
 * @classdesc Több felhasználó (lista) együttes megjelenítéséért felelős osztály.
 * Végigiterál a felhasználók listáján és létrehozza az egyes User példányokat.
 */
export default class Users {
    /**
     * A megjelenítendő felhasználók listája.
     * @private
     * @type {Array<Object>}
     */
    #list = []

    /**
     * Létrehoz egy új Users példányt és elindítja a renderelést.
     * @param {Array<Object>} list - A megjelenítendő felhasználók tömbje.
     * @param {HTMLElement} szuloElem - A szülő DOM elem, ahova a felhasználók listája kerülni fog.
     */
    constructor(list, szuloElem){
        console.log(list)
        this.#list = list
        this.szuloElem = szuloElem
        this.megjelenit()
    }

    /**
     * Végigiterál a felhasználók listáján, és minden egyes elemére létrehoz egy új User példányt.
     * @returns {void}
     */
    megjelenit(){
        this.#list.forEach((termek) => {
            new User(termek, this.szuloElem)
        })
    }
}
