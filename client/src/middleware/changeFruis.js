export const changeFruis = (data) => {
  const randomFruits = [];
  if (data) {
    const fruits = data.fruits.map((f) => {
      return [f.fruit, f.fruit, f.fruit, f.fruit];
    });
    const fruits1 = fruits.flat();
    while (randomFruits.length < 16) {
      let i = Math.floor(Math.random() * fruits1.length);
      randomFruits.push(fruits1[i]);
    }
    return randomFruits;
  }
};
