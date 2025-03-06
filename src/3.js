const getRandomColor = () => {
  const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
  return colors[Math.floor(Math.random() * colors.length)];
};

console.log(getRandomColor());
