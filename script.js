const searchBar = document.querySelector('input[type=text]')
const searchBtn = document.querySelector('button')
let searchVar
let foodSearch

searchBtn.addEventListener('click', () => {
    console.log(searchBar.value)
    searchVar  = searchBar.value
    foodSearch = `https://api.spoonacular.com/recipes/search?query=${searchVar}&apiKey=09f3d9d95f864ab0a9218e1fb719c9a4`
    fetchData(foodSearch)
})

const fetchData = (url) => fetch(url)
    .then((res) => res.json())
    .then((data) => {
        console.log('data is loaded')
        console.log(data)
    })

