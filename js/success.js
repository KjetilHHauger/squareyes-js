const orderConfirmation = document.getElementById("orderConfirmation");

let cart = JSON.parse(localStorage.getItem("myCart")) || [];

function orderConfirm() {
  if (!cart || cart.length === 0) {
    window.location.href = "../index.html";
  } else {
    orderConfirmation.innerHTML += `
        <p>We have also sent you some stickers of big bird as a gift for your support of our site</p>
        <img src="assets/images/bigbird.webp" alt="Big Bird">
              `;
    cart.forEach((movie) => {
      imgConfirm.innerHTML += `<img src="${movie.movieImage}" alt="${movie.title}">`;
    });
  }
}

orderConfirm();

localStorage.clear();
