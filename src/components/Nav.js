import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

export default function Nav({ products, onSelect }) {
  return (
    <nav>
      <h2 style={{ fontWeight: "bold", fontSize: "1.8rem" }}>판매 목록</h2>
      <div className="d-flex flex-wrap gap-3">
        {products.map((product) => (
          <Card key={product.id} style={{ width: "12rem" }}>
            <Card.Img
              variant="top"
              src={product.image || "https://via.placeholder.com/150"}
            />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>가격: {product.price} 원</ListGroup.Item>
              <ListGroup.Item>지역: {product.location}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Button
                style={{
                  backgroundColor: "#ff8a3d", // 당근마켓 색상 적용
                  borderColor: "#ff8a3d",
                  fontWeight: "bold",
                }}
                onClick={(event) => {
                  event.preventDefault();
                  onSelect(product.id);
                }}
              >
                상세 보기
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </nav>
  );
}
