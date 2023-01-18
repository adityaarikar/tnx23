import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../App.css";
import { ProjectCard } from "../components/ProjectCard";
import gall1 from "../assets/img/tnxImg/photos/IMG_6823.jpg";
import gall2 from "../assets/img/tnxImg/photos/IMG_6849.jpg";
import gall3 from "../assets/img/tnxImg/photos/IMG_6889.jpg";
import gall4 from "../assets/img/tnxImg/photos/IMG_6906.jpg";
import gall5 from "../assets/img/tnxImg/photos/IMG_6970.jpg";
import gall6 from "../assets/img/tnxImg/photos/IMG_7009.jpg";
import gall7 from "../assets/img/tnxImg/photos/IMG_7012.jpg";
import gall8 from "../assets/img/tnxImg/photos/IMG_7020.jpg";
import gall9 from "../assets/img/tnxImg/photos/IMG_7072.jpg";
import gall10 from "../assets/img/tnxImg/photos/IMG_7081.jpg";
import gall11 from "../assets/img/tnxImg/photos/IMG_7102.jpg";
import gall12 from "../assets/img/tnxImg/photos/IMG_7106.jpg";
import gall13 from "../assets/img/tnxImg/photos/IMG_7108.jpg";
import gall14 from "../assets/img/tnxImg/photos/IMG_7157.jpg";
import gall15 from "../assets/img/tnxImg/photos/IMG_7161.jpg";
import gall16 from "../assets/img/tnxImg/photos/IMG_7175.jpg";
import gall17 from "../assets/img/tnxImg/photos/IMG_7254.jpg";
import gall18 from "../assets/img/tnxImg/photos/IMG_7269.jpg";
import { GalleryCard } from "../components/GalleryCard";

const Gallery = () => {
  const galley = [
    {
      imgUrl: gall1,
    },
    {
      imgUrl: gall2,
    },
    {
      imgUrl: gall3,
    },
    {
      imgUrl: gall4,
    },
    {
      imgUrl: gall5,
    },
    {
      imgUrl: gall6,
    },
    {
      imgUrl: gall7,
    },
    {
      imgUrl: gall8,
    },
    {
      imgUrl: gall9,
    },
    {
      imgUrl: gall10,
    },
    {
      imgUrl: gall11,
    },
    {
      imgUrl: gall12,
    },
    {
      imgUrl: gall13,
    },
    {
      imgUrl: gall14,
    },
    {
      imgUrl: gall15,
    },
    {
      imgUrl: gall16,
    },
    {
      imgUrl: gall17,
    },
    {
      imgUrl: gall18,
    },
  ];

  return (
    <div className="App">
      <Container className="gallery">
        <Row>
          <Col size={12}>
            <h1 className="galleryHeading">Gallery</h1>
            <Row>
              {galley.map((project, index) => {
                return <GalleryCard key={index} {...project} />;
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Gallery;
