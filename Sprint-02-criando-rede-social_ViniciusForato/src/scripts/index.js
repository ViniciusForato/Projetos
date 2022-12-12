
let sectionPost = document.querySelector('.all-post')

function createPosts(users, posts){
    for( let i = 0; i < users.length; i++){

    const div = document.createElement('div')
    const img = document.createElement('img')
    const h2 = document.createElement('h2')
    const p = document.createElement('p')
    
    div.classList.add('post')
    
    img.src = users[i].img
    h2.innerText = users[i].user
    p.innerText = users[i].stack
    
    for(j = 0; j < posts.length; j++){
        if(users[i].id == posts[j].user){
    
    const divPost = document.createElement('div')
    const h2Post = document.createElement('h2')
    const paragraphPost = document.createElement('p')
    const button = document.createElement('button')

    divPost.classList.add('posted')

    h2Post.innerText = posts[j].title
    paragraphPost.innerText = posts[j].text
    button.id = users[i].id
    button.type = 'button'
    button.innerText = 'Abrir Post'
    button.addEventListener('click',(event)=>{
        event.preventDefault()
        createModal(users[i], posts[j-1])
    })
    
    
    div.append(p, h2, img, divPost)
    divPost.append(h2Post, paragraphPost, button)
    sectionPost.appendChild(div)
}
}
}
}
createPosts(users, posts)
