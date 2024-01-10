// Homepage.js
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SvgHome from "../components/SvgHome";
import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/FeatureSection";

const Homepage = () => {
  return (
    <Container className="px-4">
      <Row className="align-items-center" style={{ minHeight: "80vh" }}>
        <HeroSection />
        <Col md={6} className="py-3">
          <SvgHome />
        </Col>
      </Row>
      <FeatureSection />
    </Container>
  );
};

export default Homepage;
