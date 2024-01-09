import { Link, Outlet } from "react-router-dom";
import teamImage1 from "../images/person1.jpg";
import teamImage2 from "../images/person1.jpg";
import teamImage3 from "../images/person1.jpg";
import teamImage4 from "../images/person1.jpg";
import aboutImg from "../images/aboutImg.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
          <h1 className="about-title">ABOUT US</h1>
          <p className="about-para">
            A Time Saving product for Structural Engineers, that helps visualize
            large scale projects.A Time Saving product for Structural Engineers,
            that helps visualize large scale projects.A Time Saving product for
            Structural Engineers, that helps visualize large scale projects.
          </p>
        </Col>
      </Row>
      <Row className="text-center my-5">
        <Col lg={8} className="offset-lg-2">
          <h1>OUR MISSION</h1>
          <p>
            A Time Saving product for Structural Engineers, that helps visualize
            large scale projects.A Time Saving product for Structural Engineers,
            that helps visualize large scale projects.A Time Saving product for
            Structural Engineers, that helps visualize large scale projects.
          </p>
        </Col>
      </Row>



      <Row className="text-center my-10">
        <Col xs={12}>
          <h1>OUR TEAM</h1>
        </Col>
        <Col sm={6} md={3} className="mb-4">
          <img
            src={teamImage1}
            alt="Team Member 1"
            className="img-fluid rounded-circle"
            style={{ width: "140px", height: "140px" }}
            // remove inline style later and add to CSS file

          />
          <p className="team-name mt-2">Name Last</p>
        </Col>
        <Col sm={6} md={3} className="mb-4">
          <img
            src={teamImage2}
            alt="Team Member 2"
            className="img-fluid rounded-circle"
            style={{ width: "140px", height: "140px" }}
            // remove inline style later and add to CSS file

          />
          <p className="team-name mt-2">Name Last</p>
        </Col>
        <Col sm={6} md={3} className="mb-4">
          <img
            src={teamImage3}
            alt="Team Member 3"
            className="img-fluid rounded-circle"
            style={{ width: "140px", height: "140px" }}
            // remove inline style later and add to CSS file

          />
          <p className="team-name mt-2">Name Last</p>
        </Col>
        <Col sm={6} md={3} className="mb-4">
          <img
            src={teamImage4}
            alt="Team Member 4"
            className="img-fluid rounded-circle"
            style={{ width: "140px", height: "140px" }}
            // remove inline style later and add to CSS file
          />
          <p className="team-name mt-2">Name Last</p>

        </Col>
      </Row>
    </Container>
  );
};

export default About;
