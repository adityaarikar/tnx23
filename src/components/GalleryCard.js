import { Col } from "react-bootstrap";

export const GalleryCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="gall-imgbx">
        <img src={imgUrl} />
      </div>
    </Col>
  );
};
