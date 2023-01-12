import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/tnxImg/tnxLogo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <h4>Contact Info</h4>

            <p>Shubhi (Coordinator) : 9425484211</p>
            <p>Shivendra (Coordinator) : 9370404513</p>
            <p>Janhavi (Co-coordinator) : 9373288578</p>
            <p>Shruti (Co-coordinator) : 9146446406</p>
          </Col>
          <Col size={12} sm={6}>
            <h4>St. Vincent Pallotti College of Engineering and Technology</h4>
            <p>
              St. Vincent Pallotti College of Engineering & Technology,
              <br /> Gavsi Manapur, Wardha Road, Nagpur, Maharashtra India, Pin
              : 441108
            </p>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="#">
                <img src={navIcon2} alt="Icon" />
              </a>
              <a href="#">
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
            <p>
              Copyright &copy; 2023 All rights reserved | This website is made
              with
              <i class="ti-heart" aria-hidden="true"></i> by
              <a href="#" target="_blank">
                TECHNEX-22 WEB TEAM
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
