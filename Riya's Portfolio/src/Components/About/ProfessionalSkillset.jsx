import { Container, Row, Col } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import { SiMysql, SiExpress, SiMui } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io5";
import { BsBootstrapFill } from "react-icons/bs";
import { TiHtml5 } from "react-icons/ti";
import "./ProfessionalSkillset.css";
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
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <DiJavascript1 />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiNodejs />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiReact />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiGit />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiPython />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiJava />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiMysql />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiExpress />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <TiHtml5 />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <IoLogoCss3 />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiMui />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <BsBootstrapFill />
        </Col>
      </Row>
    </div>
    // Adding skill set
  );
}

export default ProfessionalSkillset;
