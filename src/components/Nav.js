import React from "react";

export default function Nav({ products, onSelect }) {
  return (
    <nav>
      <h2>판매 목록</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <a href="/" onClick={(event) => {
              event.preventDefault();
              onSelect(product.id);
            }}>
              {product.title} - {product.price}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}