let amigos = [];
let sorteados = [];
const entradaUsuario = document.querySelector('#amigo');

function adicionarAmigo() {
    let nomeAmigo = entradaUsuario.value.trim(); 

    if (nomeAmigo === '') {
        alert('Por favor, insira um nome.');
    } else {
        amigos.push(nomeAmigo);
        entradaUsuario.value = '';
        exibirAmigos(); 
    }
}

function exibirAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    const disponiveis = amigos.filter(amigo => !sorteados.includes(amigo));

    for (let i = 0; i < disponiveis.length; i++) {
        const item = document.createElement("li");
        item.textContent = disponiveis[i];
        lista.appendChild(item);
    }
}

function sortearAmigo() {
    const resultado = document.getElementById("resultado");
    const disponiveis = amigos.filter(amigo => !sorteados.includes(amigo));

    if (disponiveis.length === 0) {
        resultado.innerHTML = "<li>Todos os amigos já foram sorteados!</li>";
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * disponiveis.length);
    const amigoSorteado = disponiveis[indiceAleatorio];
    resultado.innerHTML = `<li>:D Amigo sorteado: <strong>${amigoSorteado}</strong></li>`;
    sorteados.push(amigoSorteado);
    exibirAmigos();
}
