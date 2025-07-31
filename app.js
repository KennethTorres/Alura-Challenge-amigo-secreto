const listaAmigos = document.getElementById('listaAmigos');
const amigos = [];
let contador = 0;

function agregarAmigo(){
    const inputAmigo = document.getElementById('amigo');
 
    if (inputAmigo.value.trim() === '') {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }

    if (amigos.includes(inputAmigo.value)) {
        alert('Este nombre ya está en la lista.');
        inputAmigo.value = '';
        return;
    }else {
        amigos.push(inputAmigo.value);
    }

    while(contador < amigos.length){ 
        const nuevoAmigo = document.createElement('li');
        nuevoAmigo.textContent = amigos[contador];
        listaAmigos.appendChild(nuevoAmigo);
        contador++;
    }
    inputAmigo.value = '';
}

function sortearAmigo(){
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    if (amigos.length < 2) {
        alert('Necesitas al menos dos amigos para realizar el sorteo.');
        return;
    }else {
        const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
        const nuevoResultado = document.createElement('li');
        nuevoResultado.textContent = `Tu amigo secreto es: ${amigoSorteado}`;
        listaAmigos.innerHTML = '';
        resultado.appendChild(nuevoResultado);
    }
}