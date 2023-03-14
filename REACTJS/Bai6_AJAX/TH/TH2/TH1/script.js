let todos = [];
const ulElement = document.querySelector("ul");
const backBtn = document.querySelector("#back");
const nextBtn = document.querySelector("#next");
let limit = 20;
let page = 1;
function getTodo(params) {
  axios
    .get(
      `https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=${page}`
    )
    .then(function (res) {
      todos = res.data;
      // console.log(todos);
      render();
    });
}

getTodo({
  limit: limit,
  page: page,
});
backBtn.addEventListener("click", function () {
  handleBack();
});
nextBtn.addEventListener("click", function () {
  handleNext();
});

function handleBack() {
  page = page - 1;
  getTodo({
    limit: limit,
    page: page,
  });
}

function handleNext() {
  // if (todos.length < limit) return (page = page + 1);
  page = page + 1;

  getTodo({
    limit: limit,
    page: page,
  });
}
function handleDelete(index) {
  todos.splice(index, 1);
  render();
}
function handleEdit(index) {
  const input = document.querySelector("input");
  input.value = todos[index].title;
  globalIndex = index;
  render();
}

function render() {
  const liElement = todos.map(function (todo) {
    return `
            <li><span>${todo.title}</span>
            <button id="edit">Edit</button>
            <button id="delete">Delete</button></li>
        `;
  });
  ulElement.innerHTML = liElement.join("");
  const deleteButtons = document.querySelectorAll("#delete");

  for (let index = 0; index < deleteButtons.length; index++) {
    const deleteButton = deleteButtons[index];
    deleteButton.addEventListener("click", function () {
      handleDelete(index);
    });
  }

  const editButtons = document.querySelectorAll("#edit");

  for (let index = 0; index < editButtons.length; index++) {
    const editButton = editButtons[index];
    editButton.addEventListener("click", function () {
      save.innerHTML = "Save";
      handleEdit(index);
      console.log("Index hàm edit:", index);
    });
  }
}
getTodo();
function addTodo(todo) {
  axios
    .post("https://jsonplaceholder.typicode.com/todos", todo)
    .then(function (res) {
      if (res.data) {
        getTodo();
      }
    });
}
function handleSubmit(event) {
  event.preventDefault();
  const input = document.querySelector("input");
  const value = input.value.trim();
  if (!value) return alert("thất bại");
  addTodo({
    userId: 1,
    title: value,
    completed: false,
  });
}
// const form = document.querySelector("form");
// form.addEventListener("submit", handleSubmit);
