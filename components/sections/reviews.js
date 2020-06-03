import Row from "../utils/row";
import Heading from "../utils/heading";
import Text from "../utils/text";
import Button from "../utils/button";

import Container from "../elements/container";
import Section from "../elements/section";
import Review from "../elements/review";

export default function Reviews() {
  return (
    <Container fluid={true} classNames="customer-reviews">
      <Section classNames="text-center customer-reviews_top">
        <Heading
          tag="h3"
          classNames="section_title text-light font-tungsten-bold"
        >
          The hype is real
        </Heading>
        <Text tag="p" classNames="section_description">
          Here what real gamers have to say about our overlays. Jump on the hype
          train today and start streaming in style!
        </Text>
      </Section>
      <Review />
      <Section classNames="text-center customer-reviews_bottom">
        <Text tag="p" classNames="section_description lg">
          We guarantee everything we do here at WACK3D is 100% unique and custom
          to each gamers/teams specifications. We do not recycle any assets we
          create! Like what you see? Hit us up on Discord today and lets talk
          about your needs.
        </Text>
        <Button
          href="https://discord.gg/fzpU8KQ"
          classNames="btn btn-lg btn-primary"
          icon="/images/icon-discord.png"
        >
          join our discord
        </Button>
      </Section>
    </Container>
  );
}
