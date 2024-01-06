import { Link, Outlet } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import SvgHome from "../components/SvgHome"; 

// import img from "../images/cat-banner.png";

const Homepage = () => {
  return (
        <Container fluid className="test">
            <Row>
                <Col> 
                    <h1>YOUR AI CIVIL BUDDY ! </h1>
                    <p>A Time Saving product for Structural Engineers, that helps visualize large scale projects.</p>
                    <Row>
                        <Col>
                            <Button variant="primary">Button 1</Button>{' '}
                            <Button variant="secondary">Button 2</Button>{' '}
                        </Col>
                    </Row>
                                        
                </Col>
                <Col> 
                    <SvgHome />
                </Col>
            </Row>

            <br />

            <Row>
                <h1>Why our products</h1>
                <Container>
                    <Row>
                        <Col> <h2> AI 1 </h2> </Col>
                        <Col> <h2> AI 2 </h2> </Col>
                    </Row>
                    <Row>
                        <Col> <h2> AI 3 </h2> </Col>
                        <Col> <h2> AI 4 </h2> </Col>
                    </Row>
                </Container>
            </Row>

            
        </Container>
  );
};

export default Homepage;
