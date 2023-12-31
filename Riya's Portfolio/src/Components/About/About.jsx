import { Col, Container, Row } from "react-bootstrap";
import AboutCard from "./AboutCard";
import ProfessionalSkillset from "./ProfessionalSkillset";

function About() {
  return (
    <div id="about-section">
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Row>
          <Col style={{ color: "white" }}>
            <h1>
              Know Who<strong> I&apos;M</strong>
            </h1>
          </Col>
        </Row>
      </Container>
      <AboutCard />
      <ProfessionalSkillset />
    </div>
  );
}

export default About;
