// open and close cart
const cartIcon = document.querySelector("#cart-icon");
const cart = document.querySelector(".cart");
const closeCart = document.querySelector("#cart-close");

cartIcon.addEventListener("click", () => {
  cart.classList.add("active");
});
closeCart.addEventListener("click", () => {
  cart.classList.remove("active");
});

if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", start);
} else {
  start();
}
// --------------------Start
function start() {
  addEvents();
}

// ===================Update & Refrender===============
function update() {
  addEvents();
  updateTotal();
}

// =====================Add Events
function addEvents() {
  let cartRemove_btns = document.querySelectorAll(".cart-remove");
  console.log(cartRemove_btns);
  cartRemove_btns.forEach((btn) => {
    btn.addEventListener("click", handle_removeCartItem);
  });
  // change Item quantity
  let cartQuantity_input = document.querySelectorAll(".cart-quantity");
  cartQuantity_input.forEach((input) => {
    input.addEventListener("change", handle_changeItemQuantity);
  });

  // Add item to cart
  let addCart_btns = document.querySelectorAll(".add-cart");
  addCart_btns.forEach((btn) => {
    btn.addEventListener("click", handle_addCartItem);
  });

  // buy order
  const buy_btn = document.querySelector(".btn-buy");
  buy_btn.addEventListener("click", handle_buyOrder);
}

// ============Handle Events Function================
let itemsAdded = [];

function handle_addCartItem() {
  let product = this.parentElement;
  let title = product.querySelector(".product-title").innerHTML;
  let price = product.querySelector(".product-price").innerHTML;
  let imgSrc = product.querySelector(".product-img").src;
  console.log(title, price, imgSrc);

  let newToAdd = {
    title,
    price,
    imgSrc,
  };

  // handle item is alerdu exsit

  if (itemsAdded.find((el) => el.title == newToAdd.title)) {
    alert("This Item is Alerdy Exist");
    return;
  } else {
    itemsAdded.push(newToAdd);
  }

  // Add Product to cart
  let cartBoxElement = CartBoxComponent(title, price, imgSrc);
  let newNode = document.createElement("div");
  newNode.innerHTML = cartBoxElement;
  const cartContent = cart.querySelector(".cart-content");
  cartContent.appendChild(newNode);

  update();
}

function handle_removeCartItem() {
  this.parentElement.remove();
  itemsAdded = itemsAdded.filter(
    (el) => el.title != this.parentElement,
    querySelecto(".cart-product-title").innerHTML
  );

  update();
}
function handle_changeItemQuantity() {
  if (isNaN(this.value) || this.value < 1) {
    this.value = 1;
  }
  this.value = Math.floor(this.value);
  update();
}

function handle_buyOrder() {
  if (itemsAdded.length <= 0) {
    alert("There is No Order to place \n Please make an order First");
    return;
  }
  const cartContent = cart.querySelector(".cart-content");
  cartContent.innerHTML = "";
  alert("Your order is placed successfully");
  itemsAdded = [];
  update();
}

// ========== update @  rerender functions
function updateTotal() {
  let cartBoxes = document.querySelectorAll(".cart-box");
  const totalElement = cart.querySelector(".total-price");

  let total = 0;
  cartBoxes.forEach((cartBox) => {
    let priceElement = cartBox.querySelector(".cart-price");
    let price = parseFloat(priceElement.innerHTML.replace("@", ""));
    let quantity = cartBox.querySelector(".cart-quantity").value;
    total += price * quantity;
  });
  totalElement.innerHTML = total;
}
// HTML components

// function CartBoxComponent(title, price, imgSrc) {
//   return `<div class="cart-box">
//   <img src=${imgSrc} class="cart-img" />
//   <div class="detail-box">

//     <div class="cart-product-title">${title}</div>
//     <div class="cart-price">${price}</div>
//     <input type="number" value="1" class="cart-quantity" />
//   </div>
//   <!-- Remove Cart -->
//   <i class="fa fa-trash-o"></i>
//   </div>`;
// }

function CartBoxComponent(title, price, imgSrc) {
  return `<div class="cart-box">
  <img src=${imgSrc} class="cart-img" />
  <div class="detail-box">
    <div class="cart-container">
      <div class="cart-product-title">${title}</div>
      <div class="cart-price">${price}</div>
    </div>
    <input type="number" value="1" class="cart-quantity" />
  </div>
  <i class="fa fa-trash cart-remove"></i>
</div>`;
}

// ===================================== Change City =====================
