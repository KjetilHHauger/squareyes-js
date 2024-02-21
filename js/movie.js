const apiUrl = "https://api.noroff.dev/api/v1/square-eyes";
const content = document.getElementById("content");
const listCart = document.querySelector(".listCart");
const loader = document.getElementById("loader");
const checkout = document.querySelector(".checkOut");
const iconCart = document.querySelector(".shoppingBag");
const body = document.querySelector("body");
const closeCart = document.querySelector(".close");
const cart = JSON.parse(localStorage.getItem("myCart")) || [];

function getIdFromURL() {
  let url = window.location.href;
  let parts = url.split("/");
  let removeMovie = parts[parts.length - 1];
  let id = removeMovie.split("?")[1];
  return id;
}
async function fetchApi() {
  loader.style.display = "block";
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
                        <div class="movieCardImg">
                          <img src="${data.image}" alt="Image of ${data.title}">
                        </div>
                        <div class="movieCardInfo">
                        <h2>${data.title}</h2>
                        <h3>${data.rating}</h3>
                        <h3>${data.released}</h3>
                        <h3>${data.price}<span>${data.discountedPrice}</span></h3>
                        <p>${data.description}</p>
                        <button class="addToCart">Add to cart</button>
                        </div>
                    </div>
                `;
        document.querySelector(".addToCart").addEventListener("click", () => {
          const movieTitle = data.title;
          const moviePrice = data.price;
          const movieDiscounted = data.discountedPrice;
          const movieOnSale = data.onSale;
          const movieImage = data.image;
          addToCart(
            movieTitle,
            moviePrice,
            movieDiscounted,
            movieOnSale,
            movieImage
          );
        });
      }
    }
  } catch (error) {
    renderError();
  }

  loader.style.display = "none";
}
function renderError() {
  const error = document.getElementById("content");
  error.innerHTML = "ERROR, could not load API data. Please reload";
}
function addToCart(title, price, discountedPrice, movieOnSale, movieImage) {
  const movieInCart = cart.find((cartItem) => cartItem.title === title);
  if (movieInCart) {
    alert("Item is already in cart");
  } else {
    cart.push({
      title: title,
      discountedPrice: discountedPrice,
      price: price,
      movieOnSale: movieOnSale,
      movieImage: movieImage,
    });
    localStorage.setItem("myCart", JSON.stringify(cart));
    updateCart(true || false);
  }
}
function updateCart(movieOnSale) {
  const listCart = document.querySelector(".listCart");
  listCart.innerHTML = "";
  cart.forEach((item) => {
    if (movieOnSale === true) {
      listCart.innerHTML += `
            <span class="cartCard">
                <h4>${item.title}</h4>
                <h5>${item.discountedPrice}</h5>
                <button class="remove">Remove</button>
                </span>
                `;
    }
    if (movieOnSale === false) {
      listCart.innerHTML += `
                <span class="cartCard">
                <h4>${item.title}</h4>
                <h5>${item.price}</h5>
                <button class="remove">Remove</button>
                </span>
                `;
    }
  });
  const removeBtn = document.querySelectorAll(".remove");
  removeBtn.forEach((button) => {
    button.addEventListener("click", () => {
      const removeMovie = button.parentElement;
      const indexToRemove = Array.from(removeBtn).indexOf(button);
      removeMovie.remove();
      cart.splice(indexToRemove, 1);
      localStorage.removeItem("myCart");
      localStorage.setItem("myCart", JSON.stringify(cart));
    });
  });
  calculateTotal();
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
  listCart.innerHTML += `<div class="basketTotal"><h3>Total NOK: ${total}</div>`;
}

iconCart.addEventListener("click", () => {
  body.classList.toggle("showCart");
});
closeCart.addEventListener("click", () => {
  body.classList.toggle("showCart");
});
checkout.addEventListener("click", () => {
  location.href = "../checkout.html";
});

updateCart(true || false);

fetchApi();
