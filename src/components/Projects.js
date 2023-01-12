import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import gall1 from "../assets/img/tnxImg/photos/IMG_6823.jpg";
import gall2 from "../assets/img/tnxImg/photos/IMG_6849.jpg";
import gall3 from "../assets/img/tnxImg/photos/IMG_6889.jpg";
import gall4 from "../assets/img/tnxImg/photos/IMG_6906.jpg";
import gall5 from "../assets/img/tnxImg/photos/IMG_6970.jpg";
import gall6 from "../assets/img/tnxImg/photos/IMG_7009.jpg";

import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import { ArrowRightCircle } from "react-bootstrap-icons";

export const Projects = () => {
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
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Previous Glimpses</h2>
            <Row>
              {galley.map((project, index) => {
                return <ProjectCard key={index} {...project} />;
              })}
            </Row>
            <button onClick={() => console.log("connect")}>
              Explor More <ArrowRightCircle size={25} />
            </button>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
