import React from "react";
import logo from "../assets/logo2.png";
import footer from "../assets/footer.png";
import { FaArrowRight , FaStar } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="footer">
      <div className="footer1">
        <div className="row m-0 p-0">
          <div className="col-md-3">
            <img src={logo} alt="" />
          </div>
          <div className="col-md-3">
            <h6>About</h6>
            <p>
              We provide a bespoke butchery service saving your valuable time
              and resources.
            </p>
            <p className="grey">
              ©2020, Rox Meat Limited. <br /> <br />
              All rights reserved
            </p>
          </div>
          <div className="links col-md-3">
            <h6>Links</h6>
            <p>
              <FaArrowRight className="yellow" /> Search
            </p>
            <p>
              <FaArrowRight className="yellow" /> FAQs{" "}
            </p>
            <p>
              <FaArrowRight className="yellow" /> Privacy Policy
            </p>
            <p>
              <FaArrowRight className="yellow" /> Cookie Policy
            </p>
            <p>
              <FaArrowRight className="yellow" /> Terms and conditions
            </p>
            <p>
              <FaArrowRight className="yellow" /> Customer care
            </p>
            <p>
              <FaArrowRight className="yellow" /> Terms of Service
            </p>
            <p>
              <FaArrowRight className="yellow" /> Refund policy
            </p>
            <p>
              <FaArrowRight className="yellow" /> Our certificates
            </p>
          </div>
          <div className="col-md-3">
            <h6>Contacts</h6>
            <p>11 Passey Pl, London SE9 5DA</p>
            <p>Instagram</p>
            <p>info@roxmeat.com</p>
            <p>+44 (0) 20 8855 5757</p>
          </div>
        </div>
      </div>
      <div className="footer 2">
        <div className="row m-0 p-0">
          <div className="col-md-12">
            <span className="email">Shop@MeatBox Ltd </span>
            <br />
            <img className="right" src={footer} alt="" />
          </div>
        </div>
        <button className="btn_review">Review Us On <FaStar className="green" /> TrustPolit </button>
      </div>
    </div>
  );
};

export default Footer;

export const Subscribe = () =>{
 return(
  <div className="subscribe">
  <div className="row m-0 p-0">
    <div className="col-md-6">
      <h2 className="subs_h_web">Get the latest news and offers</h2>
      <h2 className="subs_h_mob">Get the latest news and offers</h2>
    </div>
    <div className="col-md-6">
      <div className="check">
        <input className="input" type="text" placeholder="Enter Email" />
        <button className="btn_subs">Subscribe</button> <br />
        <div className="checkbox">
          <input type="checkbox" name="" id="" />
          <p>
            I accept <a href="">Privacy Policy</a> and
            <a href="">Terms & Conditions</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
 );
};
