async function listarVideos() {
    const conexao = await fetch("http://localhost:3000/videos/");
    const json = await conexao.json();

    return json;
}

async function popularVideo(titulo, descricao, url, imagem) {
    const conexao = await fetch("http://localhost:3000/videos", {
            method: "POST",
            headers: { "Content-type": "application/json"},
            body: JSON.stringify({
                titulo: titulo,
                descricao: `${descricao} mil visualizações`,
                url: url,
                imagem: imagem
            })
    });
    if (!conexao.ok) {
        throw new Error("Não foi possível enviar o video");
    }
    const conexaoReal = await conexao.json();

    return conexaoReal;
}

async function buscarVideos(termoBusca) {
    const conexao = await fetch(`http://localhost:3000/videos?q=${termoBusca}`);
    const conexaoReal = await conexao.json();

    return conexaoReal;
}

export const videos = {
    listarVideos,
    popularVideo,
    buscarVideos
}