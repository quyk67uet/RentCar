import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../Home_Components/Helmet/Helmet";
import CommonSection from "../Home_Components/UI/CommonSection";

import "../styles/contact.css";

const socialLinks = [
  {
    url: "#",
    icon: "ri-facebook-line",
  },
  {
    url: "#",
    icon: "ri-instagram-line",
  },
  {
    url: "#",
    icon: "ri-linkedin-line",
  },
  {
    url: "#",
    icon: "ri-twitter-line",
  },
];

const Contact = () => {
  return (
    <Helmet title="Contact">
      <CommonSection title="Liên hệ" />
      <section className="mb-5">
        <Container>
          <Row>
            <Col lg="5" md="5">
              <div className="contact__info">
                <h6 className="fw-bold">Thông tin liên hệ</h6>
                <p className="section__description mb-0">
                  Cầu Giấy, Hà Nội, Việt Nam
                </p>
                <div className=" d-flex align-items-center gap-2">
                  <h6 className="fs-6 mb-0">Điện thoại:</h6>
                  <p className="section__description mb-0">+84 339015987</p>
                </div>

                <div className=" d-flex align-items-center gap-2">
                  <h6 className="mb-0 fs-6">Email:</h6>
                  <p className="section__description mb-0">minhquyle2302@gmail.com</p>
                </div>

                <h6 className="fw-bold mt-4">Theo dõi chúng tôi</h6>

                <div className=" d-flex align-items-center gap-4 mt-3">
                  {socialLinks.map((item, index) => (
                    <Link
                      to={item.url}
                      key={index}
                      className="social__link-icon"
                    >
                      <i class={item.icon}></i>
                    </Link>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Contact;