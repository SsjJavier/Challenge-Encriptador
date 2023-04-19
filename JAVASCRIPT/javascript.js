function mostrar(){
    document.getElementById("temp").style.display= "none";
    document.getElementById("encriptado").style.display = "initial";
}

//Almacena lo que el usuario esta escribiendo
const mensaje = document.querySelector(".ingrese-texto");
const mensajeEncriptado = document.querySelector("#encriptado");


function btnEncriptar (){
    const textoEncriptado = encriptar(mensaje.value); 
    mensajeEncriptado.value = textoEncriptado;
    mensaje.value ="";
}

function encriptar (StringEncriptado){
    let matrizCodigo = [["e", "enter"],["i", "imes"],["a","ai"],["o","ober"],["u","ufat"]];
    StringEncriptado = StringEncriptado.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++){
        if(StringEncriptado.includes(matrizCodigo[i][0])){
            StringEncriptado = StringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return StringEncriptado
}


function btnDesencriptar (){
    const textoEncriptado = desencriptar(mensajeEncriptado.value); 
    mensaje.value = textoEncriptado;
    mensajeEncriptado.value="";
}

function desencriptar (StringEncriptado){
    let matrizCodigo = [["e", "enter"],["i", "imes"],["a","ai"],["o","ober"],["u","ufat"]];
    StringEncriptado = StringEncriptado.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++){
        if(StringEncriptado.includes(matrizCodigo[i][1])){
            StringEncriptado = StringEncriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return StringEncriptado
}



