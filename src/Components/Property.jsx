import React, { Fragment, useState } from "react";
import PropertyDetail from "../Detail/PropertyyDetail";
import "../CSS/Property.css";

function Property() {
  const [detail, setDetail] = useState(PropertyDetail);

  return (
    <Fragment>
      <section className="property">
        <div className="center">
          <h3>Popular Properties</h3>
        </div>

        <div className="row">
          {detail.map((detail) => {
            return (
              <div className="column">
                <div className="single-property">
                  <div className="card">
                    <div className="property-thumb">
                      <div className="property-tag">For Sale</div>
                      <img src={detail.Image} alt="palace" />

                      <div className="property-content">
                        <h3>{detail.heading}</h3>
                        <div className="mark">
                          <i className="fa-solid fa-location-dot"></i>
                          <span>{detail.span}</span>
                        </div>
                        <span className="amout">{detail.amount}</span>
                      </div>

                      <div className="property-footer">
                        <ul>
                          <li>
                            <span>{detail.size}</span>
                          </li>
                          <li>
                            <img src={detail.bedImage} alt="bed" />
                            <span>{detail.bed}</span>
                          </li>
                          <li>
                            <img src={detail.bathImage} alt="bath" />
                            <span>{detail.bath}</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="more-property">
            <a href="#!" className="property-btn">
              More Properties
            </a>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default Property;
