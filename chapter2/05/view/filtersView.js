const filtersView = (targetElement, { currentFilter }) => {
  const element = targetElement.clone(true);
  Array.from(element.querySelectorAll("li a")).forEach((a) =>
    a.textContent === currentFilter
      ? a.classList.add("selected")
      : a.classList.remove("selected")
  );

  return element;
};

export default filtersView;
