/**
 * @class User
 * @classdesc Egy felhasználó megjelenítéséért felelős osztály.
 * A felhasználó adatait kártyás formában jeleníti meg a DOM-ban.
 */
export default class User {
    /**
     * A felhasználó adatait tartalmazó objektum.
     * @private
     * @type {Object}
     */
    #obj = {}

    /**
     * Létrehoz egy új User példányt és megjeleníti a felhasználót.
     * @param {Object} obj - A felhasználó adatait tartalmazó objektum.
     * @param {string} obj.username - A felhasználó neve.
     * @param {string} obj.email - A felhasználó email címe.
     * @param {string} obj.password - A felhasználó jelszava.
     * @param {string} obj.phone - A felhasználó telefonszáma.
     * @param {HTMLElement} szuloelem - A szülő DOM elem, ahova a felhasználó adatai kerülni fognak.
     */
    constructor(obj, szuloelem){
        console.log(obj)
        this.#obj = obj
        this.szuloelem = szuloelem
        this.megjelenit()
    }

    /**
     * Megjeleníti a felhasználót a DOM-ban kártya formátumban.
     * HTML struktúrát generál a felhasználó adataiból és beszúrja a szülő elembe.
     * @returns {void}
     */
    megjelenit(){
        let kod = `
        <div class="card">
            <h2>${this.#obj.username}</h2>
            <p>${this.#obj.email}</p>
            <p>${this.#obj.password}</p>
            <p>${this.#obj.phone}</p>
        </div>`

        this.szuloelem.insertAdjacentHTML("beforeend", kod)
    }
}
