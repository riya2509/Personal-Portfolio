import { Container, Row } from "react-bootstrap";

function ProfessionalSkillset() {
  return (
    <div>
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          color: "white",
        }}
      >
        <Row>
          <h1>
            Professional <strong>Skillset</strong>
          </h1>
        </Row>
        <Row></Row>
      </Container>
    </div>
    // Adding skill set
  );
}

export default ProfessionalSkillset;
