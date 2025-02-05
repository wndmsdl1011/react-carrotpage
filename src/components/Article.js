import React from "react";

export default function Article({ product, onBack, onDelete }) {
  if (!product) return <p>상품을 찾을 수 없습니다.</p>;

  return (
    <article>
      <h2>{product.title}</h2>
      <img
        src={product.image || "https://via.placeholder.com/150"}
        alt={product.title}
        style={{ maxWidth: "300px", height: "auto" }}
      />
      <p>
        <strong>가격:</strong> {product.price}
      </p>
      <p>
        <strong>설명:</strong> {product.description}
      </p>
      <p>
        <strong>지역:</strong> {product.location}
      </p>

      <button onClick={onDelete}>삭제하기</button>
      <button onClick={onBack}>뒤로 가기</button>
    </article>
  );
}
