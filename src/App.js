import { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Article from "./components/Article";
import Create from "./components/Create";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [mode, setMode] = useState("HOME");
  const [selectedId, setSelectedId] = useState(null);
  const [products, setProducts] = useState([]);
  const [nextId, setNextId] = useState(1);

  const handleDelete = (id) => {
    setProducts(products.filter((p) => p.id !== id));
    setMode("HOME");
  };

  let content = null;
  if (mode === "HOME") {
    content = (
      <Nav
        products={products}
        onSelect={(id) => {
          setMode("DETAIL");
          setSelectedId(id);
        }}
      />
    );
  } else if (mode === "DETAIL") {
    const product = products.find((p) => p.id === selectedId);
    content = product ? (
      <Article
        product={product}
        onBack={() => setMode("HOME")}
        onDelete={() => handleDelete(product.id)}
      />
    ) : (
      <p>상품을 찾을 수 없습니다.</p>
    );
  } else if (mode === "CREATE") {
    content = (
      <Create
        onAdd={(title, price, description, location, image) => {
          const newProduct = { id: nextId, title, price, description,
          location, image };
          setProducts([...products, newProduct]);
          setNextId(nextId + 1);
          setMode("HOME");
        }}
      />
    );
  }

  return (
    <div>
      <Header onChangeMode={setMode} />
      <div className="container mt-4">{content}</div>
    </div>
  );
}

export default App;
