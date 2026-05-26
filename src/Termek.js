/**
 * @class Termek
 * @classdesc Egy termék megjelenítéséért felelős osztály.
 * A termék adatait kártyás formában jeleníti meg a DOM-ban.
 */
export default class Termek {
    /**
     * A termék adatait tartalmazó objektum.
     * @private
     * @type {Object}
     */
    #obj = {}

    /**
     * Létrehoz egy új Termek példányt és megjeleníti a terméket.
     * @param {Object} obj - A termék adatait tartalmazó objektum.
     * @param {string} obj.title - A termék neve.
     * @param {string} obj.image - A termék képének URL-je.
     * @param {string} obj.category - A termék kategóriája.
     * @param {number} obj.price - A termék ára.
     * @param {string} obj.description - A termék leírása.
     * @param {Object} [obj.rating] - A termék értékelése.
     * @param {number} [obj.rating.rate] - Az értékelés átlaga.
     * @param {number} [obj.rating.count] - Az értékelések száma.
     * @param {HTMLElement} szuloelem - A szülő DOM elem, ahova a termék kerülni fog.
     */
    constructor(obj, szuloelem){
        console.log(obj)
        this.#obj = obj
        this.szuloelem = szuloelem
        this.megjelenit()
    }

    /**
     * Megjeleníti a terméket a DOM-ban kártya formátumban.
     * HTML struktúrát generál a termék adataiból és beszúrja a szülő elembe.
     * @returns {void}
     */
    megjelenit(){
        let kod = `
        <div class="card">
            <img src="${this.#obj.image}" alt="${this.#obj.title}">
            <h2>${this.#obj.title}</h2>
            <p>${this.#obj.category}</p>
            <p>${this.#obj.price}</p>
            <p>${this.#obj.description}</p>
            <p>
                <span>${this.#obj.rating?.rate ?? "N/A"}</span>
                <span>${this.#obj.rating?.count ?? ""}</span>
            </p>
        </div>`

        this.szuloelem.insertAdjacentHTML("beforeend", kod)
    }
}
