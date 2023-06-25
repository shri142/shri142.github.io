import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import snake from "../../Assets/Projects/snake.PNG";
import pass from "../../Assets/Projects/pass.PNG";
import TrainBrain2 from "../../Assets/Projects/TrainBrain2.jpg";
import workInProgress from "../../Assets/Projects/workInProgress.PNG";
import dr from "../../Assets/Projects/dr.PNG";
import simon from "../../Assets/Projects/simon.jpg"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Work </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TrainBrain2}
              isBlog={false}
              title="Train Brain"
              description="This is my first game devloped in unity with c # scripting and published on play store this game is chess similer game with some diffrent features and rules."
              ghLink="https://github.com/shri142/Train-Brain-Game"
              demoLink="https://play.google.com/store/apps/details?id=com.Teknack.TrainBrain"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dr}
              isBlog={false}
              title="Doctor Dr."
              description="Doctor Dr. is a web application designed using Django both for Doctors and Patients information in the databases and help patients access it easily.Whenever patient visits the doctor, automatically generated prescription pdf is sent to the patient via sms(Won 3rd prize , innovex 3rd year at DBIT)"
              ghLink="https://github.com/shri142/Dr.Doctor"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pass}
              isBlog={false}
              title="passstrength142"
              description="A python package published on PyPi which performs two task 
              1)Checks the strength of the password.
              2)Generate a random password."
              ghLink="https://github.com/shri142/password-strength"
              demoLink="https://pypi.org/project/passstrength142/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={snake}
              isBlog={false}
              title="Python Snake Game"
              description="This is my game devloped using python's PyGame library, this game is simple and easy to play at some level its challenging too."
              ghLink="https://github.com/shri142/Python-Snake-Game"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={simon}
              isBlog={false}
              title="Simons-game"
              description="Simons-game created using jquery, players must replicate a sequence of colors by clicking the corresponding buttons in the correct order."
              ghLink="https://github.com/shri142/simons-game"
              demoLink=" https://shri142.github.io/simons-game/"
              
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
