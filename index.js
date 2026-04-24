import Services from "./Services.js"
import Termekek from "./Termekek.js"
import Users from "./Users.js"

const SZULOELEM = document.querySelector(".termekek")
const VEGPONT = `https://fakestoreapi.com/products`
const TERMEKEKGOMB=document.querySelector("#termekek")
const felhasznaloGOMB=document.querySelector("#felhasznalok")

const services = new Services()

TERMEKEKGOMB.addEventListener("click", (event)=>{
    event.preventDefault()
    services.getData(VEGPONT, termekAdatok)
})
felhasznaloGOMB.addEventListener("click", (event)=>{
    event.preventDefault()
    services.getData("https://fakestoreapi.com/users", felhasznaloAdatok)
})


function termekAdatok(data){
    console.log(data)
    SZULOELEM.innerHTML = ""
    new Termekek(data, SZULOELEM)
}
function felhasznaloAdatok(data){
    console.log(data)
    SZULOELEM.innerHTML = ""
    new Users(data, SZULOELEM)
}