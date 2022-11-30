// public api https://api.disneyapi.dev/characters

//adding event listener
document.addEventListener('DOMContentLoaded', () => {
    let feedback = document.querySelector("#feedback-form")
    feedback.addEventListener('submit', (e) => {
        e.preventDefault()
        renderFeedback(e.target.feedback.value)
        feedback.reset()
    })

    let description = document.querySelector("#description-form")
    description.addEventListener('submit', (e) => {
        e.preventDefault()
        renderDescription(e.target.description.value)
        description.reset()
    })
    
})

//render description to the dom
function renderDescription(description) {
    let li = document.createElement('li')
    li.textContent = description
    document.querySelector("#character-description").appendChild(li)
}



// render feedback to the dom
function renderFeedback (feedback) {
    let li = document.createElement('li')
    li.textContent = feedback
    document.querySelector("#review-list").appendChild(li)
}

// renders a one character on the dom
function renderCharacter (data) {
    let beerName = document.querySelector("#character-name");
    beerName.innerText = data.name
    let beerImage = document.querySelector("#character-image");
    beerImage.setAttribute("src", data.imageUrl);
    

}


async function initialize () {
    let oneCharacter = await(await (fetch("https://api.disneyapi.dev/characters/6"))).json()
    renderCharacter(oneCharacter)
}


initialize()





// renders character names to the navbar and an event listener
function renderAllCharacterNames (character) {
  
    let ul = document.querySelector("ul")
    character['data'].forEach(char => {
        let li = document.createElement('li')
        li.innerHTML = char.name
        ul.appendChild(li)
        li.addEventListener('click', () =>renderCharacter(char))
    });    
}



// get all the data from the api
async function initializeAll () {
    let characterObj = await(await (fetch("https://api.disneyapi.dev/characters"))).json()
    renderAllCharacterNames(characterObj) 
}



initializeAll()




