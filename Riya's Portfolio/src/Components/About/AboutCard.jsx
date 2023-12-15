import Lottie from "react-lottie";
import animationDataAbout from "../../assets/Animation - 1702628700350.json";
import { Col, Container, Row } from "react-bootstrap";
function AboutCard() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationDataAbout,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Container style={{ marginTop: "20px" }}>
      <Row>
        <Col>
          <div>
            Hi everyone, I am <strong>Riya Gupta</strong> from Jamshedpur,
            Jharkhand.
          </div>
          <div>
            I am a third year student pursuing Computer Science and engineering
            @ KIIT Bhubaneshwar. I&apos;m keen in having new experiences, meet
            new people and learn new things. I find the idea of creating value
            and impacting the world through my work gratifying. During my time
            in school, I held several leadership positions, including president
            of the physics and maths club and captain of the school volleyball
            team.
          </div>
          <div>
            ✅I hold a good grip on the MERN Stack technology , being an
            efficient Full Stack web developer.
          </div>
          <div>
            ✅I&apos;m a skilled public speaker and have experience with event
            planning, fundraising, and media relations.
          </div>
          <div>
            ✅I&apos;m a strong communicator with excellent writing and editing
            skills.
          </div>
          ✔I enjoy challenges that enable me to grow.
          <div>
            ✔️ I like to find application in what is taught to me and like
            applying the Pomodoro techniques to learn as quickly as possible.
          </div>
          ⭐I&apos;m proficient in languages like java and C.
          <div>
            ⭐I am very interested in Machine Learning and Deep learning.
          </div>
          <div>
            I&apos;m eager to use my skills and experience in a larger
            organization where I can have a greater impact.
          </div>
        </Col>
        <Col>
          <Lottie options={defaultOptions} />
        </Col>
      </Row>
    </Container>
  );
}

export default AboutCard;
