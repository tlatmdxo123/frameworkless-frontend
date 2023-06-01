const { faker } = window;
export const getTodos = () => {
  const howMany = faker.random.number(10);
  return new Array(howMany).fill(0).map((_) => ({
    text: faker.random.words(2),
    completed: faker.random.boolean(),
  }));
};
