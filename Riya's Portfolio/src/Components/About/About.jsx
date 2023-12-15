import { Col, Container, Row } from "react-bootstrap";
import AboutCard from "./AboutCard";

function About() {
  return (
    <div>
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Row>
          <Col>
            <h1>
              Know Who<strong> I&apos;M</strong>
            </h1>
          </Col>
        </Row>
      </Container>
      <AboutCard />
    </div>
  );
}

export default About;
