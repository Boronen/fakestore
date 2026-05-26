/**
 * @class Services
 * @classdesc Szolgáltatási osztály, amely az API hívásokért felelős.
 * A FakeStore API-hoz kapcsolódik és lekéri az adatokat.
 */
export default class Services {
    /**
     * Adatok lekérése egy adott API végpontról.
     * @param {string} VEGPONT - Az API végpont URL-je.
     * @param {Function} callback - A visszahívó függvény, amely a lekért adatokkal lesz meghívva.
     * @returns {void}
     * @example
     * const services = new Services();
     * services.getData('https://fakestoreapi.com/products', (data) => {
     *     console.log(data);
     * });
     */
    getData(VEGPONT, callback) {
        fetch(VEGPONT)
            .then(response => response.json())
            .then((data) => {
                console.log(data)
                callback(data)
            })
            .catch(error => console.log(error));
    }
}
