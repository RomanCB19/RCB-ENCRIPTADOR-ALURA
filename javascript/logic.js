const btnEncriptar = document.querySelector(".btn__Encriptar");
btnEncriptar.onclick = encriptar;

const btnDesencriptar = document.querySelector(".btn__Desencriptar");
btnDesencriptar.onclick = desencriptar;

let btnCopiar = document.querySelector(".btn-copiar");

var imgns = document.querySelector(".sec2__imgs");

btnCopiar.classList.add("ocultar");

var resultadoT = document.querySelector(".sec2__resultado");
resultadoT.classList.add("ocultar");

function encriptar() {
    var texto = document.querySelector(".sec1__textArea").value.toLowerCase();
    var textoEncriptado = "";
    for (var i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            textoEncriptado = textoEncriptado + "ai";
        }
        else if (texto[i] == "e") {
            textoEncriptado = textoEncriptado + "enter";
        }
        else if (texto[i] == "i") { 
            textoEncriptado = textoEncriptado + "imes";
        }
        else if (texto[i] == "o") {
            textoEncriptado = textoEncriptado + "ober";
        }
        else if (texto[i] == "u") { 
            textoEncriptado = textoEncriptado + "ufat";
        }
        else { 
            textoEncriptado = textoEncriptado + texto[i];
        }
    } 

    ocultar();

    document.querySelector(".sec2__resultado").innerHTML = textoEncriptado;
    btnCopiar.classList.remove("ocultar")
    resultadoT.classList.remove("ocultar");
}

function desencriptar () {
    var texto = document.querySelector(".sec1__textArea").value.toLowerCase();
    var textoEncriptado = "";

    for (var i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            textoEncriptado = textoEncriptado + "a";
            i = i + 1;
        }
        else if (texto[i] == "e") {
            textoEncriptado = textoEncriptado + "e";
            i = i + 4;
        }
        else if (texto[i] == "i") { 
            textoEncriptado = textoEncriptado + "i";
            i = i + 3;
        }
        else if (texto[i] == "o") {
            textoEncriptado = textoEncriptado + "o";
            i = i + 3;
        }
        else if (texto[i] == "u") { 
            textoEncriptado = textoEncriptado + "u";
            i = i + 3;
        }
        else { 
            textoEncriptado = textoEncriptado + texto[i];
        }
    } 

    ocultar();

    document.querySelector(".sec2__resultado").innerHTML = textoEncriptado;
    btnCopiar.classList.remove("ocultar");
    resultadoT.classList.remove("ocultar");
}

function ocultar () {
    imgns.classList.add("ocultar");
}


 
btnCopiar.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".sec2__resultado").textContent;
    navigator.clipboard.writeText(contenido);
   
});
