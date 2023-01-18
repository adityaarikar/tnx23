import { Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { Link } from "react-router-dom";

export const EventCard = (props) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div class="blurred-box">
        <div class="user-login-box">
          <div className="event-wrapper-main">
            <img className="event-wrapper-main-img" src={props.eventLogo} />
            <h4 className="eventHeading">{props.title}</h4>
          </div>
          <div class="wrapper">
            <Link to={`/event/${props.id}`}>
              <p class="box">Register Now</p>
            </Link>
          </div>
        </div>
      </div>
    </Col>
  );
};
