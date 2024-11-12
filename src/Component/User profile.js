import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import profilePic from './image/user.png'; 

function UserProfile() {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Card className="text-center shadow-lg">
            <Card.Header style={{ backgroundColor: '#2c3e50', padding: '10px 0', color: '#ecf0f1' }}>
              <h3>User Profile</h3>
            </Card.Header>
            <Card.Body>
              <div className="d-flex justify-content-center mb-3">
                <img
                  src={profilePic}
                  alt="User Profile"
                  className="rounded-circle"
                  width="120"
                  height="120"
                />
              </div>
              <h4>John Doe</h4>
              <p className="text-muted">johndoe@example.com</p>
              <p>Location: New York, USA</p>
              <p>Member since: January 2023</p>
              <Button style={{ backgroundColor: '#2c3e50', padding: '10px 0',width:'100%', color: '#ecf0f1' }} className="mt-3">
                Edit Profile
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default UserProfile;
