

function CifrarAES(){
    var mensaje = document.getElementById("mensajeDescifrado");
    var llave = document.getElementById("key").value;
    
    var cifrado = CryptoJS.AES.encrypt(read(mensaje), llave);
    descargar("MensajeCifrado", cifrado);
}

function CifrarDES(){
    var mensaje = document.getElementById("mensajeDescifrado");
    var llave = document.getElementById("key").value;
    
    var cifrado = CryptoJS.DES.encrypt(read(mensaje), llave);
    var texto = cifrado.toString(CryptoJS.enc.Utf8);
    descargar("MensajeCifrado", texto);
}

function DescifrarAES(){
    var mensaje = document.getElementById("mensajeCifrado");
    var llave = document.getElementById("key").value;
    
    var cifrado = CryptoJS.AES.decrypt(read(mensaje) , llave);
    var texto = cifrado.toString(CryptoJS.enc.Utf8);
    descargar("MensajeDescifrado", texto);
}

function DescifrarDES(){
    var mensaje = document.getElementById("mensajeCifrado");
    var llave = document.getElementById("key").value;
    
    var cifrado = CryptoJS.DES.decrypt(read(mensaje) , llave);
    descargar("MensajeDescifrado", cifrado);
}
function cifrar(){
    if(document.getElementById("mensajeDescifrado").value.lastIndexOf(".txt")==-1) {
        alert("Porfavor sube formatos de txt.");
    }
    else{
        if (document.getElementById('AES').checked) {
            CifrarAES()
        }
        else if (document.getElementById('DES').checked) {
            CifrarDES()
        }
        else{
            alert("Selecione un tipo de cifrado");
        }
    }
}
function descifrar(){
    if(document.getElementById("mensajeCifrado").value.lastIndexOf(".txt")==-1) {
        alert("Porfavor sube formatos de txt.");
    }
    else{
        if (document.getElementById('AES').checked) {
            DescifrarAES()
        }
        else if (document.getElementById('DES').checked) {
            DescifrarDES()
        }
        else{
            alert("Selecione un tipo de cifrado");
        }
    }
}

function descargar(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
}


function read(mensaje) {
    var file = mensaje;
    var texto;
    if (file.files.length) {
        var reader = new FileReader();
        reader.onload = function(e) {
            texto = e.target.result;
        };
        reader.readAsBinaryString(file.files[0]);
    }
    return texto;
}