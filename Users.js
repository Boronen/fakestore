import User from "./User.js"
export default class Users {
    #list = []

    constructor(list, szuloElem){
        console.log(list)
        this.#list = list
        this.szuloElem = szuloElem
        this.megjelenit()
    }

    megjelenit(){
        this.#list.forEach((termek) => {
            new User(termek, this.szuloElem)
        })
    }
}