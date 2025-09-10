//Array de objetos com as imagens e informações do banner

const bannerItems = [
{
    imagem:"./src/assets/img/Game1.jpg",
    titulo: "Título do filme 1",
    descricao:"Filme 1"

},
{
    imagem: "./src/assets/img/Game2.jpg",
    titulo: "Título do filme 2",
    descricao:"Filme 2"

},
{
    imagem:"./src/assets/img/Game3.jpg",
    titulo: "Título do filme 3",
    descricao:"Filme 3"

}
];

//Declarando as variáveis e elementos com DOM(document object model)

const tempo =5000;
const elementoBanner = document.querySelector(".banner");
const elementoTitulo = document.querySelector(".banner-titulo");
const elementoDescricao = document.querySelector(".banner-descricao");
let i = 0;

//função apra o slide show

function slideShow(){
    //altera a imagem de fundo do banner
    elementoBanner.style.backgroundImage = `url(${bannerItems[i].imagem})`
    // altera o título do banner
    elementoTitulo.textContent = bannerItems[i].titulo;
    elementoDescricao.textContent = bannerItems[i].descricao;


    //incrementa o indice (i) e reinicia quando chegar no final

    i++;
    if (i >= bannerItems.length){
        i = 0;
    }
    setTimeout(slideShow,tempo)
}

slideShow();