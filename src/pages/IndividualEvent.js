import React from "react";
import "../App.css";
import { Container, Col } from "react-bootstrap";
import bgVideo from "../assets/bgVideo.mp4";
import { useParams } from "react-router-dom";
import { events } from "../data";

const IndividualEvent = () => {
  const { id } = useParams();
  const indEvent = events.filter((event) => event.id == id);
  console.log(indEvent);

  return (
    <div className="App">
      <video className="video" src={bgVideo} autoPlay loop muted />
      <section className="event1">
        <Container className="event">
          <Col size={12}>
            <h2>{indEvent.title}</h2>
            <div className="glass">
              <div className="event-poster">
                <img className="" alt="Event Poster" src={indEvent[0].poster} />
              </div>
              <div className="content1">
                {indEvent[0].tagline === "" ? null : (
                  <div className="event-line">
                    <h3>''{indEvent[0].tagline}.''</h3>
                  </div>
                )}
                {indEvent[0].description === "" ? null : (
                  <div>
                    <h6>{indEvent[0].description}</h6>
                  </div>
                )}
                {indEvent[0].prize === "" ? null : (
                  <div>
                    <h4>Prize Amount : {indEvent[0].prize}/-</h4>
                  </div>
                )}
                {indEvent[0].fees === "" ? null : (
                  <div>
                    <h4>Registration Fees : {indEvent[0].fees}/-</h4>
                  </div>
                )}
                {indEvent[0].eventDate === "" ? null : (
                  <div>
                    <h4>Event Dates : {indEvent[0].eventDate}</h4>
                  </div>
                )}
                {indEvent[0].lastDate === "" ? null : (
                  <div>
                    <h4>Last Date of Registration : {indEvent[0].lastDate}</h4>
                  </div>
                )}
                {indEvent[0].resultDate === "" ? null : (
                  <div>
                    <h4>Result Declaration : {indEvent[0].resultDate}</h4>
                  </div>
                )}
                {indEvent[0].teamSize === "" ? null : (
                  <div>
                    <h4>Team Size : {indEvent[0].teamSize}</h4>
                  </div>
                )}
                {indEvent[0].workshop === "" ? null : (
                  <div>
                    <h4>Workshop : {indEvent[0].workshop}</h4>
                  </div>
                )}
                <div>
                  <h3>Contact Info :-</h3>
                </div>
                {indEvent[0].coordiName === "" ? null : (
                  <div>
                    <h4>
                      {indEvent[0].coordiName} : {indEvent[0].coordiContact}
                    </h4>
                  </div>
                )}
                {indEvent[0].coCoodiName === "" ? null : (
                  <div>
                    <h4>
                      {indEvent[0].coCoodiName} : {indEvent[0].coCoordiContact}
                    </h4>
                  </div>
                )}

                <div className="buttonContainer">
                  <a
                    className="regButton"
                    href={indEvent[0].regURL}
                    target="_blank"
                  >
                    <p class="box">Register Now</p>
                  </a>

                  <a
                    className="regButton"
                    href={indEvent[0].pdfLink}
                    target={"_blank"}
                  >
                    <p class="box">Rule Book</p>
                  </a>
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
