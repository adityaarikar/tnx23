import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../App.css";

import bgVideo from "../assets/bgVideo.mp4";
import logo1 from "../assets/img/tnxImg/logos/arverse.jpg";
import logo2 from "../assets/img/tnxImg/logos/clueminati.png";
import logo3 from "../assets/img/tnxImg/logos/encipher.png";
import logo4 from "../assets/img/tnxImg/logos/gatewalk.png";
import logo5 from "../assets/img/tnxImg/logos/hackathon.jpg";
import logo6 from "../assets/img/tnxImg/logos/horizon.png";
import logo7 from "../assets/img/tnxImg/logos/overdrive.png";
import logo8 from "../assets/img/tnxImg/logos/projectomania.png";

import { EventCard } from "../components/EventCard";

const Events = () => {
  const events = [
    {
      title: "Event Name",
      imgUrl: logo1,
      description: "Arverse",
    },
    {
      title: "Event Name",
      imgUrl: logo2,
      description: "Clueminati",
    },
    {
      title: "Event Name",
      imgUrl: logo3,
      description: "EnchipherX",
    },
    {
      title: "Event Name",
      imgUrl: logo4,
      description: "Gatewalk",
    },
    {
      title: "Event Name",
      imgUrl: logo5,
      description: "Hackathon",
    },
    {
      title: "Event Name",
      imgUrl: logo6,
      description: "Horizon",
    },
    {
      title: "Event Name",
      imgUrl: logo7,
      description: "Overdrive",
    },
    {
      title: "Event Name",
      imgUrl: logo8,
      description: "Projectomania",
    },
  ];

  return (
    <div className="App">
      <video className="video" src={bgVideo} autoPlay loop muted />
      <section className="" id="">
        <Container className="event">
          <Row>
            <Col size={12}>
              <h2 class="event-heading">Events</h2>
              <Row>
                {events.map((event, index) => {
                  return <EventCard key={index} {...event} />;
                })}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Events;
