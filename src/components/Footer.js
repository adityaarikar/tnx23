import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/tnxImg/tnxLogo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import youtube from "../assets/img/youtube.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6} className="footerLogo">
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <h4>Contact Info</h4>
            <p>Janhavi (Coordinator) : 9373288578</p>
            <p>Adwait (Coordinator) : 9637305576</p>
            <p>Aditya (Co-coordinator) : 9405880262</p>
            <p>Bhairav (Co-coordinator) : 7666219863</p>
            <p>Aditya (Mentor) : 7218616319</p>
            <p>Shruti (Mentor) : 9146446406</p>
          </Col>
          <Col size={12} sm={6} className="footerClg">
            <h4>St. Vincent Pallotti College of Engineering and Technology</h4>
            <p>
              St. Vincent Pallotti College of Engineering & Technology,
              <br /> Gavsi Manapur, Wardha Road, Nagpur, Maharashtra India, Pin
              : 441108
            </p>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                target={"_blank"}
                href="https://instagram.com/technex_svpcet_nagpur?igshid=NDk5N2NlZjQ="
              >
                <img src={navIcon3} alt="instagram" />
              </a>
              <a
                target={"_blank"}
                href="https://youtube.com/@technexsvpcet4463"
              >
                <img src={youtube} alt="youtube" />
              </a>
              <a target={"_blank"} href="https://www.linkedin.com/in/technex">
                <img src={navIcon1} alt="linkedin" />
              </a>
            </div>
            <p>
              Copyright &copy; 2023 All rights reserved | This website is made
              <i class="ti-heart" aria-hidden="true"></i> by
              <a href="#" target="_blank">
                TECHNEX-23 WEB TEAM
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
