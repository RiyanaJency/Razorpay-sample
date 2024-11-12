import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Payment() {
  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    amount: ''
  });
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentData({
      ...paymentData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate payment data
    if (!paymentData.cardNumber || !paymentData.expiryDate || !paymentData.cvv || !paymentData.amount) {
      setError('Please fill in all fields');
      return;
    }

    
    setError('');
    setPaymentSuccess(true);
    console.log('Payment successful with data:', paymentData);
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Card className="shadow-lg">
            <Card.Header  className="d-flex justify-content-center align-items-center" style={{ backgroundColor: '#2c3e50', padding: '7px 0', color: '#ecf0f1'}}>
              <h3>Payment Form</h3>
            </Card.Header>
            <Card.Body>
              {paymentSuccess && (
                <Alert variant="success">
                  Payment was successful! Thank you for your purchase.
                </Alert>
              )}
              {error && (
                <Alert variant="danger">
                  {error}
                </Alert>
              )}
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="cardNumber" className="mb-3">
                  <Form.Label>Card Number</Form.Label>
                  <Form.Control
                    type="text"
                    name="cardNumber"
                    value={paymentData.cardNumber}
                    onChange={handleChange}
                    placeholder="Enter card number"
                    maxLength="16"
                  />
                </Form.Group>

                <Row>
                  <Col xs={6}>
                    <Form.Group controlId="expiryDate" className="mb-3">
                      <Form.Label>Expiration Date</Form.Label>
                      <Form.Control
                        type="text"
                        name="expiryDate"
                        value={paymentData.expiryDate}
                        onChange={handleChange}
                        placeholder="MM/YY"
                        maxLength="5"
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={6}>
                    <Form.Group controlId="cvv" className="mb-3">
                      <Form.Label>CVV</Form.Label>
                      <Form.Control
                        type="text"
                        name="cvv"
                        value={paymentData.cvv}
                        onChange={handleChange}
                        placeholder="CVV"
                        maxLength="3"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group controlId="amount" className="mb-3">
                  <Form.Label>Amount</Form.Label>
                  <Form.Control
                    type="number"
                    name="amount"
                    value={paymentData.amount}
                    onChange={handleChange}
                    placeholder="Enter amount"
                    min="1"
                  />
                </Form.Group>

                <Button style={{ backgroundColor: '#2c3e50', padding: '10px 0', color: '#ecf0f1' }} type="submit" className="w-100">
                  Pay Now
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Payment;
