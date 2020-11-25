import React, { useEffect, useState } from "react";
import axios from "axios";
import ButtonBasket from "./ButtonBasket";
import ProductBasket from "./ProductBasket";
import Err from "./Err";
import { Col } from "bootstrap-4-react";
import "./styles.css";
import "./basket.css";
import "./product.css";
import { arraySumm, sessions } from "./action";
export default function App() {
  const [product, setProduct] = useState([{}]);
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    axios
      .get("/api/product.json")
      .then((response) => setProduct(response.data));
  }, []);
  useEffect(() => {
    arraySumm();
  }, [display]);
  useEffect(() => {
    sessions(product);
  }, [product]);
  return (
    <Col className="App">
      <ButtonBasket len={product.length} setDisplay={setDisplay} />
      {display === true ? (
        Array.isArray(sessions(product).length > 0) ? (
          <ProductBasket product={sessions(product)} />
        ) : (
          <Err setDisplay={setDisplay} />
        )
      ) : (
        ""
      )}
    </Col>
  );
}
