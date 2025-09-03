//declarando as variaveis com DOM (Document Model Object)

const carroselLista = document.querySelector(".carrosel-lista")
const carroselItem = document.querySelector(".carrosel-item")
const btnAnterior = document.querySelector(".btn-anterior")
const btnProximo = document.querySelector(".btn-proximo")
let contador = 0;

const larguraItem = carroselItem[0].offsetWidth + 10;
btnProximo.addEventListener("click",()=>{
    if(contador <carroselItem.length -1){
        contador++;
        carroselLista.computedStyleMap.transform = "translate"(-$(contador * larguraItem))
    }
})

btnAnterior.addEventListener("click",()=>{
    if(contador > 0){
        contador--;
        carroselLista.computedStyleMap.transform = "translate"(-$(contador * larguraItem))
    }
})
