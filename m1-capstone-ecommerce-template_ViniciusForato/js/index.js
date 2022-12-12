let cont = 0
let valorTotal = 0
let newValorTotal = 0

function create(produto){

    const li = document.createElement('li')
    const img = document.createElement('img')    
    const div = document.createElement('div')
    const h2 = document.createElement('h2')
    const h3Tag = document.createElement('h3')
    const p = document.createElement('p')
    const h3 = document.createElement('h3')
    const button = document.createElement('button')

    div.classList.add('informaçoes-produto')
    h3Tag.classList.add('tag')
    button.classList.add('button-card')

    img.src = produto.img
    img.alt = produto.nameItem
    h2.innerText = produto.nameItem
    h3Tag.innerText = produto.tag
    p.innerText = produto.description
    h3.innerText = `R$ ${produto.value},00`
    button.innerText = produto.addCart
    button.type = 'button'
    button.id = produto.id
    button.addEventListener('click', function add(event){
        event.preventDefault()
        carrinho(produto)
        
        newValorTotal = valorTotal + produto.value
        valorTotal = newValorTotal
        document.querySelector('.valor-resultado').innerHTML = `R$ ${newValorTotal},00`

        cont++
        document.querySelector('.quantidade-resultado').innerHTML = `${cont}`

    })
    

    div.append(h3Tag, h2, p, h3, button)
    li.append(img, div)

    return li
}

function percorre(listaProduto){
    const ul = document.querySelector('.produtos')
    for( let i = 0; i < listaProduto.length; i++){
        let card = create(listaProduto[i])
        ul.append(card)
    }
}
percorre(data)

function carrinho(compra){

    let carrinhoCompra = document.getElementById('carrinho')
    const liCompra = document.createElement('li')
    const imgCompra = document.createElement('img')
    const pCompra = document.createElement('p')
    const pValor = document.createElement('p')
    const buttonCompra = document.createElement('button')

    liCompra.classList.add('produto-carrinho')
    imgCompra.classList.add('img-carrinho')
    buttonCompra.classList.add('button-remove')

    imgCompra.src = compra.img
    console.log(compra.img)
    imgCompra.alt = compra.nameItem
    pCompra.innerText = compra.nameItem
    pValor.innerText = `R$ ${compra.value},00`
    buttonCompra.innerText = 'Remover'
    buttonCompra.type = 'button'
    buttonCompra.id = compra.id
    buttonCompra.addEventListener('click', function remove(event){
        event.preventDefault()

        newValorTotal = valorTotal - compra.value
        valorTotal = newValorTotal
        document.querySelector('.valor-resultado').innerHTML = `R$ ${newValorTotal},00`

        cont--
        document.querySelector('.quantidade-resultado').innerHTML = `${cont}`

        liCompra.remove()
    })


    liCompra.append(imgCompra, pCompra, pValor, buttonCompra)

    carrinhoCompra.appendChild(liCompra)
}


