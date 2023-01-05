function getRandomInt(min, max) {
  const int = Math.round(Math.random() * (max - min)) + min;
  return int;
}
export default getRandomInt;
