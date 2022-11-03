import React, { Fragment, useState, useEffect } from "react";
import Collapsible from "react-collapsible";
import pic from "../Images/ali-morshedlou-WMD64tMfc4k-unsplash.jpg";
import Question from "../Detail/Accordion";
import "../CSS/Accordion.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Accordion = () => {
  const [detail, setDetail] = useState(Question);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <Fragment>
      <section className="accordion">
        <div className="accordion-row">
          <div className="left" data-aos="fade-right">
            <h3>Frequently Ask</h3>
            {detail.map((detail) => {
              return (
                <div className="left-content">
                  <Collapsible
                    className="Collapsible"
                    trigger={[
                      <i class="fa-solid fa-angle-down"></i>,
                      detail.question,
                    ]}
                    triggerWhenOpen={[
                      <i class="fa-solid fa-angle-up"></i>,
                      detail.question,
                    ]}>
                    <p className="content-show">{detail.answer}</p>
                  </Collapsible>
                </div>
              );
            })}
          </div>

          <div className="right" data-aos="fade-left">
            <img src={pic} alt="person" />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Accordion;
