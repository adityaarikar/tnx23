import React from "react";
import "../App.css";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from "react-on-screen";
import { ProjectCard } from "../components/ProjectCard";
import gall1 from "../assets/img/tnxImg/photos/IMG_6823.jpg";
import gall2 from "../assets/img/tnxImg/photos/IMG_6849.jpg";
import gall3 from "../assets/img/tnxImg/photos/IMG_6889.jpg";
import gall4 from "../assets/img/tnxImg/photos/IMG_6906.jpg";
import gall5 from "../assets/img/tnxImg/photos/IMG_6970.jpg";
import gall6 from "../assets/img/tnxImg/photos/IMG_7009.jpg";

const About = () => {
  const galley = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: gall1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: gall2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: gall3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: gall4,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: gall5,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: gall6,
    },
  ];

  return (
    <section className="about" id="abouts">
      <Container>
        <Row>
          <Col size={6}></Col>
          <Col size={6} xs={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Previous Glimpses</h2>
                  <p>
                    Technex is our flagship Technical event held annually which
                    attracts hundreds of Engineering students from different
                    parts of the country. Technex is an event which is driven
                    and organized by a team of students and mentored by a team
                    of faculties. The event was started in 2007 with the motive
                    of encouraging technology, scientific thinking and
                    innovation among young engineers and giving them a platform
                    to enhance their skills. Currently Technex is recognized as
                    Central India’s largest Science and technology fest with an
                    annual participation of more than 2500+ technology
                    enthusiasts.
                  </p>
                  <Tab.Container id="abouts-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Vision</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Mission</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Objective</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <p>
                          To transform the environment by creating a culture
                          where students take the initiative for creating a new
                          world where science and technology are celebrated &
                          become the technocrats of tomorrow.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>
                          To provide superior opportunities to create future
                          leaders, managers and professionals and to inspire
                          students to develop team work, self-learning and
                          communication skills. Prepare graduates to manifest
                          critical decisions & learning through co-curricular
                          activities.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          To give optimum quality of arenas and events for the
                          participants to compete. Thus increasing the level of
                          competition and game play while also increasing the
                          reach of Technex to differnet states. This will allow
                          participants to compete and interact with technocrats
                          from different parts of India. Therefore this year we
                          want to present Technex as an event which will not
                          only be a competition but will also serve as an
                          interaction platform between aspiring engineers from
                          all over India.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};

export default About;
