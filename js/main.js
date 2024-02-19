const content = document.getElementById("content");
const apiUrl = 'https://api.noroff.dev/api/v1/square-eyes';
const allFilter = document.getElementById("all");
const actionFilter = document.getElementById("action");
const comedyFilter = document.getElementById("comedy");
const dramaFilter = document.getElementById("drama");
const horrorFilter = document.getElementById("horror");
const kidsFilter = document.getElementById("kids");
const movieCard = document.getElementById("card");
const loader = document.getElementById("loader")

let apiData = [];

async function fetchApi() {
    loader.style.display = "block"
    try {
        const response = await fetch(apiUrl);
        const dataResult = await response.json();
        apiData = dataResult;
        for (let i = 0; i < apiData.length; i++) {
            let data = apiData[i];
            if (data.onSale === true) {
                content.innerHTML += `
                    <a href="movie.html?${data.id}"
                        <div id="card">
                            <img src="${data.image}" alt="Image of ${data.title}">
                            <div id="price">
                            <span class="price">${data.price}</span>
                            <span class="discounted">${data.discountedPrice}</span>
                            </div>
                        </div>
                    </a>
                `;
            } else {
                content.innerHTML += `
                <a href="movie.html?${data.id}"
                        <div id="card">
                            <img src="${data.image}" alt="Image of ${data.title}">
                            <div id="price">
                            <span class="price">${data.price}</span>
                            </div>
                        </div>
                    </a>
                `;
            }
        }
    } catch (error) {
        renderError();
    }
    loader.style.display = "none"
}

function renderError() {
    const error = document.getElementById("content");
    error.innerHTML = "ERROR, could not load API data. Please reload";
}

fetchApi();

function dropdownFilterFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(dropDownClick) {
    if (!dropDownClick.target.matches('#filterButton')) {
        let dropdowns = document.getElementsByClassName("dropdown-content")
        for (let i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

allFilter.addEventListener("click", () => {
    filterAll("All");
});
actionFilter.addEventListener("click", () => {
    filterAction("Action");
});
comedyFilter.addEventListener("click", () => {
    filterComedy("Comedy");
});
dramaFilter.addEventListener("click", () => {
    filterDrama("Drama");
});
horrorFilter.addEventListener("click", () => {
    filterHorror("Horror");
});
kidsFilter.addEventListener("click", () => {
    filterKids("Kids");
});

function filterAll() {
    content.innerHTML = "";
    fetchApi()
}
function filterAction(genreToFilterBy) {
    content.innerHTML = "";
    let actionResults = [];
    for (const data of apiData) {
        if (data.genre === genreToFilterBy) {
            actionResults.push(data);
        } if (data.genre === "Action" && data.onSale === false){
            content.innerHTML += `
            <a href="movie.html?${data.id}"
                <div id="card">
                    <img src="${data.image}" alt="Image of ${data.title}">
                    <div id="price">
                    <span class="price">${data.price}</span>
                    </div>
                </div>
            </a>
                `;
        } else if (data.genre === "Action" && data.onSale === true) {
            content.innerHTML +=`
                <a href="movie.html?${data.id}"
                    <div id="card">
                        <img src="${data.image}" alt="Image of ${data.title}">
                        <div id="price">
                            <span class="price">${data.price}</span>
                            <span class="discounted">${data.discountedPrice}</span>
                        </div>
                    </div>
                </a>`
        } 
    } 
}
function filterComedy(genreToFilterBy) {
    content.innerHTML = "";
    let comedyResults = [];
    for (const data of apiData) {
        if (data.genre === genreToFilterBy) {
            comedyResults.push(data);
        } if (data.genre === "Comedy" && data.onSale === false){
            content.innerHTML += `
            <a href="movie.html?${data.id}"
                <div id="card">
                    <img src="${data.image}" alt="Image of ${data.title}">
                    <div id="price">
                    <span class="price">${data.price}</span>
                    </div>
                </div>
            </a>
                `;
        } else if (data.genre === "Comedy" && data.onSale === true) {
            content.innerHTML +=`
                <a href="movie.html?${data.id}"
                    <div id="card">
                        <img src="${data.image}" alt="Image of ${data.title}">
                        <div id="price">
                            <span class="price">${data.price}</span>
                            <span class="discounted">${data.discountedPrice}</span>
                        </div>
                    </div>
                </a>`;
        } 
    } 
}
function filterDrama(genreToFilterBy) {
    content.innerHTML = "";
    let dramaResults = [];
    for (const data of apiData) {
        if (data.genre === genreToFilterBy) {
            dramaResults.push(data);
        } if (data.genre === "Drama" && data.onSale === true){
            content.innerHTML += `
            <a href="movie.html?${data.id}"
                <div id="card">
                    <img src="${data.image}" alt="Image of ${data.title}">
                    <div id="price">
                    <span class="price">${data.price}</span>
                    </div>
                </div>
            </a>
                `;
        } else if (data.genre === "Drama" && data.onSale === true) {
            content.innerHTML +=`
                <a href="movie.html?${data.id}"
                    <div id="card">
                        <img src="${data.image}" alt="Image of ${data.title}">
                        <div id="price">
                            <span class="price">${data.price}</span>
                            <span class="discounted">${data.discountedPrice}</span>
                        </div>
                    </div>
                </a>`
        } 
    } 
}
function filterHorror(genreToFilterBy) {
    content.innerHTML = "";
    let horrorResults = [];
    for (const data of apiData) {
        if (data.genre === genreToFilterBy) {
            horrorResults.push(data);
        } if (data.genre === "Horror" && data.onSale === false){
            content.innerHTML += `
            <a href="movie.html?${data.id}"
                <div id="card">
                    <img src="${data.image}" alt="Image of ${data.title}">
                    <div id="price">
                    <span class="price">${data.price}</span>
                    </div>
                </div>
            </a>
                `;
        } else if (data.genre === "Horror" && data.onSale === true) {
            content.innerHTML +=`
                <a href="movie.html?${data.id}"
                    <div id="card">
                        <img src="${data.image}" alt="Image of ${data.title}">
                        <div id="price">
                            <span class="price">${data.price}</span>
                            <span class="discounted">${data.discountedPrice}</span>
                        </div>
                    </div>
                </a>`
        } 
    } 
}
function filterKids(genreToFilterBy) {
    content.innerHTML = "";
    let kidsResults = [];
    for (const data of apiData) {
        if (data.genre === genreToFilterBy) {
            kidsResults.push(data);
        } if (data.genre === "Kids" && data.onSale === false){
            content.innerHTML += `
            <a href="movie.html?${data.id}"
                <div id="card">
                    <img src="${data.image}" alt="Image of ${data.title}">
                    <div id="price">
                    <span class="price">${data.price}</span>
                    </div>
                </div>
            </a>
                `;
        } else if (data.genre === "Kids" && data.onSale === true) {
            content.innerHTML +=`
                <a href="movie.html?${data.id}"
                    <div id="card">
                        <img src="${data.image}" alt="Image of ${data.title}">
                        <div id="price">
                            <span class="price">${data.price}</span>
                            <span class="discounted">${data.discountedPrice}</span>
                        </div>
                    </div>
                </a>`
        }
    } 
}
