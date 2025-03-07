import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Update({ product, onUpdate }) {
  const [title, setTitle] = useState(product.title);
  const [price, setPrice] = useState(product.price);
  const [description, setDescription] = useState(product.description);
  const [location, setLocation] = useState(product.location);
  const [image, setImage] = useState(product.image);
  const [isFree, setIsFree] = useState(product.price === "무료");

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title || (!isFree && !price) || !description || !location) {
      return alert("모든 필수 항목을 입력해주세요!");
    }
    onUpdate(title, isFree ? "무료" : price, description, location, image);
  };

  return (
    <div className="container mt-4 d-flex justify-content-center">
      <Form onSubmit={handleSubmit} style={{ maxWidth: "550px", width: "100%" }}>
        <h2 className="fw-bold text-center mb-4">상품 수정하기</h2>

        <div className="mb-3 text-center">
          <label className="d-block border rounded p-3" style={{ cursor: "pointer" }}>
            {image ? (
              <img src={image} alt="상품 이미지" style={{ maxWidth: "150px", height: "auto" }} />
            ) : (
              <span>📷 사진 추가</span>
            )}
            <input type="file" accept="image/*" hidden onChange={handleImageChange} />
          </label>
        </div>

        제목
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="제목"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </Form.Group>

        거래 방식<br></br>
        <div className="mb-3 d-flex gap-2 justify-content-start">
          <Button
            variant={isFree ? "outline-secondary" : "dark"}
            onClick={() => setIsFree(false)}
            style={{ flex: "none", padding: "6px 16px", fontSize: "0.9rem" }}
          >
            판매하기
          </Button>
          <Button
            variant={isFree ? "dark" : "outline-secondary"}
            onClick={() => {
              setIsFree(true);
              setPrice("");
            }}
            style={{ flex: "none", padding: "6px 16px", fontSize: "0.9rem" }}
          >
            나눔하기
          </Button>
        </div>

        {!isFree && (
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="₩ 가격(숫자만)을 입력해주세요."
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </Form.Group>
        )}

        자세한 설명
        <Form.Group className="mb-3">
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="상세한 설명을 작성해주세요."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </Form.Group>

        희망지역 입력
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="지역 (예: 서울 강남구)"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </Form.Group>

        <Button
          type="submit"
          style={{ backgroundColor: "#ff8a3d", borderColor: "#ff8a3d", fontWeight: "bold" }}
          className="w-100"
        >
          수정 완료
        </Button>
      </Form>
    </div>
  );
}