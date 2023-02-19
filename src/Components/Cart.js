import React, { useState,useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';



const Cart = (props) => {

    const [cartElements, setCartElements] = useState([]);
    

    useEffect(() => {
        setCartElements(props.toCartjs);
      }, [props.toCartjs]);

const handleRemoveProduct = (id) => {
    const updatedCartElements = cartElements.filter((element) => element.id !== id);
    setCartElements(updatedCartElements);
  };




  return (
    <Container>
      <h2 className="mb-4">Cart</h2>
      {/* {} */}

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
