export default class Termek {
    #obj = {}

    constructor(obj, szuloelem){
        console.log(obj)
        this.#obj = obj
        this.szuloelem = szuloelem
        this.megjelenit()
    }

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