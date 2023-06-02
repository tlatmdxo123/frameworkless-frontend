const getTodoCount = (todos) => {
  const notCompleted = todos.filter((todo) => !todo.completed);
  const length = notCompleted.length;

  return `${length} ${length === 1 ? "Item" : "Items"} left`;
};

const counterView = (targetElement, { todos }) => {
  const element = targetElement.cloneNode(true);
  element.textContent = getTodoCount(todos);

  return element;
};

export default counterView;
