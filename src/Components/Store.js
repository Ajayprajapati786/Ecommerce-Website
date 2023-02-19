import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Store = ({ updateCartItems }) => {
  const productsArr = [
    {
      id: 1,
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      quantity: 1,
    },
    {
      id: 2,
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      quantity: 1,
    },
    {
      id: 3,
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      quantity: 1,
    },
    {
      id:4,
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
      quantity:1
    },
  ];

  const [myArray, setMyArray] = useState([]);

  // const addToArray = (product) => {
  //   setMyArray([...myArray, product]);
  // };

  const addToArray = (product) => {
    const exists = myArray.some((p) => p.id === product.id);
    if (exists) {
      alert(`Product ${product.title} is already in the cart.`);
      return;
    }
    setMyArray([...myArray, product]);
  };
  useEffect(() => {
    updateCartItems(myArray);
  }, [myArray, updateCartItems]);

  return (
    <Container className="mt-3">
      <Row
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {productsArr.map((product, index) => (
          <Col
            key={index}
            sm={6}
            md={4}
            lg={3}
            style={{ margin: "1px" }}
            className="my-3"
          >
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={product.imageUrl} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>Price: ${product.price}</Card.Text>
                <Button variant="primary" onClick={() => addToArray(product)}>
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Store;
