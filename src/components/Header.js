import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <Navbar style={{ backgroundColor: "#ff8a3d" }} expand="lg" variant="dark">
      <Container>
        {/* 당근마켓 로고 (클릭 시 홈으로 이동) */}
        <Navbar.Brand
          href="#"
          onClick={(event) => {
            event.preventDefault();
            navigate("/"); // 🔥 `onChangeMode("HOME")` 대신 `navigate("/")` 사용
          }}
          style={{
            fontWeight: "bold",
            fontSize: "1.5rem",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          🥕 당근마켓
        </Navbar.Brand>

        {/* 반응형 토글 버튼 */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              onClick={() => navigate("/")}
              style={{ color: "#fff", fontSize: "1.1rem", cursor: "pointer" }}
            >
              동네생활
            </Nav.Link>
            <Nav.Link
              onClick={() => navigate("/product")}
              style={{ color: "#fff", fontSize: "1.1rem", cursor: "pointer" }}
            >
              중고거래
            </Nav.Link>
            <Nav.Link
              onClick={() => navigate("/job")}
              style={{ color: "#fff", fontSize: "1.1rem", cursor: "pointer" }}
            >
              알바
            </Nav.Link>
            <Button
              variant="light"
              style={{ fontWeight: "bold", marginLeft: "10px" }}
              onClick={() => navigate("/create")}
            >
              + 상품 등록
            </Button>
            <Button
              variant="outline-light"
              style={{ fontWeight: "bold", marginLeft: "10px" }}
              onClick={() => navigate("/login")}
            >
              로그인
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
