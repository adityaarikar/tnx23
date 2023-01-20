import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../App.css";
import bgVideo from "../assets/bgVideo.mp4";
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
