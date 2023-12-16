import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Lottie from "react-lottie";
import animationData from "../../assets/Animation - 1702628700350.json";
import Type from "./Type";
import About from "../About/About";

function Home() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      <Particle />
      <Container>
        <Row>
          <Col md={7} style={{ marginTop: "80px" }}>
            <h1
              style={{
                marginTop: "100px",
                paddingBottom: 15,
                marginLeft: "30px",
              }}
            >
              Hi There! {""}
              <span className="wave" role="img" aria-labelledby="wave">
                👋🏼
              </span>
              <br />
              <span>
                I&apos;M {""}
                <strong>RIYA GUPTA</strong>
              </span>
              <div style={{ padding: 30, textAlign: "left" }}></div>
              <Type />
            </h1>
          </Col>

          <Col md={5} style={{ paddingTop: 60 }}>
            <Lottie options={defaultOptions} />
          </Col>
        </Row>
      </Container>
      <About />
    </div>
  );
}

export default Home;
