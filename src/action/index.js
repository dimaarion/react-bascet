export function counter(p, state = [{}], type, arraySumm) {
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
      arraySumm();
      return plus;
    case "MINUS":
      let minus = Array.from(counter)
        .filter((f, i) => p.id === i + 1)
        .map((x) => (x.innerHTML = Number.parseInt(x.innerHTML, 0) - 1));
      Array.from(summ)
        .filter((f, i) => p.id === i + 1)
        .map((x) => (x.innerHTML = p.price * Number.parseInt(minus[0], 0)));
      arraySumm();
      return minus;
    default:
      return state;
  }
}

export function arraySumm() {
  let rezult = document.getElementsByClassName("rezult");
  let s = document.getElementsByClassName("summ");
  let sum = 0;
  Array.from(s).map((x) => (sum += Number.parseInt(x.innerHTML, 0)));
  Array.from(rezult).map((x) => (x.innerHTML = "Итого: " + sum));
}

export function sessions(j) {
  // let dg = JSON.stringify(j);
  // localStorage.setItem("producttions", dg);
  let productions = JSON.parse(localStorage.getItem("producttions"));
  if (Array.isArray(productions)) {
    return productions;
  } else {
    return [{}];
  }
}
