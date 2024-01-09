import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import onlinePng from '../images/onlinePkg.png';
import offlinePng from '../images/offlinePkg.png';
// import teamImage3 from "../images/person1.jpg";

const Products = () => {
  return (
    <Container>
      <Row className="justify-content-center text-center my-5">
        <Col xs={12}>
          <h1>PRODUCTS</h1>
        </Col>
      </Row>
      
      <Row className="justify-content-center my-5">
        <Col md={6} lg={5} className="mb-4">
          <Card className="h-100">
            <Card.Body>
              <Card.Title>OPTION 1</Card.Title>
              <Card.Subtitle>ONLINE PACKAGE</Card.Subtitle>
              <Card.Img variant="top" src={onlinePng} />
              <ListGroup variant="flush">
                {/* Add as many ListGroup.Item as you have features */}
                <ListGroup.Item>Feature 1</ListGroup.Item>
                <ListGroup.Item>Feature 2</ListGroup.Item>
                <ListGroup.Item>Feature 3</ListGroup.Item>
                {/* ... */}
              </ListGroup>
              <Card.Text className="mt-3">
                $299.99 / YEAR
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={6} lg={5} className="mb-4">
          <Card className="h-100">
            <Card.Body>
              <Card.Title>OPTION 2</Card.Title>
              <Card.Subtitle>OFFLINE PACKAGE</Card.Subtitle>
              <Card.Img variant="top" src={offlinePng} />
              <ListGroup variant="flush">
                {/* Add as many ListGroup.Item as you have features */}
                <ListGroup.Item>Feature 1</ListGroup.Item>
                <ListGroup.Item>Feature 2</ListGroup.Item>
                <ListGroup.Item>Feature 3</ListGroup.Item>
                {/* ... */}
              </ListGroup>
              <Card.Text className="mt-3">
                $2999 (ONE TIME)
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Products;
