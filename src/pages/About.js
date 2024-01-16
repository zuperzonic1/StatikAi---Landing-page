import { Link, Outlet } from "react-router-dom";
import teamImage1 from "../images/greg.jpeg";
import teamImage2 from "../images/joe.jpeg";
import teamImage3 from "../images/gouda.jpeg";
import aboutImg from "../images/aboutImg.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const About = () => {
  return (
    <Container className="about-cont">
      <Row className="align-items-center my-5">
        <Col md={6} lg={5} className="mb-3 mb-md-0">
          {/*inline style temp here, remove later and add to CSS file. */}
          <img
            src={aboutImg}
            alt="About Us"
            className="img-fluid"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Col>
        <Col md={6} lg={7}>
          <h1 className="about-title">
            ABOUT <span className="yellow-span">US</span>
          </h1>
          <p className="about-para">
            Welcome to StatikAI, Alberta's hub of engineering innovation, where
            experience meets cutting-edge technology. Our founding team
            comprises seasoned professionals from the realms of structural
            engineering, software development, and machine learning operations.
            Together, we're redefining engineering solutions.
          </p>
        </Col>
      </Row>
      <Row className="text-center my-5">
        <Col lg={8} className="offset-lg-2">
          <h1>
            OUR <span className="yellow-span">MISSION</span>
          </h1>
          <p>
            To push boundaries, and developing solutions that set new industry
            standards using our experience in structural engineering, software
            development, and machine learning.
          </p>
        </Col>
      </Row>

      <Row className="text-center mt-7">
        <Col xs={12}>
          <h1>
            OUR <span className="yellow-span">TEAM</span>
          </h1>
        </Col>

        <Col sm={6} md={4} className="mb-5 mt-3">
          <Card style={{ backgroundColor: "transparent", border: "none" }}>
            <a
              href="https://www.linkedin.com/in/george-felobes/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }} // This ensures the link does not alter the styling of your card contents
            >
              <Card.Img
                variant="top"
                src={teamImage1}
                alt="Team Member 1"
                className="img-fluid rounded-circle"
                style={{ width: "140px", height: "140px", margin: "auto" }}
              />
              <Card.Body>
                <Card.Title>
                  <span className="yellow-span">George Felobes</span>
                </Card.Title>
                <Card.Subtitle className="text-light">
                  The AI Architect
                </Card.Subtitle>
              </Card.Body>
            </a>
          </Card>
        </Col>

        <Col sm={6} md={4} className="mb-4 mt-3">
          <Card style={{ backgroundColor: "transparent", border: "none" }}>
            <a
              href="https://www.linkedin.com/in/elgouhari/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }} // This ensures the link does not alter the styling of your card contents
            >
              <Card.Img
                variant="top"
                src={teamImage2}
                alt="Team Member 2"
                className="img-fluid rounded-circle"
                style={{ width: "140px", height: "140px", margin: "auto" }}
              />
              <Card.Body>
                <Card.Title>
                  <span className="yellow-span">Youssef Elgouhari</span>
                </Card.Title>
                <Card.Subtitle className="text-light">
                  The Structural Expert
                </Card.Subtitle>
              </Card.Body>
            </a>
          </Card>
        </Col>

        <Col sm={6} md={4} className="mb-4 mt-3">
          <Card style={{ backgroundColor: "transparent", border: "none" }}>
            <a
              href="https://www.linkedin.com/in/essamgouda/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }} // This ensures the link does not alter the styling of your card contents
            >
              <Card.Img
                variant="top"
                src={teamImage3}
                alt="Team Member 3"
                className="img-fluid rounded-circle"
                style={{ width: "140px", height: "140px", margin: "auto" }}
              />
              <Card.Body>
                <Card.Title>
                  <span className="yellow-span">Essam Gouda</span>
                </Card.Title>
                <Card.Subtitle className="text-light">
                  The Operations Specialist
                </Card.Subtitle>
              </Card.Body>
            </a>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
