const apiUrl = 'https://api.noroff.dev/api/v1/square-eyes';
const content = document.getElementById("content");
const listCart = document.querySelector(".listCart")
const loader = document.getElementById("loader")

function getIdFromURL() {
    let url = window.location.href;
    let parts = url.split("/");
    let removeMovie = parts[parts.length - 1];
    let id = removeMovie.split("?")[1]
    return id;
}

async function fetchApi() {
    loader.style.display = "block"
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
                        <button class="addToCart">Add to cart</button>
                        <h3>${data.rating}</h3>
                        <h3>${data.released}</h3>
                        <h3>${data.price}<span>${data.discountedPrice}</span></h3>
                        <p>${data.description}</p>
                    </div>
                `;
                document.querySelector(".addToCart").addEventListener("click", () => {
                    const movieTitle = data.title;
                    const moviePrice = data.price;
                    const movieDiscounted = data.discountedPrice;
                    const movieOnSale = data.onSale;
                    addToCart(movieTitle, moviePrice, movieDiscounted, movieOnSale);
                });
            }
        }
    } catch (error) {
        renderError();
    }
    loader.style.display = "none"
}

const cart = JSON.parse(localStorage.getItem("myCart")) || []

function addToCart(title, price, discountedPrice, movieOnSale) {
    const movieInCart = cart.find(cartItem => cartItem.title === title)
    if (movieInCart) {
        alert("Item is already in cart")
    } else {
        if(movieOnSale === true) {
            cart.push({title: title, discountedPrice: discountedPrice})
            localStorage.setItem("myCart", JSON.stringify(cart))
            updateCart()
        }
        if(movieOnSale === false) {
            cart.push({title: title, price: price})
            localStorage.setItem("myCart", JSON.stringify(cart))
            updateCart()
        }
    }
        
    }


function updateCart(movieOnSale) {
    const listCart = document.querySelector(".listCart");
    listCart.innerHTML = "";
    cart.forEach(item => {
        if (movieOnSale === false) {
        listCart.innerHTML += `
            <span class="cartCard">
                <h4>${item.title}</h4>
                <h5>${item.price}</h5>
                <button class="remove">Remove</button></span>
                `;
            }else {
                listCart.innerHTML += `
                <span class="cartCard">
                <h4>${item.title}</h4>
                <h5>${item.discountedPrice}</h5>
                <button class="remove">Remove</button></span>
                `;
            }
    })
}

updateCart()


fetchApi();

const iconCart = document.querySelector(".shoppingBag");
const body = document.querySelector("body");
const closeCart = document.querySelector(".close")


iconCart.addEventListener("click", () => {
    body.classList.toggle("showCart")
})
closeCart.addEventListener("click", () => {
    body.classList.toggle("showCart")
})




