import React from "react";
import one from "../assets/1.png";
import two from "../assets/2.png";
import three from "../assets/3.png";

const Slider = () => {
  return (
    <div>
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="">
              <img className="d-block w-100" src={one} alt="First slide" />
              <div class="carousel-caption d-none d-md-block">
                <h1 className="left">Bespoke butchery service</h1>
                <p className="left">
                  Rox Meat offers a bespoke butchery service with meat cut to
                  your specific requirements, weight, and trim, saving you
                  valuable time and resources.
                </p>
                <button className="btn_shop">Go to Shop</button>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="">
              <img className="d-block w-100 " src={two} alt="First slide" />
              <div class="carousel-caption d-none d-md-block">
                <h1 className="left">Bespoke butchery service</h1>
                <p className="left">
                  Rox Meat offers a bespoke butchery service with meat cut to
                  your specific requirements, weight, and trim, saving you
                  valuable time and resources.
                </p>
                <button className="btn_shop">Go to Shop</button>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="">
              <img className="d-block w-100 " src={three} alt="First slide" />
              <div class="carousel-caption d-none d-md-block">
                <h1 className="left">Bespoke butchery service</h1>
                <p className="left">
                  Rox Meat offers a bespoke butchery service with meat cut to
                  your specific requirements, weight, and trim, saving you
                  valuable time and resources.
                </p>
                <button className="btn_shop">Go to Shop</button>
              </div>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only"></span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only"></span>
        </a>
      </div>
      <div class="mobile_slider ">
        <h2 className="left">Bespoke butchery service</h2>
        <p className="left">
          Rox Meat offers a bespoke butchery service with meat cut to your
          specific requirements, weight, and trim, saving you valuable time and
          resources.
        </p>
        <button className="btn_center_mob">Go to Shop</button>
      </div>
    </div>
  );
};

export default Slider;

export const Slider2 = () => {
  return <h3 className="slider_h">Follow us on Instagram</h3>;
};
