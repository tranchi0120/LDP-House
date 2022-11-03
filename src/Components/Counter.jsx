import React, { Fragment, useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import CountUp from "react-countup";
import "../CSS/Counter.css";

const Counter = ({ className, ...rest }) => {
  const [viewPortEntered, setViewPortEntered] = useState(false);

  return (
    <Fragment>
      <section className="counter">
        <div className="counter-container">
          <div className="counter-row">
            {/* Column 1 */}
            <div className="counter-column">
              <strong>
                <CountUp {...rest} start={viewPortEntered ? null : 0} end={305}>
                  {({ countUpRef }) => {
                    return (
                      <VisibilitySensor
                        active={!viewPortEntered}
                        onChange={(isVisible) => {
                          if (isVisible) {
                            setViewPortEntered(true);
                          }
                        }}
                        delayedCall>
                        <span className="counter-number" ref={countUpRef} />
                      </VisibilitySensor>
                    );
                  }}
                </CountUp>
              </strong>
              <span>
                Area <br /> population
              </span>
            </div>

            {/* Column 2 */}
            <div className="counter-column">
              <strong>
                <CountUp
                  {...rest}
                  start={viewPortEntered ? null : 0}
                  end={1024}>
                  {({ countUpRef }) => {
                    return (
                      <VisibilitySensor
                        active={!viewPortEntered}
                        onChange={(isVisible) => {
                          if (isVisible) {
                            setViewPortEntered(true);
                          }
                        }}
                        delayedCall>
                        <span className="counter-number" ref={countUpRef} />
                      </VisibilitySensor>
                    );
                  }}
                </CountUp>
              </strong>
              <span>
                {" "}
                Total <br /> Properties{" "}
              </span>
            </div>

            {/* Column 3 */}
            <div className="counter-column">
              <strong>
                <CountUp {...rest} start={viewPortEntered ? null : 0} end={206}>
                  {({ countUpRef }) => {
                    return (
                      <VisibilitySensor
                        active={!viewPortEntered}
                        onChange={(isVisible) => {
                          if (isVisible) {
                            setViewPortEntered(true);
                          }
                        }}
                        delayedCall>
                        <span className="counter-number" ref={countUpRef} />
                      </VisibilitySensor>
                    );
                  }}
                </CountUp>
              </strong>
              <span>
                {" "}
                Average <br /> House{" "}
              </span>
            </div>

            {/* Column 4 */}
            <div className="counter-column">
              <strong>
                <CountUp {...rest} start={viewPortEntered ? null : 0} end={27}>
                  {({ countUpRef }) => {
                    return (
                      <VisibilitySensor
                        active={!viewPortEntered}
                        onChange={(isVisible) => {
                          if (isVisible) {
                            setViewPortEntered(true);
                          }
                        }}
                        delayedCall>
                        <span className="counter-number" ref={countUpRef} />
                      </VisibilitySensor>
                    );
                  }}
                </CountUp>
              </strong>
              <span>
                {" "}
                Total <br /> Branches{" "}
              </span>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Counter;
