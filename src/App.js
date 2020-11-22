import React, { useEffect, useState } from "react";
import axios from "axios";
import ButtonBasket from "./ButtonBasket";
import ProductBasket from "./ProductBasket";
import { Col } from "bootstrap-4-react";
import "./styles.css";
import "./basket.css";
import "./product.css";

export default function App() {
  const [product, setProduct] = useState([{}]);
  const [plus, setPlus] = useState(0);
  useEffect(() => {
    axios
      .get("/api/product.json")
      .then((response) => setProduct(response.data));
  }, []);

  return (
    <Col className="App">
      <ButtonBasket len={product.length} />
      <ProductBasket product={product} setPlus={setPlus} plus={plus} />
    </Col>
  );
}
