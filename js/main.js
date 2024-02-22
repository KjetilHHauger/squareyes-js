const content = document.getElementById("content");
const apiUrl = "https://api.noroff.dev/api/v1/square-eyes";
const allFilter = document.getElementById("all");
const actionFilter = document.getElementById("action");
const comedyFilter = document.getElementById("comedy");
const dramaFilter = document.getElementById("drama");
const horrorFilter = document.getElementById("horror");
const kidsFilter = document.getElementById("kids");
const movieCard = document.getElementById("card");
const loader = document.getElementById("loader");
const checkout = document.querySelector(".checkOut");
const iconCart = document.querySelector(".shoppingBag");
const closeCart = document.querySelector(".close");
const body = document.querySelector("body");
const cart = JSON.parse(localStorage.getItem("myCart")) || [];
const listCart = document.querySelector(".listCart");

let apiData = [];

async function fetchApi() {
  loader.style.display = "block";
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
                            <span class="price"><s>${data.price}</s></span>
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
  loader.style.display = "none";
}
function renderError() {
  const error = document.getElementById("content");
  error.innerHTML = "ERROR, could not load API data. Please reload";
}
function filterAll() {
  content.innerHTML = "";
  fetchApi();
}
function filterAction(genreToFilterBy) {
  content.innerHTML = "";
  let actionResults = [];
  for (const data of apiData) {
    if (data.genre === genreToFilterBy) {
      actionResults.push(data);
    }
    if (data.genre === "Action" && data.onSale === false) {
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
      content.innerHTML += `
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
function filterComedy(genreToFilterBy) {
  content.innerHTML = "";
  let comedyResults = [];
  for (const data of apiData) {
    if (data.genre === genreToFilterBy) {
      comedyResults.push(data);
    }
    if (data.genre === "Comedy" && data.onSale === false) {
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
      content.innerHTML += `
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
    }
    if (data.genre === "Drama" && data.onSale === true) {
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
      content.innerHTML += `
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
function filterHorror(genreToFilterBy) {
  content.innerHTML = "";
  let horrorResults = [];
  for (const data of apiData) {
    if (data.genre === genreToFilterBy) {
      horrorResults.push(data);
    }
    if (data.genre === "Horror" && data.onSale === false) {
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
      content.innerHTML += `
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
function filterKids(genreToFilterBy) {
  content.innerHTML = "";
  let kidsResults = [];
  for (const data of apiData) {
    if (data.genre === genreToFilterBy) {
      kidsResults.push(data);
    }
    if (data.genre === "Kids" && data.onSale === false) {
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
      content.innerHTML += `
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
function dropdownFilterFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
function removeCartMovie(event) {
  const removeBtn = event.target;
  const removeMovie = removeBtn.parentElement;
  const movieToRemove = Array.from(removeMovie.parentElement.children).indexOf(removeMovie);
  removeMovie.remove();
  cart.splice(movieToRemove, 1);
  localStorage.setItem("myCart", JSON.stringify(cart));
  updateCart(true || false);
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
      button.removeEventListener("click", removeCartMovie);
      button.addEventListener("click", removeCartMovie);
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
  total = total.toFixed(2)
  listCart.innerHTML += `<div class="basketTotal"><h3>Total NOK: ${total}</div>`;
}

window.onclick = function (dropDownClick) {
  if (!dropDownClick.target.matches("#filterButton")) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

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
iconCart.addEventListener("click", () => {
  body.classList.toggle("showCart");
});
closeCart.addEventListener("click", () => {
  body.classList.toggle("showCart");
});
checkout.addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Cart is empty");
  } else {
    location.href = "../checkout.html";
  }
});
document.addEventListener("click", function(removeEvent) {
  if (removeEvent.target.classList.contains("remove")) {
    removeCartMovie(removeEvent)
  }
})


fetchApi();

updateCart(true || false);
