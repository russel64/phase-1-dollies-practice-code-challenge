//code goes here

let nav = document.querySelector('#doll-nav')
let dollName = document.querySelector('#doll-name')
let dollImage = document.querySelector('#doll-image')
let dollDescription = document.querySelector('#doll-description')
let dollLikes = document.querySelector('#num-of-likes')

let btn = document.querySelector('#likes-btn')
let form = document.querySelector('#add-doll-form')
let nameInput = document.querySelector('#new-doll-name')
let imageInput = document.querySelector('#new-doll-image')


let newDoll;

fetch('http://localhost:3000/dollies')
.then(res => res.json() )
.then(data => {
    console.log(data)
    data.forEach(doll => renderDolls(doll))
    dollDetails(data[0])
})

function renderDolls(doll){
    let image = document.createElement('img')
    image.src = doll.photo
    nav.append(image)

    image.addEventListener('click', () => dollDetails(doll) )
}

function dollDetails(doll){
    dollName.textContent = doll.name 
    dollDescription.textContent = doll.description 
    dollImage.src = doll.photo
    dollLikes.textContent = doll.likes

    newDoll = doll

}

form.addEventListener('submit', e => {
    e.preventDefault()
    console.log(e)

    const newObject = {
        name: nameInput.value,
        photo: imageInput.value,
        likes: 0
    }

    renderDolls(newObject)
    dollDetails(newObject)
    form.reset()


})

btn.addEventListener('click', () => {
    newDoll.likes ++

    dollLikes.textContent = `${newDoll.likes}`

})