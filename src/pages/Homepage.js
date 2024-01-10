import { Link, Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import SvgHome from "../components/SvgHome";
import Typed from "react-typed";

const Homepage = () => {
  return (
    <Container className="px-4">
      <Row className="align-items-center" style={{ minHeight: "80vh" }}>
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

          {/* Buttons next to each other for md screens and up */}
          <Row className="justify-content-center justify-content-md-start">
            <Col xs="auto">
              <Button
                as={Link}
                to="/products"
                variant="primary"
                className="me-2"
              >
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
        <Col md={6} className="py-3">
          <SvgHome />
        </Col>
      </Row>

      {/* This Row will center the text for xs and reset to text-start for md and larger */}
      <Row className="my-5 text-center ">
        <Col xs={12}>
          <h1>
            WHY USE OUR <span className="yellow-span">PRODUCTS</span>
          </h1>
        </Col>
        {/* Reset text alignment for md and larger */}
        <Col xs={12} md={6} className="text-center ">
          <div>
            <div>1</div>
            <div>WE ARE BETTER BECAUSE...</div>
          </div>
        </Col>
        <Col xs={12} md={6} className="text-center ">
          <div>
            <div>2</div>
            <div>WE ARE BETTER BECAUSE...</div>
          </div>
        </Col>
        <Col xs={12} md={6} className="text-center ">
          <div>
            <div>3</div>
            <div>WE ARE BETTER BECAUSE...</div>
          </div>
        </Col>
        <Col xs={12} md={6} className="text-center ">
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
