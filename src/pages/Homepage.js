import { Link, Outlet } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import SvgHome from "../components/SvgHome";

const Homepage = () => {
  return (
    <Container className="px-4"> {/* Add some padding on the sides */}
      <Row className="align-items-center" style={{ minHeight: '80vh' }}> {/* Reduced the height a bit */}
        <Col md={6} className="py-3"> {/* Added padding for better spacing */}
          <h1>YOUR <span className="yellow-span">AI</span> CIVIL BUDDY !</h1>
          <p>A Time Saving product for Structural Engineers, that helps visualize large scale projects.</p>
          <Button variant="primary">GET STARTED</Button>
          <Button variant="secondary">LEARN MORE</Button>
        </Col>
        <Col md={6} className="py-3">
          <SvgHome />
        </Col>
      </Row>
      
      <Row className="my-5 justify-content-center text-center">
        <Col xs={12}>
          <h1>WHY USE OUR PRODUCTS</h1>
        </Col>
        {/* The following 'Col' components are laid out two per row on desktop screens */}
        <Col md={6}>
          <div>
            <div>1</div>
            <div>WE ARE BETTER BECAUSE...</div>
          </div>
        </Col>
        <Col md={6}>
          <div>
            <div>2</div>
            <div>WE ARE BETTER BECAUSE...</div>
          </div>
        </Col>
        <Col md={6}>
          <div>
            <div>3</div>
            <div>WE ARE BETTER BECAUSE...</div>
          </div>
        </Col>
        <Col md={6}>
          <div>
            <div>4</div>
            <div>WE ARE BETTER BECAUSE...</div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Homepage;
