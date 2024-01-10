import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
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
            Our products are coming soon! Stay tuned for the release.
          </p>
        </Col>
      </Row>

      <Row className="justify-content-center my-5">
        <Col md={6} lg={5} className="mb-4">
          <Card className="h-100 product-card">
            <Card.Body>
              <Card.Subtitle>
                OPTION <span className="yellow-span">ONE</span>
              </Card.Subtitle>
              <Card.Title>ONLINE PACKAGE (SOON)</Card.Title>
              <Card.Img
                className="mt-3 border-custom rounded-5"
                variant="top"
                src={onlinePng}
              />
              <ListGroup variant="flush">
                <ListGroup.Item>Feature 1</ListGroup.Item>
                <ListGroup.Item>Feature 2</ListGroup.Item>
                <ListGroup.Item>Feature 3</ListGroup.Item>
              </ListGroup>
              <Card.Text className="mt-3">$299.99 / YEAR</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={5} className="mb-4">
          <Card className="h-100 product-card">
            <Card.Body>
              <Card.Subtitle>
                OPTION <span className="yellow-span">TWO</span>
              </Card.Subtitle>
              <Card.Title>OFFLINE PACKAGE(SOON)</Card.Title>
              <Card.Img
                className="mt-3 border-custom rounded-5"
                variant="top"
                src={offlinePng}
              />
              <ListGroup variant="flush">
                <ListGroup.Item>Feature 1</ListGroup.Item>
                <ListGroup.Item>Feature 2</ListGroup.Item>
                <ListGroup.Item>Feature 3</ListGroup.Item>
              </ListGroup>
              <Card.Text className="mt-3">$2999 (ONE TIME)</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Products;
