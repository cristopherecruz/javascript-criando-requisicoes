import { videos } from "./conectarApi.js";
import popularCard from "./mostrarVideos.js";

async function buscarVideo(event) {
    event.preventDefault();

    const dadosPesquisa = document.querySelector("[data-pesquisa]").value;
    const busca = await videos.buscarVideos(dadosPesquisa);

    const lista = document.querySelector("[data-lista]");

    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }

    busca.forEach(e => lista.appendChild(popularCard(e.titulo, e.descricao, e.url, e.imagem)));

    if (busca.length == 0) {
        lista.innerHTML = `<h2 class="mensagem__titulo">Não existe vídeos com este termo!</h2>`;
    }
}

const botaoPesquisa = document.querySelector("[data-botao-pesquisa]");
botaoPesquisa.addEventListener("click", evento => buscarVideo(evento));