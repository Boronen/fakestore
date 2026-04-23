export default class User {
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
            <h2>${this.#obj.username}</h2>
            <p>${this.#obj.email}</p>
            <p>${this.#obj.password}</p>
            <p>${this.#obj.phone}</p>
        </div>`

        this.szuloelem.insertAdjacentHTML("beforeend", kod)
    }
}