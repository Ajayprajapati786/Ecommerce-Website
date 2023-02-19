import React, { useState, useEffect } from "react";
import { Container, Nav, Navbar, Modal, Button } from "react-bootstrap";
import Cart from "./Cart";

const Header = (props) => {
  const [showCart, setShowCart] = useState(false);

  const handleCartClick = () => {
    setShowCart(true);
  };

  const handleCartClose = () => {
    setShowCart(false);
  };

  const [updatedcartItems, setUpdatedCartItems] = useState([]);

  useEffect(() => {
    setUpdatedCartItems(props.cartItems);
    // console.log("from Header.js");
    // updatedcartItems.forEach((item) => {
    //   console.log(item);
    // });
  }, [props.cartItems]);
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Ecommerce App</Navbar.Brand>
          <Nav className="mx-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Store</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
          </Nav>
          <button
            className="text-muted"
            style={{
              border: "2px solid skyblue",
              padding: "5px",
              borderRadius: "5px",
            }}
            onClick={handleCartClick}
          >
            Cart{" "}
            <span className="text-primary">
            <sup>{updatedcartItems.length}</sup>
            </span>
          </button>
        </Container>
      </Navbar>
      <Modal show={showCart} onHide={handleCartClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Cart toCartjs={updatedcartItems} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCartClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Header;
