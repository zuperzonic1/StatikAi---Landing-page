import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import onlinePng from "../images/onlinePkg.png";
import offlinePng from "../images/offlinePkg.png";

const Products = () => {
  return (
    <Container>
      <Row className="justify-content-center text-center my-5">
        <Col xs={12}>
          <h1>
            PRODU<span className="yellow-span">CTS</span>
          </h1>
          <p className="mt-3">
            Contact us to access the trials for the products and add value to
            your projects
          </p>
        </Col>
      </Row>

      <Row className="justify-content-center my-5">
        <Col md={6} lg={5} className="mb-4">
          <Card className="h-100 product-card">
            <Card.Body>
              <Card.Title>
                CODEWISE <span className="yellow-span">INTELLIGENCE</span>
              </Card.Title>
              <Card.Subtitle>
                Unlock the Power of Language Models and Multimodal Technology!
              </Card.Subtitle>
              <Card.Img
                className="mt-3 border-custom rounded-5"
                variant="top"
                src={onlinePng}
              />
              <ListGroup variant="flush">
                <ListGroup.Item>
                  Engineering codes context-Aware Intelligence
                </ListGroup.Item>
                <ListGroup.Item>Common Engineering Calculations</ListGroup.Item>
                <ListGroup.Item>
                  Effortless Integration into your systems
                </ListGroup.Item>
              </ListGroup>
              <Button
                as={Link}
                to="/contact"
                variant="secondary"
                className="me-2"
              >
                Contact Us
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={5} className="mb-4">
          <Card className="h-100 product-card">
            <Card.Body>
              <Card.Title>
                STRUCTURAL <span className="yellow-span">GENESIS</span>
              </Card.Title>
              <Card.Subtitle>
                Transform Text into Structural Engineering Marvels!
              </Card.Subtitle>
              <Card.Img
                className="mt-3 border-custom rounded-5"
                variant="top"
                src={offlinePng}
              />
              <ListGroup variant="flush">
                <ListGroup.Item>
                  Intuitive Text-to-Design Interface
                </ListGroup.Item>
                <ListGroup.Item>Optimized Engineering Solutions</ListGroup.Item>
                <ListGroup.Item>Unleash Creativity</ListGroup.Item>
              </ListGroup>
              <Button
                as={Link}
                to="/contact"
                variant="secondary"
                className="me-2"
              >
                Contact Us
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Products;
