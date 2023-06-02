import todosView from "./view/todosView";
import counterView from "./view/counterView";
import filtersView from "./view/filtersView";

import registry from "./registry";
import getTodos from "./getTodos";
import applyDiff from "./applyDiff";

registry.add("todos", todosView);
registry.add("counter", counterView);
registry.add("filters", filtersView);

const state = {
  todos: getTodos(),
  currentFilter: "All",
};

const render = () => {
  window.requestAnimationFrame(() => {
    const main = document.querySelector(".todoapp");
    const newMain = registry.renderRoot(main, state);
    applyDiff(document.body, main, newMain);
  });
};

setInterval(() => {
  state.todos = getTodos();
  render();
}, 5000);

render();
