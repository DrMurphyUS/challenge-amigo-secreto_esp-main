let listaAmigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    const lista = document.getElementById("listaAmigos");
    const resultado = document.getElementById("resultado");
    
    if (nombre === "") {
        resultado.innerHTML = "<li>Por favor ingrese un nombre válido</li>";
        return;
    }
    
    listaAmigos.push(nombre);
    
    const nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = nombre;
    lista.appendChild(nuevoElemento);
    
    input.value = "";
    resultado.innerHTML = ""; // Limpiar mensaje de error si había uno
}

function sortearAmigo() {
    const resultado = document.getElementById("resultado");
    
    if (listaAmigos.length === 0) {
        resultado.innerHTML = "<li>Por favor ingrese al menos un nombre</li>";
        return;
    }
    
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSorteado = listaAmigos[indiceAleatorio];
    
    resultado.innerHTML = `<li>El amigo sorteado es: ${amigoSorteado}</li>`;
}
