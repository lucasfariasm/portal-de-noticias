// async function getNoticias() {
//   let resposta = await fetch("http://newsapi.org/v2/top-headlines?apiKey=875bd4a45e8d4a0e9c00dd51610aefe5&country=br&category=technology");
//   let noticias = await resposta.json();
//   console.log(noticias.articles);
// }

// getNoticias();
let containerNoticias = document.querySelector("#listaDeNoticias");
async function getNoticias() {
  let resposta = await fetch(
    "http://newsapi.org/v2/top-headlines?apiKey=875bd4a45e8d4a0e9c00dd51610aefe5&country=br&category=technology"
  );

  let noticias = await resposta.json();

  for (let i = 0; i < noticias.articles.length; i++) {
    let noticia = noticias.articles[i];

    let cardNoticia = `
        <div class="col-3">
                    <div class="card">
                        <img src="${noticia.urlToImage}" class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title">${noticia.title}</h5>
                        <p class="card-text">${noticia.description}</p>
                        <a href="${noticia.url}" class="btn btn-primary">Ver Noticia</a>
                        </div>
                    </div>
            </div>  
    `;
    containerNoticias.innerHTML += cardNoticia;
  }
}

//ainda há outra forma, busque-a.

getNoticias();


// &category=technology