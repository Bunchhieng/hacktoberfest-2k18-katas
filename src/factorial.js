export const factorial = n => {
  if (n < 0) throw new Error("Must provide positive number!!!");
  // TO IMPLEMENT IN ANOTHER PR
  if (n === 0 || n === 1) {
    return 1;
  } else return n * factorial(n - 1);
};
