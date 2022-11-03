import React, { Fragment, useEffect } from "react";
import "../CSS/Home.css";
import AOS from "aos";
import "aos/dist/aos.css";

export const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 5000 });
  }, []);
  return (
    <Fragment>
      <section className="home">
        <div className="container" data-aos="fade-right">
          <h1>
            We construct <br /> dreams
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam cum
            sed tempore placeat accusantium!
          </p>
          <div className="link">
            <a href="#!" className="explore">
              Explore
            </a>
            <a href="#!" className="contact">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
