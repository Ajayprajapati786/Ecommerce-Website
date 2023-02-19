import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Cart = () => {
  const [cartElements, setCartElements] = useState([
    {
      id: 1,
      title: 'Colors',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
      quantity: 2,
    },
    {
      id: 2,
      title: 'Black and white Colors',
      price: 50,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
      quantity: 3,
    },
    {
      id: 3,
      title: 'Yellow and Black Colors',
      price: 70,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
      quantity: 1,
    },
  ]);

  const handleRemoveProduct = (id) => {
    setCartElements(cartElements.filter((element) => element.id !== id));
  };

  return (
    <Container>
      <h2 className="mb-4">Cart</h2>
      {cartElements.map((product) => (
        <Row key={product.id} className="mb-3 align-items-center">
          <Col xs={4} md={6}>
            <Card style={{border:'none'}}>
              <Card.Img variant="top" src={product.imageUrl} style={{maxHeight:'150px', maxWidth:'150px'}}/>
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>Price: ${product.price}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={4} md={4}>
            <p className="mb-0">Quantity: {product.quantity}</p>
          </Col>
          <Col xs={4} md={2}>
            <Button
              variant="danger"
              onClick={() => handleRemoveProduct(product.id)}
            >
              Remove
            </Button>
          </Col>
          <hr className='mt-5'/>
        </Row>
        
      ))}
    </Container>
  );
};

export default Cart;
