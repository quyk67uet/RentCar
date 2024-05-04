import React from "react";
import "../../styles/our-member.css";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import ava01 from "../../assets/all-images/ava-1.jpg";
import ava02 from "../../assets/all-images/ava-2.jpg";
import ava03 from "../../assets/all-images/ava-3.jpg";
import ava04 from "../../assets/all-images/ava-4.jpg";
import ava05 from "../../assets/all-images/ava-5.jpg";

const OUR__MEMBERS = [
  {
    name: "Lê Minh Qúy",
    experience: "22028190",
    fbUrl: "https://www.facebook.com/quy.minh.31392",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava01,
  },

  {
    name: "Hoàng Linh Chi",
    experience: "22028132",
    fbUrl: "https://www.facebook.com/profile.php?id=100015997986772",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava02,
  },

  {
    name: "Nguyễn Thu Hà",
    experience: "22028282",
    fbUrl: "https://www.facebook.com/profile.php?id=100036248112927",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava03,
  },

  {
    name: "Hoàng Văn Dũng",
    experience: "22028188",
    fbUrl: "https://www.facebook.com/profile.php?id=100016363249012",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava04,
  },

  {
    name: "Đào Thị Thu Hường",
    experience: "22028292",
    fbUrl: "https://www.facebook.com/profile.php?id=100049085569601",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava05,
  },
];

const OurMembers = () => {
  return (
    <>
      {OUR__MEMBERS.map((item, index) => (
        <Col lg="3" md="3" sm="4" xs="6" key={index} className="mb-4">
          <div className="single__member">
            <div className="single__member-img">
              <img src={item.imgUrl} alt="" className="w-100" />

              <div className="single__member-social">
                <a href={item.fbUrl}>
                  <i class="ri-facebook-line"></i>
                </a>
                {/* <Link to={item.fbUrl}>
                  <i class="ri-facebook-line"></i>
                </Link> */}
                <Link to={item.twitUrl}>
                  <i class="ri-twitter-line"></i>
                </Link>

                <Link to={item.linkedinUrl}>
                  <i class="ri-linkedin-line"></i>
                </Link>

                <Link to={item.instUrl}>
                  <i class="ri-instagram-line"></i>
                </Link>
              </div>
            </div>

            <h6 className="text-center mb-0 mt-3">{item.name}</h6>
            <p className="section__description text-center">
              {item.experience}
            </p>
          </div>
        </Col>
      ))}
    </>
  );
};

export default OurMembers;