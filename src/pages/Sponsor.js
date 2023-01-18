import React from "react";
import "../App.css";
import { Container, Row, Col } from "react-bootstrap";
import { SponsorCard } from "../components/SponsorCard";
import "animate.css";
import { sponsors } from "../data";

const Sponsor = () => {
  return (
    <div className="sponsor">
      <section className="project sponsor_section" id="project">
        <Container>
          <Row>
            <Col size={12}>
              <h2 className="sponsorHeading">Our Sponsor</h2>
              <Row>
                {sponsors.map((project, index) => {
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
