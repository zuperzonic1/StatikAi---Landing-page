// FeatureSection.js
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const FeatureSection = () => {
  const features = [
    { id: 1, text: "WE ARE BETTER BECAUSE..." },
    { id: 2, text: "WE ARE BETTER BECAUSE..." },
    { id: 3, text: "WE ARE BETTER BECAUSE..." },
    { id: 4, text: "WE ARE BETTER BECAUSE..." },
    // Add more features as needed
  ];

  return (
    <>
      <Row className="my-5 text-center ">
        <Col xs={12}>
          <h1>
            WHY USE OUR <span className="yellow-span">PRODUCTS</span>
          </h1>
        </Col>
        {features.map((feature) => (
          <Col xs={12} md={6} key={feature.id} className="text-center ">
            <div>
              <div>{feature.id}</div>
              <div>{feature.text}</div>
            </div>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default FeatureSection;
