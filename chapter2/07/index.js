import getTodos from "./getTodos.js";
import todosView from "./view/todos.js";
import counterView from "./view/counter.js";
import filtersView from "./view/filters.js";
import appView from "./view/app.js";
import applyDiff from "./applyDiff.js";

import registry from "./registry.js";

registry.add("app", appView);
registry.add("todos", todosView);
registry.add("counter", counterView);
registry.add("filters", filtersView);

const state = {
  todos: getTodos(),
  currentFilter: "All",
};

const events = {
  deleteItem: (index) => {
    state.todos = state.todos.filter((todo, i) => i !== index);
    render();
  },
  addItem: (text) => {
    state.todos = [...state.todos, { text, completed: false }];
    render();
  },
};

const render = () => {
  window.requestAnimationFrame(() => {
    const main = document.querySelector("#root");
    const newMain = registry.renderRoot(main, state, events);
    applyDiff(document.body, main, newMain);
  });
};

render();
