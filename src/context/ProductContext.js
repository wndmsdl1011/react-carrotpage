import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  // ✅ 백엔드에서 제품 목록 가져오기
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  // ✅ 상품 삭제
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8080/api/products/${id}`)
      .then(() => setProducts(products.filter((p) => p.id !== id)))
      .catch((error) => console.error("Error deleting product:", error));
  };

  // ✅ 상품 수정
  const handleUpdate = (id, title, price, description, location, image) => {
    axios
      .put(`http://localhost:8080/api/products/${id}`, {
        title,
        price,
        description,
        location,
        image,
      })
      .then((response) => {
        setProducts(products.map((p) => (p.id === id ? response.data : p)));
      })
      .catch((error) => console.error("Error updating product:", error));
  };

  // ✅ 상품 추가
  const handleAdd = (title, price, description, location, image) => {
    axios
      .post("http://localhost:8080/api/products", {
        title,
        price,
        description,
        location,
        image,
      })
      .then((response) => setProducts([...products, response.data]))
      .catch((error) => console.error("Error creating product:", error));
  };

  return (
    <ProductContext.Provider
      value={{ products, handleDelete, handleUpdate, handleAdd }}
    >
      {children}
    </ProductContext.Provider>
  );
};
