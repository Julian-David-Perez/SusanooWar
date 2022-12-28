//iniciar

const seccion_reiniciar = document.getElementById("Reiniciar")

const seccion_seleccionar_ataque = document.getElementById("Selecionar-ataque")

const boton_mascota_jugador = document.getElementById("boton-mascota")

const boton_agua = document.getElementById("boton-agua")

const boton_fuego = document.getElementById("boton-fuego")

const boton_tierra = document.getElementById("boton-tierra")

const boton_rayo = document.getElementById("boton-rayo")

const boton_viento = document.getElementById("boton-viento")

const selecc = document.getElementById("selecc")

const boton_reiniciar = document.getElementById("boton-reiniciar") 


//seleccionarmascotajugador

const inputDray = document.getElementById ("Dray")
const inputRom = document.getElementById ("Rom")
const inputFreddy = document.getElementById ("Freddy")
const inputYeid = document.getElementById ("Yeid")
const inputBlead = document.getElementById ("Blead")
const spanmascotajugador = document.getElementById("nombre-jugador")

const seccion_seleccionar_mascota = document.getElementById("Seleccionar-mascota")


//mascotaene

const spanmascotaenemigo = document.getElementById("nombre-enemigo")


//Combate

const vidasjugador = document.getElementById("vidas-jugador")
const vidasenemigo = document.getElementById("vidas-enemigo")

// arreglo

let Animales = []

let ataquejugador
let ataqueenemigo
let opcionAnimales
let vidasjugador2 = 5
let vidasenemigo2 = 5

class Mascota{
constructor(nombre, foto, vida){
    this.nombre = nombre
    this.foto = foto
    this.vida = vida
    this.ataques = []
    }
}

let dray = new Mascota("Dray", "./Elementos/dray.png", 5)
let rom = new Mascota("Rom", "Elementos/rom.jpg", 5)
let freddy = new Mascota("Freddy", "Elementos/freddy.jpg", 5)
let yeid = new Mascota("Yeid", "Elementos/yeid.jpg", 5)
let blead = new Mascota("Blead", "", 5)

dray.ataques.push(
    {nombre: "🔥", id: "boton-fuego"},
    {nombre: "🔥", id: "boton-fuego"},
    {nombre: "🌬️", id: "boton-viento"},
    {nombre: "🍀", id: "boton-tierra"},
    {nombre: "⚡", id: "boton-rayo"}
)

rom.ataques.push(
    {nombre: "💧", id: "boton-agua"},
    {nombre: "🍀", id: "boton-tierra"},
    {nombre: "🍀", id: "boton-tierra"},
    {nombre: "🌬️", id: "boton-viento"},
    {nombre: "🌬️", id: "boton-viento"}
)

freddy.ataques.push(
    {nombre: "⚡", id: "boton-rayo"},
    {nombre: "⚡", id: "boton-rayo"},
    {nombre: "⚡", id: "boton-rayo"},
    {nombre: "💧", id: "boton-agua"},
    {nombre: "🔥", id: "boton-fuego"}
)

yeid.ataques.push(
    {nombre: "💧", id: "boton-agua"},
    {nombre: "💧", id: "boton-agua"},
    {nombre: "🌬️", id: "boton-viento"},
    {nombre: "🍀", id: "boton-tierra"},
    {nombre: "⚡", id: "boton-rayo"}
)

blead.ataques.push(
    {nombre: "🌬️", id: "boton-viento"},
    {nombre: "🌬️", id: "boton-viento"},
    {nombre: "🌬️", id: "boton-viento"},
    {nombre: "⚡", id: "boton-rayo"},
    {nombre: "🔥", id: "boton-fuego"}
)

Animales.push(dray,rom,freddy,yeid,blead)

function iniciar(){
    seccion_reiniciar.style.display = "none"

    seccion_seleccionar_ataque.style.display = "none"   

    boton_mascota_jugador.addEventListener("click", selecionar_mascota_jugador)


    boton_agua.addEventListener("click", ataque_agua)

    boton_fuego.addEventListener("click", ataque_fuego)

    boton_tierra.addEventListener("click", ataque_tierra)

    boton_rayo.addEventListener("click", ataque_rayo)

    boton_viento.addEventListener("click", ataque_viento)

    boton_reiniciar.addEventListener("click", volver_a_jugar)    
}


//mensajeslet

let seccionmensajes = document.getElementById("resultado")


//mascota jugador

function selecionar_mascota_jugador (){


seccion_seleccionar_mascota.style.display = "none"


seccion_seleccionar_ataque.style.display = "flex"

    if (inputDray.checked){
        alert("🔥Seleccionaste a Dray")
        spanmascotajugador.innerHTML = "🔥Dray"
    } else if (inputRom.checked){
        alert("🍀Seleccionaste a Rom")
        spanmascotajugador.innerHTML = "🍀Rom"
    } else if (inputFreddy.checked){
        alert("⚡Seleccionaste a Freddy")
        spanmascotajugador.innerHTML ="⚡Freddy"
    } else if (inputYeid.checked){
        alert("💧Seleccionaste a Yeid")
        spanmascotajugador.innerHTML = "💧Yeid"
    } else if (inputBlead.checked){
        alert("🌬️Seleccionaste a Blead")
        spanmascotajugador.innerHTML ="🌬️Blead"
    } else {
        alert ("AUN NO HAS SELECCIONADO UN SUSANOO!")
        volver_a_jugar()
    }

    selecionar_mascota_enemigo()
} 

