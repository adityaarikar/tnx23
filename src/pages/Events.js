import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../App.css";

import bgVideo from "../assets/bgVideo.mp4";
import logo1 from "../assets/logos/appathon.png";
import logo2 from "../assets/logos/hackathon.jpg";
import logo3 from "../assets/logos/horizon.png";
import logo4 from "../assets/logos/ideatank.png";
import logo5 from "../assets/logos/overdrive.jpg";
import logo6 from "../assets/logos/robowar.png";
import logo7 from "../assets/logos/skywar.jpg";

import { EventCard } from "../components/EventCard";

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Hackathon",
      tagline: "",
      eventLogo: logo2,
    },
    {
      id: 2,
      title: "Horizon",
      tagline: "",
      eventLogo: logo3,
    },
    {
      id: 3,
      title: "IdeaTank",
      tagline: "",
      eventLogo: logo4,
    },
    {
      id: 4,
      title: "ROBOWAR",
      tagline: "",
      eventLogo: logo6,
    },
    {
      id: 5,
      title: "SKYWAR 2.O",
      tagline: "",
      eventLogo: logo7,
    },
    {
      id: 6,
      title: "OVERDRIVE",
      tagline: "",
      eventLogo: logo5,
    },
    {
      id: 7,
      title: "Appathon",
      tagline: "",
      eventLogo: logo1,
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
