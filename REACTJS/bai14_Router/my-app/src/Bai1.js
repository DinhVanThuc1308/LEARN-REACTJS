import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
  useNavigate,
} from "react-router-dom";
import "./styles.css";
import { Container, Navbar, Nav } from "react-bootstrap";

function HomePage() {
  return <h3>Home - Danh sách sản phẩm</h3>;
}

function ProductPage() {
  let { productId } = useParams();
  return <h3>Product - ID sản phẩm: {productId}</h3>;
}

function AdminPage() {
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkIsAdmin = () => {
      const isAdmin = localStorage.getItem("isAdmin", true);
      setIsAdmin(isAdmin);
      if (!isAdmin) {
        setTimeout(() => {
          navigate("/");
        }, 3000);
      }
    };

    checkIsAdmin();
  }, []);

  return isAdmin ? (
    <h3>Admin - Bạn có quyền truy cập</h3>
  ) : (
    <h3>
      Admin - Bạn không có quyền truy cập, sẽ chuyển về Trang chủ sau 3 giây
    </h3>
  );
}

function Bai1() {
  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">React Router Demo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/product/1">
                Product 1
              </Nav.Link>
              <Nav.Link as={Link} to="/product/2">
                Product 2
              </Nav.Link>
              <Nav.Link as={Link} to="/admin">
                Admin
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-4 mb-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:productId" element={<ProductPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default Bai1;
