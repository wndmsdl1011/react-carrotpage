import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import Nav from "../components/Nav";
import Article from "../components/Article";
import Create from "../components/Create";
import Update from "../components/Update";
import Login from "../components/Login";
import Signup from "../components/Signup";

export default function RouterComponent() {
  const { products, handleDelete, handleUpdate, handleAdd } =
    useContext(ProductContext);

  return (
    <Routes>
      <Route path="/" element={<Nav products={products} />} />
      <Route
        path="/product/:id"
        element={<Article products={products} onDelete={handleDelete} />}
      />
      <Route path="/create" element={<Create onAdd={handleAdd} />} />
      <Route
        path="/update/:id"
        element={<Update products={products} onUpdate={handleUpdate} />}
      />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}