//mascota enemigo

function selecionar_mascota_enemigo(){

let enemigo_aletorio = aleatorio(1,5)
    
if (enemigo_aletorio == 1){
    spanmascotaenemigo.innerHTML = " Dray"
}   else if (enemigo_aletorio == 2){
    spanmascotaenemigo.innerHTML = " Yeid"
}   else if (enemigo_aletorio == 3){
    spanmascotaenemigo.innerHTML = " Rom"
}   else if (enemigo_aletorio == 4){
    spanmascotaenemigo.innerHTML = " Freddy"
}   else {
    spanmascotaenemigo.innerHTML = " Blead"
}

} 

//ataques

function ataque_agua(){
    ataquejugador = "AGUA"
    ataquealeatorioenemigo()
}

function ataque_fuego(){
    ataquejugador = "FUEGO"
    ataquealeatorioenemigo()            
}

function ataque_tierra(){
    ataquejugador = "TIERRA"
    ataquealeatorioenemigo()
}

function ataque_rayo(){
    ataquejugador = "RAYO"
    ataquealeatorioenemigo()
}

function ataque_viento(){
    ataquejugador = "VIENTO"
    ataquealeatorioenemigo()
}

function ataquealeatorioenemigo(){
    let ataquealeatorio = aleatorio(1,5)


    if (ataquealeatorio == 1){
        ataqueenemigo = "FUEGO"
    } else if (ataquealeatorio == 2){
        ataqueenemigo = "TIERRA"
    } else if (ataquealeatorio == 3){
        ataqueenemigo = "RAYO"
    } else if (ataquealeatorio == 4){
    ataqueenemigo = "AGUA"
    } else {
        ataqueenemigo = "VIENTO"
    }

    COMBATE()


}

function COMBATE(){


if (ataqueenemigo == ataquejugador){
crearmensaje("EMPATE 😬")
}
else if (ataquejugador == "FUEGO" && ataqueenemigo == "AGUA"){
    crearmensaje("GANASTE 🎉")
    vidasenemigo2--
    vidasenemigo.innerHTML = vidasenemigo2
    
} else if (ataquejugador == "AGUA" && ataqueenemigo == "TIERRA"){
    crearmensaje("GANASTE 🎉")
    vidasenemigo2--
    vidasenemigo.innerHTML = vidasenemigo2
    
} else if (ataquejugador == "TIERRA" && ataqueenemigo == "RAYO"){
    crearmensaje("GANASTE 🎉")
    vidasenemigo2--
    vidasenemigo.innerHTML = vidasenemigo2
    
} else if (ataquejugador == "RAYO" && ataqueenemigo == "VIENTO"){
    crearmensaje("GANASTE 🎉")
    vidasenemigo2--
    vidasenemigo.innerHTML = vidasenemigo2
    
} else if (ataquejugador == "VIENTO" && ataqueenemigo == "FUEGO"){
    crearmensaje("GANASTE 🎉")
    vidasenemigo2--
    vidasenemigo.innerHTML = vidasenemigo2

} else {
    crearmensaje("PERDISTE 😞")
    vidasjugador2--
    vidasjugador.innerHTML = vidasjugador2
}

//Revisar Vidas

revisarvidas()

}

function revisarvidas() {
    
    if (vidasenemigo2 == 0){
        crearmensajefinal("Felicitaciones! GANASTE 🎉")
    } else if (vidasjugador2 == 0){
        crearmensajefinal("Mis Condolencias, PERDISTE 😔")
    } 
}
    

//mensajes

function crearmensaje(resultado){
    
    let mensaje = document.createElement("p")
    
    mensaje.innerHTML = "Tu: " + ataquejugador + ", Rival: " + ataqueenemigo + " - " + resultado

    seccionmensajes.appendChild(mensaje)

}

function crearmensajefinal(resultadofinal){


    let mensaje = document.createElement("p")
    
    mensaje.innerHTML = resultadofinal

    seccionmensajes.appendChild(mensaje)


    boton_agua.disabled = true

    boton_fuego.disabled = true 

    boton_tierra.disabled = true

    boton_rayo.disabled = true

    boton_viento.disabled = true

    seccion_reiniciar.style.display = "block"


}
    

//Reiniciar

function volver_a_jugar(){
    location.reload()
}


//mascota aleatoria enemigo


function aleatorio(min, max){
return Math.floor(Math.random() * (max - min + 1) + min)
}


window.addEventListener("load", iniciar)