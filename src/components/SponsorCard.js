import { Col } from "react-bootstrap";

export const SponsorCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="spon-imgbx">
        <img className="spon-img" src={imgUrl} />
        <div className="spon-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
