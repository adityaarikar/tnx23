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
import { events } from "../data";

const Events = () => {
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
