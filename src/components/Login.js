import React from "react";
import { Form, Button, Container, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <Card
        style={{
          width: "100%",
          maxWidth: "400px",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        <Card.Body>
          <h2
            className="text-center mb-4"
            style={{ fontWeight: "bold", color: "#ff8a3d" }}
          >
            🥕 당근마켓
          </h2>
          <Form>
            {/* 이메일 입력 */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>이메일</Form.Label>
              <Form.Control
                type="email"
                placeholder="이메일을 입력하세요"
                style={{ borderRadius: "8px" }}
              />
            </Form.Group>

            {/* 비밀번호 입력 */}
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>비밀번호</Form.Label>
              <Form.Control
                type="password"
                placeholder="비밀번호를 입력하세요"
                style={{ borderRadius: "8px" }}
              />
            </Form.Group>

            {/* 로그인 버튼 */}
            <Button
              variant="warning"
              type="submit"
              className="w-100 mt-2"
              style={{
                backgroundColor: "#ff8a3d",
                border: "none",
                borderRadius: "8px",
                fontWeight: "bold",
                fontSize: "1.1rem",
                color: "white",
              }}
            >
              로그인
            </Button>

            {/* 회원가입 & 비밀번호 찾기 */}
            <div className="text-center mt-3">
              <span className="text-muted">계정이 없으신가요?</span>
              <Button
                variant="link"
                onClick={() => navigate("/signup")}
                style={{
                  textDecoration: "none",
                  color: "#ff8a3d",
                  fontWeight: "bold",
                }}
              >
                회원가입
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}
