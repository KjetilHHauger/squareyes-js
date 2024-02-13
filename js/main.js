const content = document.getElementById("content");
const men = document.getElementById("filterMen");
const apiUrl = 'https://api.noroff.dev/api/v1/square-eyes';
const allFilter = document.getElementById("all");
const actionFilter = document.getElementById("action");
const comedyFilter = document.getElementById("comedy");
const dramaFilter = document.getElementById("drama");
const horrorFilter = document.getElementById("horror");
const kidsFilter = document.getElementById("kids");
const cardBtn = document.getElementById("card");

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



let apiData = [];

// fetch(apiUrl)
// .then((response) => response.json())
// .catch(() => renderError())
// .then((dataResult) => {
//     apiData = dataResult;
//     for (let i = 0; 0 < apiData.length; i++) {
//         let data = apiData[i];
//             if (data.onSale === true) {
//                 content.innerHTML += `
//                     <div class="card">
//                         <img src="${data.image}" alt="Image of ${data.title}">
//                         <img src="assets/images/sale.webp" id="saleImg" alt="Sale tag">
//                         </div>
//         `
//             } else {
//                 content.innerHTML += `
//                     <div class="card">
//                         <img src="${data.image}" alt="Image of ${data.title}">
//                     </div>
//         `
//             }
//         }
// });

// function renderError() {
//     const error = document.getElementById("content")
//     error.innerHTML = "ERROR"
// }

async function fetchApi() {
    try {
        const response = await fetch(apiUrl);
        const dataResult = await response.json();
        apiData = dataResult;
        for (let i = 0; i < apiData.length; i++) {
            let data = apiData[i];
            if (data.onSale === true) {
                content.innerHTML += `
                    <div id="card">
                        <img src="${data.image}" alt="Image of ${data.title}">
                        <img src="assets/images/sale.webp" id="saleImg" alt="Sale tag">
                    </div>
                `;
            } else {
                content.innerHTML += `
                    <div id="card">
                        <img src="${data.image}" alt="Image of ${data.title}">
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

function dropdownFilterFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('#filterButton')) {
        let dropdowns = document.getElementsByClassName("dropdown-content")
        for (let i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
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
        } if (data.genre === "Action"){
            content.innerHTML += `
                    <div id="card">
                        <img src="${data.image}" alt="Image of ${data.title}">
                        <img src="assets/images/sale.webp" id="saleImg" alt="Sale tag">
                    </div>
                `;
        }
    } 
}
function filterComedy(genreToFilterBy) {
    content.innerHTML = "";
    let comedyResults = [];
    for (const data of apiData) {
        if (data.genre === genreToFilterBy) {
            comedyResults.push(data);
        } if (data.genre === "Comedy"){
            content.innerHTML += `
                    <div id="card">
                        <img src="${data.image}" alt="Image of ${data.title}">
                        <img src="assets/images/sale.webp" id="saleImg" alt="Sale tag">
                    </div>
                `;
        }
    } 
}
function filterDrama(genreToFilterBy) {
    content.innerHTML = "";
    let dramaResults = [];
    for (const data of apiData) {
        if (data.genre === genreToFilterBy) {
            dramaResults.push(data);
        } if (data.genre === "Drama"){
            content.innerHTML += `
                    <div id="card">
                        <img src="${data.image}" alt="Image of ${data.title}">
                        <img src="assets/images/sale.webp" id="saleImg" alt="Sale tag">
                    </div>
                `;
        }
    } 
}
function filterHorror(genreToFilterBy) {
    content.innerHTML = "";
    let horrorResults = [];
    for (const data of apiData) {
        if (data.genre === genreToFilterBy) {
            horrorResults.push(data);
        } if (data.genre === "Horror"){
            content.innerHTML += `
                    <div id="card">
                        <img src="${data.image}" alt="Image of ${data.title}">
                        <img src="assets/images/sale.webp" id="saleImg" alt="Sale tag">
                    </div>
                `;
        }
    } 
}
function filterKids(genreToFilterBy) {
    content.innerHTML = "";
    let kidsResults = [];
    for (const data of apiData) {
        if (data.genre === genreToFilterBy) {
            kidsResults.push(data);
        } if (data.genre === "Kids"){
            content.innerHTML += `
                    <div id="card">
                        <img src="${data.image}" alt="Image of ${data.title}">
                        <img src="assets/images/sale.webp" id="saleImg" alt="Sale tag">
                    </div>
                `;
        }
    } 
}

// cardBtn.addEventListener("click", () => {
//     onCardClick();
// });

// function onCardClick() {
//     window.location.replace(`movie.html/?id=data.id`)
// }
