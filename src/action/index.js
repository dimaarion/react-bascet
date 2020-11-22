export function counter(p, n, state = [{}], type) {
  switch (type) {
    case "PLUS":
      let l = state.map((x, i) =>
        p.id === x.id
          ? { id: x.id, names: x.names, price: x.price, counter: x.counter++ }
          : x
      );
      return n(l);
    case "MINUS":
      let m = state.map((x, i) =>
        p.id === x.id
          ? { id: x.id, names: x.names, price: x.price, counter: x.counter-- }
          : x
      );
      return n(m);
    default:
      return state;
  }
}
