const content = document.getElementById("content");
const men = document.getElementById("filterMen");
const apiUrl = 'https://api.noroff.dev/api/v1/square-eyes';


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
                    <div class="card">
                        <img src="${data.image}" alt="Image of ${data.title}">
                        <img src="assets/images/sale.webp" id="saleImg" alt="Sale tag">
                    </div>
                `;
            } else {
                content.innerHTML += `
                    <div class="card">
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
    error.innerHTML = "ERROR";
}

fetchApi();