// HeroSection.js
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Typed from "react-typed";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const HeroSection = () => {
  return (
    <>
      <Col md={6} className="py-3 text-center text-md-start">
        <h1>
          YOUR <span className="yellow-span">AI </span>
          <Typed
            strings={[" CIVIL BUDDY!", " ENGINEERING GENIUS!"]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        </h1>
        <p>
          A Time Saving product for Structural Engineers, that helps visualize
          large scale projects.
        </p>
        <Row className="justify-content-center justify-content-md-start">
          <Col xs="auto">
            <Button as={Link} to="/products" variant="primary" className="me-2">
              GET STARTED
            </Button>
          </Col>
          <Col xs="auto">
            <Button as={Link} to="/about" variant="secondary">
              LEARN MORE
            </Button>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default HeroSection;
