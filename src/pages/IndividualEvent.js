import React from "react";
import poster1 from "../assets/img/tnxImg/posters/arverce.jpeg";
import "../App.css";
import { Container, Row, Col } from "react-bootstrap";
import bgVideo from "../assets/bgVideo.mp4";
import { Link } from "react-router-dom";

const IndividualEvent = () => {
  return (
    <div className="App">
      <video className="video" src={bgVideo} autoPlay loop muted />
      <section className="event1">
        <Container className="event">
          <Col size={12}>
            <h2>Arverse</h2>
            <div className="glass">
              <div className="event-poster">
                <img className="" src={poster1} />
              </div>
              <div className="content1">
                <div>
                  <h6>
                    Hackathon is an overnight event to create solutions for
                    specific problem statement within given time span.
                  </h6>
                </div>
                <div>
                  <h4>Prize Amount :95,000/-</h4>
                </div>
                <div>
                  <h4>Last Date of Registration :24th March</h4>
                </div>
                <div>
                  <h4>Event Dates :28th & 29th March</h4>
                </div>
                <div>
                  <h4>Result Declaration :29th March</h4>
                </div>
                <div>
                  <h3>Contact Info :-</h3>
                </div>
                <div>
                  <h4>Anshul :8600036244</h4>
                </div>
                <div className="buttonContainer">
                  <Link to="/event/:1">
                    <p class="box">Register Now</p>
                  </Link>

                  <Link to="/event/:1">
                    <p class="box">Register Now</p>
                  </Link>
                </div>
              </div>
            </div>
          </Col>
        </Container>
      </section>
    </div>
  );
};

export default IndividualEvent;
