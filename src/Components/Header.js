import React, { useState, useEffect, useContext } from "react";
import { Container, Nav, Navbar, Modal, Button } from "react-bootstrap";
import Cart from "./Cart";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "./auth-context";

const Header = (props) => {
  const [showCart, setShowCart] = useState(false);
  const authCtx = useContext(AuthContext);

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
            <Nav.Link>
              <NavLink activeClassName="active" className="nav-link" to="/home">
                Home
              </NavLink>
            </Nav.Link>
            { (
              <Nav.Link>
                <NavLink
                  activeClassName="active"
                  className="nav-link"
                  to="/store"
                >
                  Store
                </NavLink>
              </Nav.Link>
            )}
            <Nav.Link>
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/about"
              >
                About
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/contact"
              >
                Contact us
              </NavLink>
            </Nav.Link>
            {!authCtx.isLoggedIn && (
              <Nav.Link>
                <NavLink
                  activeClassName="active"
                  className="nav-link"
                  to="/login"
                >
                  Login
                </NavLink>
              </Nav.Link>
            )}
            {authCtx.isLoggedIn && (
              <Nav.Link>
                <NavLink
                  activeClassName="active"
                  className="nav-link"
                  to="/home"
                  onClick={authCtx.logout}
                >
                  Logout
                </NavLink>
              </Nav.Link>
            )}
          </Nav>
          {authCtx.isLoggedIn &&(<button
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
            </button>)}
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
