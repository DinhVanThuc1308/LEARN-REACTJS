class ToDo {
  constructor(date) {
    this.date = date;
    this.works = [];
  }
  addWork(work) {
    this.works.push(work);
  }
}

class ToDoList {
  constructor() {
    this.todos = [];
  }

  addToDo(todo) {
    if (this.todos.some((e) => e.date === todo.date)) {
      console.log("Có todo bị trùng ngày");
      return;
    }

    this.todos.push(todo);
  }
}

const w1 = new ToDo("2020-10-10");
w1.addWork("work 1");
w1.addWork("work 2");

const w2 = new ToDo("2020-10-11");
w2.addWork("work 3");
w2.addWork("work 4");

for (const work of w1.works) {
  console.log(work);
}
console.log("------------");
for (const work of w2.works) {
  console.log(work);
}
