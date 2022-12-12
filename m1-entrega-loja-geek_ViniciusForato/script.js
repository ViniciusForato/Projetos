let listFigures = []
let listFrames = []

function separateItens(){
    for( let i = 0; i < itens.length; i++){
        if( itens[i].type == 'Decorative frames'){
            listFrames.push(itens[i])
        }else{
            listFigures.push(itens[i])
        }
    }
}
separateItens()

let ulFrames = document.querySelector('.frames')
let ulFigures = document.querySelector('.figures')

function percorre(element, ul){
    for(let i = 0; i < element.length; i++){
        let card = createListFigures(element[i])
        ul.appendChild(card)
    }
}

percorre(listFigures, ulFigures)
percorre(listFrames, ulFrames)


function  createListFigures(produto){
    
    const li = document.createElement('li')
    const figure = document.createElement('figure')
    const img = document.createElement('img')
    const div = document.createElement('div')
    const h4 = document.createElement('h4')
    const p = document.createElement('p')

    li.classList.add('box-item')
    figure.classList.add('image-box')
    div.classList.add('box-text')

    img.src = produto.img
    img.alt = produto.name
    h4.innerText = produto.name
    p.innerText = produto.price

    figure.appendChild(img)
    div.append(h4, p)
    li.append(figure, div)
    
    return li
}
