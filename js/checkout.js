const apiUrl = "https://api.noroff.dev/api/v1/square-eyes";
const loader = document.getElementById("loader");
const checkOutBasket = document.getElementById("checkOutBasket");
const checkoutForm = document.getElementById("checkoutForm");

let cart = JSON.parse(localStorage.getItem("myCart"));

function localBasket() {
  if (!cart || cart.length === 0) {
    checkOutBasket.innerHTML = `<h2>Cart is empty</h2>`;
    return;
  }
  cart.forEach((movie) => {
    if (movie.movieOnSale === false) {
      checkOutBasket.innerHTML += `
                <div class="checkoutMovieCard">
                    <img src="${movie.movieImage}" alt="${movie.title}">
                    <div>${movie.title}</div>
                    <div>${movie.price}</div>
                </div>
            `;
    } else {
      checkOutBasket.innerHTML += `
                <div class="checkoutMovieCard">
                    <img src="${movie.movieImage}" alt="${movie.title}">
                    <div>${movie.title}</div>
                    <div>${movie.discountedPrice}</div>
                </div>
            `;
    }
  });
  checkOutButton();
  calculateTotal();
}
function checkOutButton() {
  if (!cart || cart.length === 0) {
    checkoutFormContent.innerHTML += ``;
  } else {
    checkoutFormContent.innerHTML += `
        <button class="formCheckOut">
                Checkout
        </button>`;
  }
  const formCheckOut = document.querySelector(".formCheckOut")
  formCheckOut.addEventListener("click", () => {
    location.href = "../success.html";
  });
}
function calculateTotal() {
  let total = 0;
  cart.forEach((moviePrice) => {
    if (moviePrice.movieOnSale === false) {
      total += moviePrice.price;
    }
    if (moviePrice.movieOnSale === true) {
      total += moviePrice.discountedPrice;
    }
  });
  checkOutBasket.innerHTML += `<div class="basketTotal"><h3>Total NOK: ${total}</div>`;
}

localBasket();
