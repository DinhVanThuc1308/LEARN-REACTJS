let Element_add = document.querySelector("#btn-add-food");

const items = [
  { name: "Bike", price: 100, quantity: 1 },
  { name: "TV", price: 200, quantity: 1 },
  { name: "Album", price: 10, quantity: 4 },
];
const SHIPPING = 2;
function render() {
  let Element_subTotal = document.querySelector("#subtotal");
  let Element_Shipping = document.querySelector("#Shipping");
  let Element_Total = document.querySelector("#Total");

  let Element_order_items = document.querySelector(".order-items");
  let subTotal = 0;
  items.forEach((item) => {
    subTotal += item.quantity + item.price;
  });
  const total = subTotal + SHIPPING;
  const html = items
    .map(
      (item) => `<li class="order-item">
    <span class="items-name">${item.name}</span>
    <span class="quantity">
      <button class="dec">-</button>
      <input type="number" class="quanlity" value="${item.quantity}" />
      <button class="inc">+</button>
    </span>
    <span class="price">
      <span>${item.price}</span>
      <button class="delete btn-del">X</button>
    </span>
  </li>`
    )
    .join("");
  Element_order_items.innerHTML = html;
  console.log(html);
  Element_subTotal.innerHTML = `${subTotal}`;
  Element_Shipping.innerHTML = `${SHIPPING}`;
  Element_Total.innerHTML = `${total}`;
  var del = document.querySelector(".delete");

  const deleteButton = del;
  for (let i = 0; i < deleteButton.length; i++) {
    deleteButton[i].addEventListener("click", function () {
      remove(i);
    });
  }
}

function add() {
  items.push({
    name: `Pizza ${Math.random()}`,
    price: Math.random() * 10,
    quantity: 1,
  });
  render();
}
function remove(index) {
  items.splice(index, 1);
  render();
}
Element_add.addEventListener("click", () => {
  add();
});
render();
