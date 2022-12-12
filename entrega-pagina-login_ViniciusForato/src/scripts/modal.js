const main = document.querySelector('main')

function modal(){
    const reset = document.querySelector('#reset')
    reset.addEventListener('click', function openModal(event){
        event.preventDefault()
        createModal()
    })
}
modal()

function createModal(){
    const div = document.createElement('div')
    const section = document.createElement('section')
    const p = document.createElement('p')
    const form = document.createElement('form')
    const label = document.createElement('label')
    const input = document.createElement('input')
    const button = document.createElement('button')
    const buttonExit = document.createElement('button')
    buttonExit.addEventListener('click', function (event){
        event.preventDefault()
        main.removeChild(div)
    })

    div.classList.add('main')
    section.classList.add('modal')
    form.classList.add('form-password')
    buttonExit.classList.add('exit')

    p.innerText = 'Caso tenha esquecido sua senha, preencha o campo abaixo'
    label.innerText = 'Digite seu email para redefinir sua senha:'
    input.type = 'text'
    button.type = 'submit'
    button.innerText = 'Enviar'
    buttonExit.type = 'button'
    buttonExit.innerText = 'sair'
    buttonExit.id = 'exit'

    form.append(label, input, button)
    section.append(p, form, buttonExit)
    div.append(section)

    main.appendChild(div)
}