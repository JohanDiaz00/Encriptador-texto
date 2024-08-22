const d = document;
const textArea = d.querySelector(".form__input");
const imagenPersona = d.querySelector(".resultado__img");
const loaderBatman = d.querySelector(".loader")
const resultadoTitulo = d.querySelector(".resultado__titulo");
const resultadoTexto = d.querySelector(".resultado__texto");
const botonEncriptar = d.querySelector(".form__btn");
const botonDesencriptar = d.querySelectorAll(".form__btn");
const botonCopiar = d.querySelector(".resultado__btn");

const llaves = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ifat"]
];

//funcion para encriptar
function encriptarmensaje(mensaje) {
    let mensajeEncriptado = "";
    for(let i = 0; i < mensaje.length; i++) {
        let letra = mensaje[i];
        let encriptada = letra;
        for(let j= 0; j < llaves.length; j++) {
            if(letra === llaves[j][0]) {
                encriptada = llaves[j][1]; //remplaza la letra por su equivalente encriptado
            break; // termina el bucle cuando se encuentra la correspondencia
      } 
        }
        mensajeEncriptado += encriptada;
    }
    return mensajeEncriptado
}
//funcion para desencriptar
function desencriptarMensaje(mensaje) {
    let mensajeDesencriptado = mensaje;
    for(let i = 0; i < llaves.length; i++) {
        let regex = new RegExp(llaves[i][1], 'g');
        mensajeDesencriptado = mensajeDesencriptado.replace(regex, llaves[i][0])
    }
    return mensajeDesencriptado;
}
//oculatar elementos dinamicamente
textArea.addEventListener("input", (e)=> {
    imagenPersona.style.display = "none";
    loaderBatman.classList.remove("hidden");
    resultadoTitulo.textContent = "Capturando Mensaje";
    resultadoTexto.textContent ="";  
})
//funcion del boton encriptar
botonEncriptar.addEventListener("click", (e) =>{
    e.preventDefault();
    let mensaje = textArea.value.toLowerCase();
    let mensajeEncriptado = encriptarmensaje(mensaje);
    resultadoTexto.textContent = mensajeEncriptado;
    botonCopiar.classList.remove("hidden");
    resultadoTitulo.textContent = "El resultado es:";
})
//funcion del boton desencriptar
botonDesencriptar[1].addEventListener("click", (e)=> {
    e.preventDefault();
    let mensaje = textArea.value.toLowerCase();
    let mensajeDesencriptado = desencriptarMensaje(mensaje);
    resultadoTexto.textContent = mensajeDesencriptado;
    resultadoTitulo.textContent = "El resultado es:";
    botonCopiar.classList.remove("hidden");
})

botonCopiar.addEventListener('click', ()=> {
    let textoCopiado = resultadoTexto.textContent;
    navigator.clipboard.writeText(textoCopiado).then(()=> {
        imagenPersona.style.display = "block";
        loaderBatman.classList.add("hidden");
        resultadoTitulo.textContent = "El texto se copio";
        botonCopiar.classList.add("hidden");
        resultadoTexto.textContent = ""
    })
})

