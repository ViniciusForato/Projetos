const productsCart = [
    {
        id: 1,
        name: "uva",
        price: 5.00
    },
    {
        id: 2,
        name: "limão",
        price: 4.50
    },
    {
        id: 3,
        name: "água de coco",
        price: 22.00
    },
    {
        id: 4,
        name: "açucar",
        price: 7.90
    },
    {
        id: 5,
        name: "gelo",
        price: 21.00
    }
]

let body = document.querySelector('body')
let main = document.createElement('main')
let divTopo = document.createElement('div')
let h4Topo = document.createElement('h4')
let pTopo = document.createElement('p')
let ul = document.createElement('ul')
let section = document.createElement('section')
let tagDiv = document.createElement('div')
let tagH4  = document.createElement('h4')
let tagP = document.createElement('p')
let button = document.createElement('button')

tagDiv.classList.add('menu-rodape')
main.classList.add('container')
divTopo.classList.add('menu-topo')

body.appendChild(main)
main.append(divTopo, ul, section)
divTopo.append(h4Topo, pTopo)
tagDiv.append(tagH4, tagP)
section.append(tagDiv, button)

h4Topo.innerText = 'item'
pTopo.innerText = 'valor'
tagH4.innerText = 'total'
tagP.innerText = `R$ ${soma()}.00`
button.innerText = 'finalizar'


function percorre(element){
    for( let i = 0; i < element.length; i++){
        let produto = createList(element[i])
        ul.appendChild(produto)
    }
}
percorre(productsCart)

function createList(produto){

    let li = document.createElement('li')
    let h4 = document.createElement('h4')
    let p = document.createElement('p')
    
    li.classList.add('menu')
   
    h4.innerText = produto.name
    p.innerText = produto.price

    li.append(h4, p)

    return li
}

function soma(){
    let total = 0
    for( let i = 0; i < productsCart.length; i++){
        total += productsCart[i].price
    }
    return total.toFixed()
}
soma()





