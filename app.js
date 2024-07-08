function encriptar(texto) {
    let reemplazos = [
        ['e', 'enter'],
        ['i', 'imes'],
        ['a', 'ai'],
        ['o', 'ober'],
        ['u', 'ufat']
    ];
    
    let textoEncriptado = texto;
    for (let i = 0; i < reemplazos.length; i++) {
        let letra = reemplazos[i][0];
        let encriptado = reemplazos[i][1];
        textoEncriptado = textoEncriptado.split(letra).join(encriptado);
    }
    return textoEncriptado;
}

function desencriptar(texto) {
    let reemplazos = [
        ['enter', 'e'],
        ['imes', 'i'],
        ['ai', 'a'],
        ['ober', 'o'],
        ['ufat', 'u']
    ];
    
    let textoDesencriptado = texto;
    for (let i = 0; i < reemplazos.length; i++) {
        let encriptado = reemplazos[i][0];
        let letra = reemplazos[i][1];
        textoDesencriptado = textoDesencriptado.split(encriptado).join(letra);
    }
    return textoDesencriptado;
}

function encriptarTexto() {
    let textoOriginal = document.getElementById('userText').value;
    let textoEncriptado = encriptar(textoOriginal);
    document.getElementById('result').value = textoEncriptado;
    document.getElementById('userText').value = ''; 
}

function desencriptarTexto() {
    let textoEncriptado = document.getElementById('userText').value;
    let textoDesencriptado = desencriptar(textoEncriptado);
    document.getElementById('result').value = textoDesencriptado;
    document.getElementById('userText').value = ''; 
}

function copiarResultado() {
    let resultadoInput = document.getElementById('result');

    resultadoInput.select();
    document.execCommand('copy');
}
