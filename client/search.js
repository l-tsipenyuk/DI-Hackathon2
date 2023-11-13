let divCards = document.getElementById('cards')
let input = document.querySelector('input')

async function fetchData() {
    try {
        const response = await fetch("http://localhost:3000/api/links/");
        const links = await response.json();

        getCards(links)

        } catch (e){
        console.log(e)
    }
}

fetchData()

input.addEventListener('input', async ()=> {
    try {
        const response = await fetch("http://localhost:3000/api/links/");
        const links = await response.json();
        
        let filtered = links.filter(item => item.description.toLowerCase().includes(input.value.toLowerCase()))
        if (filtered.length > 0) {
            getCards(filtered)
        } else (noFound())
        

        } catch (e){
        console.log(e)
    }

    
})

const getCards = (arr) => {
    divCards.innerHTML = ''
    arr.forEach(item => {
        let divCard = document.createElement('div')
        divCard.classList.add('card')

        let divImg = document.createElement('div')
        divImg.classList.add('divImg')

        let img = document.createElement('img')
        img.setAttribute('src', item.img)
        divImg.append(img)
        divCard.appendChild(divImg)

        let a = document.createElement('a')
        a.href = item.link
        a.setAttribute('target', '_blank')
        a.textContent = item.description
        divCard.appendChild(a)

        divCards.append(divCard)
    })
}

const noFound = () => {
    divCards.innerHTML = ''
    let divCard = document.createElement('div')
    divCard.id = 'nofound'
    divCard.style.marginBottom = '30px'
    divCard.textContent = 'No activities found'
    divCards.append(divCard)

    let button = document.createElement('button')
    let a = document.createElement('a')
    button.id = 'to-quiz'
    button.textContent = 'TAKE A QUIZ'
    a.href = 'quiz.html'
    a.append(button)
    divCards.append(a)
    divCards.style.display = 'block'
    
}