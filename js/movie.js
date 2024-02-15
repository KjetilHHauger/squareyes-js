const apiUrl = 'https://api.noroff.dev/api/v1/square-eyes';
const content = document.getElementById("content");

function getIdFromURL() {
    let url = window.location.href;
    let parts = url.split("/");
    let removeMovie = parts[parts.length - 1];
    let id = removeMovie.split("?")[1]
    return id;
}

let apiData = [];

async function fetchApi() {
    try {
        const id = getIdFromURL();
        const response = await fetch(apiUrl);
        const dataResult = await response.json();
        apiData = dataResult;
        for (let i = 0; i < apiData.length; i++) {
            let data = apiData[i];
            if (data.id === id) {
                content.innerHTML += `
                    <div id="movieCard">
                        <img src="${data.image}" alt="Image of ${data.title}">
                        <h2>${data.title}</h2>
                        <button id="addToCart">Add to cart</button>
                        <h3>${data.rating}</h3>
                        <h3>${data.released}</h3>
                        <h3>${data.price}<span>${data.discountedPrice}</span></h3>
                        <p>${data.description}</p>
                    </div>
                `;
            }
        }
    } catch (error) {
        renderError();
    }
}

function renderError() {
    const error = document.getElementById("content");
    error.innerHTML = "ERROR, could not load API data. Please reload";
}

fetchApi();

