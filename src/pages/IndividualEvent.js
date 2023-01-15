import React from "react";
import poster1 from "../assets/img/tnxImg/posters/arverce.jpeg";
import "../App.css";
import { Container, Row, Col } from "react-bootstrap";
import bgVideo from "../assets/bgVideo.mp4";
import { Link, useParams } from "react-router-dom";
import logo1 from "../assets/logos/appathon.png";
import logo2 from "../assets/logos/hackathon.jpg";
import logo3 from "../assets/logos/horizon.png";
import logo4 from "../assets/logos/ideatank.png";
import logo5 from "../assets/logos/overdrive.jpg";
import logo6 from "../assets/logos/robowar.png";
import logo7 from "../assets/logos/skywar.jpg";

const events = [
  {
    id: 1,
    title: "Hackathon",
    tagline: "",
    eventLogo: logo2,
    description: "",
    prize: "",
    fees: "",
    TeamSize: "",
    Workshop: "",
    coordiName: "",
    coCoodiName: "",
    coordiContact: "",
    coCoordiContact: "",
  },
  {
    id: 2,
    title: "Horizon",
    tagline: "",
    eventLogo: logo3,
    description:
      "This event participants are expected to show their creativity and design bridges with the help of materials provided ( i.e. popsicles, adhesive and cutters).There will be criteria to design the bridge about weight, dimensions,etc. The rule book will be provided to participants.This will be two day event.In 1st day participants will be making their bridges.2nd day evaluation / testing.",
    prize: "35,000",
    fees: "400",
    TeamSize: "Maximum 4 number.",
    Workshop: "Free workshop",
    coordiName: "Yuagndh",
    coCoodiName: "Tushar",
    coordiContact: "8975619001",
    coCoordiContact: "7721069188",
  },
  {
    id: 3,
    title: "IdeaTank",
    tagline: "",
    eventLogo: logo4,
    description:
      "IdeaTank is an interactive event where students get to pitch their creative and unique project ideas or present their working models related to different fields like business, technical or non-technical.A platform for students to showcase their creativity and pitch their product and get expert opinions as well as a guidance towards realistic approach.It is a 2 day event consisting of 2 rounds.In the first round participants will get 3 minutes for presentation and 3 minutes for interaction with the judges.In the second round only the shortlisted teams will get to present their ideas, where they will get 5 minutes for presentation ",
    prize: "35000",
    fees: "350",
    TeamSize: "1-4 people",
    Workshop: "",
    coordiName: "Sanyukta Thombre",
    coCoodiName: "Shrija Bongirwar",
    coordiContact: "9021566109",
    coCoordiContact: "9356756257",
  },
  {
    id: 4,
    title: "ROBOWAR",
    tagline: "",
    eventLogo: logo6,
    description:
      "Participants are expected to Design and build a robust robot adhering to given guidelines and constraints to compete in the tournament. There will be no restrictions on the dimensions of the bots. The weight of the machine should not exceed 15 Kgs. The team that stands at the top of the leaderboard will be declared the winner.Rounds: There will be 2 rounds in the event.a) Group Battle: In case the no of participating team is very large, the 1st round of thecompetition will be group battle among two to four (max) robots for 6 minutes; the winning robot from each battle will progress to the next stage of the competition.b) Head-to-Head: The winning two robots from group battle rounds will have Head to Head competition for 6 minutes. The maximum point’s scorer from H2H round will be the final winner.",
    prize: "1,20,000",
    fees: "Rs.500",
    TeamSize: "4-6 people",
    Workshop: "",
    coordiName: "Joel",
    coCoodiName: "Jishnu",
    coordiContact: "7972424832",
    coCoordiContact: "9503388547",
  },
  {
    id: 5,
    title: "SKYWAR 2.O",
    tagline: "",
    eventLogo: logo7,
    description:
      "Technex is hosting the IDRL Night Racing, a professional drone racing competition featuring an obstacle course. Participants can race their drones at speeds of over 170 km/hr while viewing a live video feed through their goggles. The event will be divided into heats, semi-finals, and finals, with pro, intermediate, and beginner level categories competing for a prize pool of over INR 1,00,000. Teams of one or two people are allowed to participate, with one member serving as the pilot and the other as a technician (roles cannot be switched). The IDRL Night Racing is a thrilling and innovative event open to all drone enthusiasts. ",
    prize: "1,00,000",
    fees: "0",
    TeamSize: "2",
    Workshop: "",
    coordiName: "Chaitanya Lad",
    coCoodiName: "",
    coordiContact: "9881462406",
    coCoordiContact: "",
  },
  {
    id: 6,
    title: "OVERDRIVE",
    tagline: "",
    eventLogo: logo5,
    description:
      "Drive your monster through the arena, and quench its thirst with the prizes” Participants design a manually controlled ROBOT that has the capacity to cover maximum distance in minimum time, challenging the hurdles and be one of the best competitors. Round Details    Round 1 - Elimination Round    •	Two bots will compete at the same time.    •	Winner will qualify for round 2.    •	Round 2 will be on next day of the event    Round 2 - Final Round    •	In the final round players have to cross the arena in minimum time.    •	There will be a time limit .    •	Time limit will be there for this round and the bot has to complete the track with maximum obstacles cleared and minimum time to win the competition.    •	The participant who will complete the arena in minimum time will be the winner.    All the rules mentioned in rule book.",
    prize: "60,000",
    fees: "600",
    TeamSize: "A team may consist of a maximum of 4 members.",
    Workshop:
      "If Workshop then details about that -Registration Fees For Workshop: 3200    Dt: 24-25 Jan 2023    •	For workshop kit will be provided by overdrive team    •	Kit consists of Wired Bot components.    •	Workshop is available in college premises.     •	Workshop will be of two days.     •	 Team will be consisting of maximum 4 members.    •	Knowledge about both wired and wireless bots.    •	There is an special prize for participants of workshop i.e. the tech pallottine prize",
    coordiName: "Rohit",
    coCoodiName: "Yogendra",
    coordiContact: "8390194410",
    coCoordiContact: "8975071549",
  },
  {
    id: 7,
    title: "Appathon",
    tagline: "",
    eventLogo: logo1,
    description:
      "Appathon is an over night application development event . The themes of the application to be made are Ar,web3 etc",
    prize: "20,000",
    fees: "300",
    TeamSize: "2 to 4 members.",
    Workshop: "",
    coordiName: "Prathmesh",
    coCoodiName: "shubhanshu",
    coordiContact: "7769062394",
    coCoordiContact: "9939006804",
  },
];

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
                <img className="" src={indEvent[0].eventLogo} />
              </div>
              <div className="content1">
                <div>
                  <h6>{indEvent[0].description}</h6>
                </div>
                <div>
                  <h4>Prize Amount :{indEvent[0].prize}/-</h4>
                </div>
                <div>
                  <h4>Registration Fees :{indEvent[0].fees}/-</h4>
                </div>
                {/* <div>
                  <h4>Last Date of Registration :24th March</h4>
                </div> */}
                <div>
                  <h4>Event Dates :8th & 9th Feb</h4>
                </div>
                <div>
                  <h4>Result Declaration :29th March</h4>
                </div>
                <div>
                  <h3>Contact Info :-</h3>
                </div>
                <div>
                  <h4>
                    {indEvent[0].coordiName} : {indEvent[0].coordiContact}
                  </h4>
                </div>
                <div>
                  <h4>
                    {indEvent[0].coCoodiName} : {indEvent[0].coCoordiContact}
                  </h4>
                </div>
                <div className="buttonContainer">
                  <Link to="/event/:1" target={"_blank"}>
                    <p class="box">Register Now</p>
                  </Link>

                  <Link to="/event/:1" target={"_blank"}>
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
