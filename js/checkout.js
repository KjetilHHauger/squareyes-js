const apiUrl = 'https://api.noroff.dev/api/v1/square-eyes';
const loader = document.getElementById("loader")
const checkOutBasket = document.getElementById("checkOutBasket")

function localBasket () {
    let cart = JSON.parse(localStorage.getItem("myCart"))
    console.log(cart)
    cart.forEach(movie => {
        checkOutBasket.innerHTML += `
        <div>
            <img src="${movie.movieImage}" alt="">
            <div>${movie.title}</div>
            <div>${movie.price}</div>
        </div>
    `
    });
    
    console.log(checkOutBasket)
}

localBasket()