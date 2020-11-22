import React from "react";
import { Container } from "bootstrap-4-react";
import { counter } from "./action";
export default function ProductBasket(props) {
  return (
    <Container>
      <table id="product">
        <tr>
          <th>Артикул</th>
          <th>Название</th>
          <th>Цена</th>
          <th>Количество</th>
          <th>Сумма</th>
        </tr>
        {props.product.map((p, i) => (
          <tr key={p.id}>
            <td>{p.id}</td>
            <td>{p.names}</td>
            <td>{p.price}</td>
            <td className="num">
              <table>
                <tr>
                  <td>
                    <button
                      type="button"
                      onClick={(e) => {
                        counter(p, props.setPlus, props.product, "MINUS");
                      }}
                    >
                      <svg
                        width="1em"
                        viewBox="0 0 16 16"
                        class="bi bi-plus"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"
                        />
                      </svg>
                    </button>
                  </td>
                  <td>
                    <div>{p.counter}</div>
                  </td>
                  <td>
                    <button
                      type="button"
                      onClick={(e) => {
                        counter(p, props.setPlus, props.product, "PLUS");
                      }}
                    >
                      <svg
                        width="1em"
                        viewBox="0 0 16 16"
                        class="bi bi-dash"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        ))}
      </table>
    </Container>
  );
}
