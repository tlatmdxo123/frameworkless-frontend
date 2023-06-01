const getTodoElement = (todo) => {
  const { text, completed } = todo;
  return `
        <li>
            <div class='view'>
                <input 
                ${completed ? "checked" : ""} 
                type='checkbox' class='toggle'/>
                <label>${text}</label>
                <button class='edit'></button>
            </div>
            <input class='edit' value="${text}"/>
        </li>
    `;
};

const getTodoCount = (todos) => {
  const notCompleted = todos.filter((todo) => !todo.completed);
  const length = notCompleted.length;

  return `${length} ${length === 1 ? "Item" : "Items"} left`;
};

const view = (targetElement, state) => {
  const { currentFilter, todos } = state;
  const element = targetElement.cloneNode(true);

  const list = element.querySelector(".todo-list");
  const count = element.querySelector(".todo-count");
  const filters = element.querySelector(".filters");

  list.innerHTML = getTodoElement(todo);
  count.innerHTML = getTodoCount(todo);

  Array.from(filters.querySelectorAll("li a")).forEach((a) =>
    a.textContent === currentFilter
      ? a.classList.add("selected")
      : a.classList.remove("selected")
  );

  return element;
};

export default view;
