const searchBar = document.querySelector('input[type=text]')
const searchBtn = document.querySelector('button')
let searchVar
let foodSearch

searchBtn.addEventListener('click', () => {
    console.log(searchBar.value)
    searchVar = searchBar.value
    foodSearch = `https://api.spoonacular.com/recipes/search?query=${searchVar}&apiKey=09f3d9d95f864ab0a9218e1fb719c9a4`
    fetchData(foodSearch)
})

// const fetchData = (url) => fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//         console.log('data is loaded')
//         console.log(data)
//     })


const fetchData = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
    // return data
    console.log(data)

    const totalResults = Array.from(data.results)
    console.log(totalResults)

    totalResults.forEach(result => {
        const newSection = document.createElement('section')
        const newHeader = document.createElement('h1')
        const newDiv = document.createElement('div')
        const newImg = document.createElement('img')

        document.querySelector('body').appendChild(newSection)
        newSection.appendChild(newHeader)
        newSection.appendChild(newDiv)
        newDiv.appendChild(newImg)

        newSection.classList.add('result-wrap')
        newDiv.classList.add('image-wrap')
        newHeader.innerText = result.title
        newImg.src = ` https://spoonacular.com/recipeImages/${result.image}`
        // newDiv.style.backgroundImage = `url(https://spoonacular.com/recipeImages/${result.image})`
    })

    
}
