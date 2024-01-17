import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const FeatureSection = () => {
  const features = [
    { id: 1, title: "OFFLINE & ONLINE PRODUCTS" },
    { id: 2, title: "PLATFORM AGNOSTIC" },
    { id: 3, title: "NORTHERN ALBERTA READY" },
    { id: 4, title: "HANDLES COMPLEX EQUATIONS & DIAGRAMS" },
    // Add more features as needed
  ];

  return (
    <Row className="my-5 text-center">
      <Col xs={12}>
        <h1 className="mb-4 text-light">
          WHY USE OUR <span className="text-warning">PRODUCTS</span>
        </h1>
      </Col>
      {features.map((feature) => (
        <Col xs={12} md={6} lg={3} key={feature.id} className="mb-4">
          <Card className="h-100 bg-transparent text-light border-warning">
            <Card.Body
              className="d-flex justify-content-center align-items-center"
              style={{ height: "100%" }}
            >
              <Card.Title className="m-0">{feature.title}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      ))}
      <Button as={Link} to="/products" variant="primary" className="me-2">
        GET STARTED
      </Button>
    </Row>
  );
};

export default FeatureSection;
