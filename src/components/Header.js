import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";

export default function Header({ onChangeMode }) {
  return (
    <Navbar style={{ backgroundColor: "#ff8a3d" }} expand="lg" variant="dark">
      <Container>
        {/* 당근마켓 로고 (상품 목록 유지하도록 수정) */}
        <Navbar.Brand
          href="#"
          onClick={(event) => {
            event.preventDefault();
            onChangeMode("HOME"); // 상태를 초기화하지 않고 홈으로 이동
          }}
          style={{ fontWeight: "bold", fontSize: "1.5rem", color: "#fff" }}
        >
          🥕 당근마켓
        </Navbar.Brand>

        {/* 반응형 토글 버튼 */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#" style={{ color: "#fff", fontSize: "1.1rem" }}>
              동네생활
            </Nav.Link>
            <Nav.Link href="#" style={{ color: "#fff", fontSize: "1.1rem" }}>
              중고거래
            </Nav.Link>
            <Nav.Link href="#" style={{ color: "#fff", fontSize: "1.1rem" }}>
              알바
            </Nav.Link>
            <Button
              variant="light"
              style={{ fontWeight: "bold", marginLeft: "10px" }}
              onClick={() => onChangeMode("CREATE")}
            >
              + 상품 등록
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
