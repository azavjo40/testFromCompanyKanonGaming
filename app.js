const arr = ["cherry", "lemon", "apple", "banana"];
let money = 20;
const change = (arr) => {
  let randomOption = Math.floor(Math.random() * arr.length);
  if (randomOption === 0) {
    return "Cherry";
  }
  if (randomOption === 1) {
    return "Lemon";
  }
  if (randomOption === 2) {
    return "Apple";
  }
  if (randomOption === 3) {
    return "Banana";
  }
};

const play = () => {
  money--;
  const a = change(arr);
  const b = change(arr);
  const c = change(arr);
  const d = change(arr);
  if (a === "Cherry") {
    money += 20;
  }
  console.log(a, b, c, d, money);
};

play();
