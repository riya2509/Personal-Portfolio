import { Container, Row, Col } from "react-bootstrap";
// import Particle2 from "../Particle2";
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
    <div id="home-sction">
      <Container>
        <Row>
          <Col md={7} style={{ marginTop: "80px", color: "white" }}>
            <h1
              style={{
                marginTop: "100px",
                paddingBottom: 15,
                marginLeft: "30px",
              }}
            >
              Hi There! {""}
              <span className="wave" role="img">
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
