import React, { useEffect, useState } from "react";

import Row from "../utils/row";
import Heading from "../utils/heading";
import Button from "../utils/button";
import Timer from "../utils/timer";

import Container from "./container";
import Newsletter from "./newsletter";

export default function Ticker({ sticky, desktop }) {
  const [visible, setVisible] = useState(false);

  const scrollToSubscription = () => {
    window.scrollTo({
      top: document.getElementById("countdownTicker").offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    sticky && !desktop
      ? setTimeout(() => {
          setVisible(true);
        }, 300)
      : setVisible(false);
  }, [sticky]);

  return (
    <Container
      fluid={false}
      classNames={`ticker ${sticky && desktop ? "ticker--sticky_desktop" : ""}`}
      id="countdownTicker"
    >
      <Row classNames="row-direction-column row-direction-xl-row row-align-center row-justify-xl-between">
        <div className="ticker_countdown">
          <Row classNames="row-direction-column row-direction-xl-row row-align-center row-justify-xl-between">
            <Heading tag="h4" classNames="text-uppercase font-tungsten-bold">
              official shop opens in:
            </Heading>
            <Timer date="2020-07-01" />
          </Row>
        </div>
        <Newsletter />
      </Row>
      {sticky && !desktop ? (
        <div className={`ticker--sticky ${visible ? "show" : ""}`}>
          <Row classNames="row-align-center row-justify-between">
            <Timer date="2020-07-01" />
            <Button
              type="button"
              classNames="btn btn-sm btn-primary"
              onClick={scrollToSubscription}
            >
              notify me
            </Button>
          </Row>
        </div>
      ) : (
        ""
      )}
    </Container>
  );
}
