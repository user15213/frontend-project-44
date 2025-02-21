const getRandomIntInRange = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export const getRandomNonNegative = () => Math.floor(Math.random());

export default getRandomIntInRange;
