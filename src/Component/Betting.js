import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Betting() {
  const [betData, setBetData] = useState({
    team: '',
    amount: '',
  });
  const [betSuccess, setBetSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBetData({
      ...betData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation: Check if team and amount are filled
    if (!betData.team || !betData.amount || betData.amount <= 0) {
      setError('Please select a team and enter a valid amount.');
      return;
    }

    // Simulate placing the bet (replace with real betting logic)
    setError('');
    setBetSuccess(true);
    console.log('Bet placed:', betData);
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Card className="shadow-lg">
            <Card.Header className="d-flex justify-content-center align-items-center" style={{ backgroundColor: '#2c3e50', padding: '7px 0', color: '#ecf0f1' }} >
              <h3>Place Your Bet</h3>
            </Card.Header>
            <Card.Body>
              {betSuccess && (
                <Alert variant="success">
                  Your bet was successfully placed! Good luck!
                </Alert>
              )}
              {error && (
                <Alert variant="danger">
                  {error}
                </Alert>
              )}
              <Form onSubmit={handleSubmit}>
                {/* Select the Team */}
                <Form.Group controlId="team" className="mb-3">
                  <Form.Label>Choose Your Team</Form.Label>
                  <Form.Control
                    as="select"
                    name="team"
                    value={betData.team}
                    onChange={handleChange}
                  >
                    <option value="">Select Team</option>
                    <option value="Team A">Team A</option>
                    <option value="Team B">Team B</option>
                  </Form.Control>
                </Form.Group>

                {/* Bet Amount */}
                <Form.Group controlId="amount" className="mb-3">
                  <Form.Label>Bet Amount</Form.Label>
                  <Form.Control
                    type="number"
                    name="amount"
                    value={betData.amount}
                    onChange={handleChange}
                    placeholder="Enter amount"
                    min="1"
                  />
                </Form.Group>

                {/* Submit Button */}
                <Button style={{ backgroundColor: '#2c3e50', padding: '10px 0', color: '#ecf0f1' }} type="submit" className="w-100">
                  Place Bet
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Betting;
