let ulFrontEnd = document.querySelector('#front')
let ulBackEnd = document.querySelector('#back')

function percorre(element, ul){
    for(let i = 0; i < element.length; i++){
        let card = createList(element[i])
        ul.appendChild(card)
    }
}

percorre(frontEndJobs, ulFrontEnd)
percorre(backEndJobs, ulBackEnd)

function createList(developer){
    const li = document.createElement('li')
    const img = document.createElement('img')
    const span = document.createElement('span')
    const h3 = document.createElement('h3')
    const p = document.createElement('p')
    const div = document.createElement('div')
    const paragrafo = document.createElement('p')
    const button = document.createElement('button')
    const secoundButton = document.createElement('button')

    li.classList.add('list-container')
    h3.classList.add('title-card')
    p.classList.add('paragraph-card')
    paragrafo.classList.add('paragraph-description')
    button.classList.add('button-card')
    secoundButton.classList.add('button-card')

    img.src = './src/img/Ellipse 1.png'
    img.alt = 'logo'
    span.innerText = 'G'
    h3.innerText = developer.title
    p.innerText = 'Curitiba-Paraná'
    paragrafo.innerText = developer.descrription
    button.innerText = developer.modality[0]
    secoundButton.innerText = developer.modality[1]

    div.append(paragrafo, button, secoundButton)
    li.append(img, span, h3, p, div)

    return li

}