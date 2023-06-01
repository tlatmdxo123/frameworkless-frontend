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

const todosView = (targetElement, { todos }) => {
  const element = targetElement.cloneNode(true);
  element.innerHTML = todos.map((todo) => getTodoElement(todo)).join("");
  return element;
};

export default todosView;
