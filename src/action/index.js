export function counter(p, state = [{}], type) {
  let summ = document.getElementsByClassName("summ");
  let counter = document.getElementsByClassName("productCounter");
  switch (type) {
    case "PLUS":
      let plus = Array.from(counter)
        .filter((f, i) => p.id === i + 1)
        .map((x) => (x.innerHTML = Number.parseInt(x.innerHTML, 0) + 1));
      Array.from(summ)
        .filter((f, i) => p.id === i + 1)
        .map((x) => (x.innerHTML = p.price * Number.parseInt(plus[0], 0)));
      return plus;
    case "MINUS":
      let minus = Array.from(counter)
        .filter((f, i) => p.id === i + 1)
        .map((x) => (x.innerHTML = Number.parseInt(x.innerHTML, 0) - 1));
      Array.from(summ)
        .filter((f, i) => p.id === i + 1)
        .map((x) => (x.innerHTML = p.price * Number.parseInt(minus[0], 0)));
      return minus;
    default:
      return state;
  }
}
