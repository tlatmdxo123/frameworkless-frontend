let template;

const createAppElement = () => {
  if (!template) {
    template = document.getElementById("todo-app");
  }

  return template.content.firstElementChild.cloneNode(true);
};

const addEvents = (targetElement, events) => {
  targetElement.querySelector(".new-todo").addEventListener("keyPress", (e) => {
    if (e.key === "Enter") {
      events.addItem(e.target.value);
      e.target.value = "";
    }
  });
};

const appView = (targetElement) => {
  const newApp = targetElement.cloneNode(true);
  newApp.innerHTML = "";
  newApp.appendChild(createAppElement());
  addEvents(newApp, events);
  return newApp;
};

export default appView;
