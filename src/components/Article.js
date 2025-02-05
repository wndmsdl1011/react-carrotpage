import React from "react";

export default function Article({ product, onBack }) {
  if (!product) return <p>상품을 찾을 수 없습니다.</p>;

  return (
    <article>
      <h2>{product.title}</h2>
      {product.image && <img src={product.image} alt={product.title}/>}
      <p><strong>가격:</strong> {product.price}</p>
      <p><strong>설명:</strong> {product.description}</p>
      <button onClick={onBack}>뒤로 가기</button>
    </article>
  );
}