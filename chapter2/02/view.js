import counterView from "./counterView";
import filtersView from "./filtersView";
import todosView from "./todosView";

const view = (targetElement, state) => {
  const element = targetElement.cloneNode(true);

  const list = element.querySelector(".todo-list");
  const count = element.querySelector(".todo-count");
  const filters = element.querySelector(".filters");

  list.replaceWith(todosView(list, state));
  count.replaceWith(counterView(count, state));
  filters.replaceWith(filtersView(filters, state));

  return element;
};

export default view;
