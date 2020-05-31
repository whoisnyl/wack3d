import Row from "../utils/row";
import Heading from "../utils/heading";
import Text from "../utils/text";
import Button from "../utils/button";

import Container from "../elements/container";
import Section from "../elements/section";

export default function CustomGamingOverlay() {
  return (
    <Container fluid={false} classNames="custom-gaming-overlay">
      <Row classNames="row-direction-column row-direction-xl-row row-align-center row-justify-xl-between">
        <img
          className="big-thumbnail"
          src="/images/custom-overlay.png"
          alt="custom overlay"
        />
        <Section>
          <Heading
            tag="h2"
            classNames="section_title text-light font-tungsten-bold"
          >
            A custom overlay gives personality to your streams
          </Heading>
          <Text tag="p" classNames="section_description">
            Personalized stream overlays is what we specialize in. Your
            satisfaction is our guarantee!{" "}
            <Text tag="span" classNames="text-light">
              Interested in a personalized stream overlay?
            </Text>{" "}
            Message us on DISCORD
          </Text>
          <Button
            type="button"
            classNames="btn btn-lg btn-primary"
            icon="/images/icon-discord.png"
          >
            join our discord
          </Button>
        </Section>
      </Row>
    </Container>
  );
}
