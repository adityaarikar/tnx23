import React from "react";
import "../App.css";
import { Container, Row, Col } from "react-bootstrap";
import { SponsorCard } from "../components/SponsorCard";
import gall1 from "../assets/img/tnxImg/spo-logo/1.jpg";
import gall2 from "../assets/img/tnxImg/spo-logo/2.png";
import gall3 from "../assets/img/tnxImg/spo-logo/3.png";
import gall4 from "../assets/img/tnxImg/spo-logo/4.png";
import gall5 from "../assets/img/tnxImg/spo-logo/5.png";
import gall6 from "../assets/img/tnxImg/spo-logo/6.jpg";
import gall7 from "../assets/img/tnxImg/spo-logo/7.png";
import gall8 from "../assets/img/tnxImg/spo-logo/8.jpg";
import gall9 from "../assets/img/tnxImg/spo-logo/9.png";
import gall10 from "../assets/img/tnxImg/spo-logo/10.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import { ArrowRightCircle } from "react-bootstrap-icons";

const Sponsor = () => {
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
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: gall7,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: gall8,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: gall9,
    },
  ];
  return (
    <div className="sponsor">
      <section className="project sponsor_section" id="project">
        <Container>
          <Row>
            <Col size={12}>
              <h2>Our Sponsor</h2>
              <Row>
                {galley.map((project, index) => {
                  return <SponsorCard key={index} {...project} />;
                })}
              </Row>
              {/* <button onClick={() => console.log("connect")}>
                Explor More <ArrowRightCircle size={25} />
              </button> */}
            </Col>
          </Row>
        </Container>
        {/* <img className="background-image-right" src={colorSharp2}></img> */}
      </section>
    </div>
  );
};

export default Sponsor;
