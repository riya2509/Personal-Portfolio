import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
// import Lottie from "react-lottie";
// import animationData from "../../assets/Animation - 1702628700350.json";
import Type from "./Type";
function Home() {
  // const defaultOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice",
  //   },
  // };
  return (
    <div>
      <Particle />
      <Container>
        <Row>
          <Col md={7}>
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
              <h1>
                I&apos;M {""}
                <strong>RIYA GUPTA</strong>
              </h1>
              <div style={{ padding: 30, textAlign: "left" }}></div>
              <Type />
            </h1>
          </Col>

          <Col md={5} style={{ paddingBottom: 500 }}>
            {/* <Lottie options={defaultOptions} /> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
