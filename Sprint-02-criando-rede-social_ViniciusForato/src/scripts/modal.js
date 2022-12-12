
function createModal(users, posts){
            const body = document.querySelector('body')

            const div = document.createElement('div')
            const section = document.createElement('section')
            const img = document.createElement("img")
            const h2 = document.createElement('h2')
            const p = document.createElement('p')
            const divPost = document.createElement('div')
            const h2Post = document.createElement('h2')
            const paragraphPost = document.createElement('p')
            const span = document.createElement('span')

            div.classList.add('modal-container')
            section.classList.add('modal-post')
            divPost.classList.add('posted')

            img.src = users.img
            img.alt = 'logo'
            h2.innerText = users.user
            p.innerText = users.stack
            h2Post.innerText = posts.title
            paragraphPost.innerText = posts.text
            span.innerText = 'X'
            span.id = 'close'
            span.addEventListener('click', ()=>{
                body.removeChild(div)
            })

            divPost.append(h2Post, paragraphPost, span)
            section.append( img, h2, p, divPost)
            div.appendChild(section)
            body.appendChild(div)
        }
