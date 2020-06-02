import React, { useEffect, useState } from "react";

import Row from "../utils/row";
import Heading from "../utils/heading";
import Text from "../utils/text";
import Button from "../utils/button";

import Container from "../elements/container";
import Section from "../elements/section";
import Ticker from "../elements/ticker";

export default function TopContent() {
  const [sticky, setSticky] = useState(false);
  const [desktop, setDesktop] = useState(false);

  useEffect(() => {
    let el = document.getElementById("countdownTicker");
    let yPos;

    if (window.innerWidth > 1199) {
      setDesktop(true);
      yPos =
        el.getBoundingClientRect().top +
        (window.pageYOffset - el.ownerDocument.documentElement.clientTop);
    } else {
      setDesktop(false);
      yPos =
        el.getBoundingClientRect().top +
        el.getBoundingClientRect().height +
        (window.pageYOffset - el.ownerDocument.documentElement.clientTop);
    }

    const handleScroll = () => {
      let scroll = document.documentElement.scrollTop;
      scroll > yPos ? setSticky(true) : setSticky(false);
    };

    const handleResize = () => {
      let width = window.innerWidth;
      width > 1199 ? setDesktop(true) : setDesktop(false);
    };

    document.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      document.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Container fluid={false} classNames="top-content">
      <Row classNames="row-direction-column row-direction-xl-row row-align-center row-justify-xl-between">
        <img
          className="big-thumbnail row-order-first row-order-xl-last"
          src="/images/need-a-stream-overlay-logos-website.png"
          alt="WACK3D"
        />
        <Section classNames="row-order-last row-order-xl-first top-content-section">
          <Heading
            tag="h1"
            classNames="section_title text-light font-tungsten-bold"
          >
            need a stream overlay? logo? website?
          </Heading>
          <Text tag="p" classNames="section_description">
            WACK3D is your go to service provider for all your gaming related
            graphic needs and wants! We do stream overlays, team/individual
            gaming logos and websites!
          </Text>
          <Row classNames="row-align-center icons">
            <img src="/images/icon-twitch.png" alt="twitch" />
            <img src="/images/icon-youtube.png" alt="youtube" />
            <img src="/images/icon-mixer.png" alt="mixer" />
            <img src="/images/icon-rectangle.png" alt="rectangle" />
          </Row>
          <Button
            href="https://discord.gg/eRu4V45"
            classNames="btn btn-lg btn-primary"
            icon="/images/icon-discord.png"
          >
            join our discord
          </Button>
        </Section>
      </Row>
      <Ticker sticky={sticky} desktop={desktop} />
    </Container>
  );
}
