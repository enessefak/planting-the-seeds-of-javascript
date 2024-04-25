function Todo() {
  this.todos = [];
}

Todo.prototype.add = function (todo) {
  this.todos.push(todo);
};

Todo.prototype.delete = function (id) {
  this.todos = this.todos.filter(function (todo) {
    return todo.id !== id;
  });
};

Todo.prototype.getAll = function () {
  return this.todos;
};

Todo.prototype.get = function (id) {
  return this.todos.find(function (todo) {
    return todo.id === id;
  });
};

Todo.prototype.update = function (id, updatedData) {
  this.todos = this.todos.map(function (todo) {
    return todo.id === id ? { ...todo, ...updatedData } : todo;
  });
};

todo.add({ id: 1, text: "Buy Milk" });
todo.add({ id: 2, text: "Buy Eggs" });
todo.add({ id: 3, text: "Buy Bread" });

todo.update(2, { text: "Buy Oranges" });

window.todo = todo;

// for (const key in todo) {
//     console.log(key)
//     console.log(Object.hasOwn(todo, key))
//     if (Object.hasOwnProperty(key)) {
//         // const element = object[key];
//         Object.hasOwn(todo, key); // true
//     }
// }

// console.log(todo.get(1));
// console.log(todo.getAll());

