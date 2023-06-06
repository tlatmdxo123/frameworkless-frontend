let template;

const createNewTodo = () => {
  if (!template) template = document.getElementById("todo-item");

  return template.content.firstElementChild.cloneNode(true);
};

const getTodoElement = (todo, index, events) => {
  const { text, completed } = todo;

  const element = createNewTodo();

  element.querySelector("input.edit").value = text;
  element.querySelector("label").textContent = text;

  if (completed) {
    element.classList.add("completed");
    element.querySelector("input.toggle").checked = true;
  }

  element.querySelector("button.destroy").dataset.index = index;

  return element;
};

const todos = (targetElement, { todos }) => {
  const newTodoList = targetElement.cloneNode(true);

  newTodoList.innerHTML = "";

  todos
    .map(getTodoElement)
    .forEach((element) => newTodoList.appendChild(element));

  newTodoList.addEventListener("click", (e) => {
    if (e.target.matches("button.destroy")) {
      deleteItem(e.target.dataset.index);
    }
  });

  return newTodoList;
};
