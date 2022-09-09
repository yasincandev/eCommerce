import React from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import { Link } from "react-router-dom";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = () => {
  return (
    <Container>
      <Link
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          padding: "20px",
        }}
        to="/product/:productId"
      >
        {popularProducts.map((item) => (
          <Product item={item} key={item.id} />
        ))}
      </Link>
    </Container>
  );
};

export default Products;
