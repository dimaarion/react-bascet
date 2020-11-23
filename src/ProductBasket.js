import React from "react";
import { Container } from "bootstrap-4-react";
import { counter, arraySumm } from "./action";
export default function ProductBasket(props) {
  return (
    <Container>
      <table id="product">
        <thead>
          <tr>
            <th>Артикул</th>
            <th>Название</th>
            <th>Цена</th>
            <th>Количество</th>
            <th>Сумма</th>
          </tr>
        </thead>
        <tbody>
          {props.product.map((p, i) => (
            <tr key={p.id} className="productTr">
              <td>{p.id}</td>
              <td>{p.names}</td>
              <td>{p.price}</td>
              <td className="num">
                <table>
                  <thead></thead>
                  <tbody>
                    <tr>
                      <td>
                        <button
                          type="button"
                          onClick={(e) => {
                            counter(p, props.product, "MINUS", arraySumm);
                          }}
                        >
                          <svg
                            width="1em"
                            viewBox="0 0 16 16"
                            className="bi bi-plus"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"
                            />
                          </svg>
                        </button>
                      </td>
                      <td>
                        <div className="productCounter">{p.counter}</div>
                      </td>
                      <td>
                        <button
                          type="button"
                          onClick={(e) => {
                            counter(p, props.product, "PLUS", arraySumm);
                          }}
                        >
                          <svg
                            width="1em"
                            viewBox="0 0 16 16"
                            className="bi bi-dash"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                            />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td className="summ">{p.price}</td>
              <td>
                <svg
                  width="2em"
                  viewBox="0 0 16 16"
                  className="bi bi-x"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </td>
            </tr>
          ))}
          <tr>
            <td className="rezult">Итого:</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
