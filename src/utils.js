export function capitalize(str) {
  return str && str[0].toUpperCase() + str.slice(1);
}

export function fahToCel(fah) {
  return (fah - 32) * (5 / 9);
}

export function celToFah(cel) {
  return  (cel * (9 / 5)) + 32;
}
