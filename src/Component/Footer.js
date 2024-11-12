import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#2c3e50', padding: '30px 0', color: '#ecf0f1' }}>
      <Container>
        <Row className="text-center text-md-start">
          {/* Company Information */}
          <Col xs={12} md={4} className="mb-3 mb-md-0">
            <p className="small">
              &copy; 2024 Your Company Name. All rights reserved.
              <br />
              <a
                href="/privacy-policy"
                style={{ color: '#ecf0f1', textDecoration: 'none', fontWeight: '500' }}
                onMouseOver={(e) => (e.target.style.color = '#3498db')}
                onMouseOut={(e) => (e.target.style.color = '#ecf0f1')}
              >
                Privacy Policy
              </a>
            </p>
          </Col>

          {/* Terms and Conditions */}
          <Col xs={12} md={4} className="text-center text-md-end">
            <a
              href="/terms-and-conditions"
              style={{ color: '#ecf0f1', textDecoration: 'none', fontWeight: '500' }}
              onMouseOver={(e) => (e.target.style.color = '#3498db')}
              onMouseOut={(e) => (e.target.style.color = '#ecf0f1')}
            >
              Terms and Conditions
            </a>
          </Col>

          {/* Disclaimers and Legal Notices */}
          <Col xs={12} md={4} className="text-center text-md-end">
            <a
              href="/disclaimers-and-legal-notices"
              style={{ color: '#ecf0f1', textDecoration: 'none', fontWeight: '500' }}
              onMouseOver={(e) => (e.target.style.color = '#3498db')}
              onMouseOut={(e) => (e.target.style.color = '#ecf0f1')}
            >
              Disclaimers and Legal Notices
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
