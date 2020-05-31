import Row from "../utils/row";
import Heading from "../utils/heading";
import Text from "../utils/text";
import Button from "../utils/button";

import Container from "../elements/container";
import Section from "../elements/section";

export default function CustomGamingWebsite() {
  return (
    <Container fluid={false} classNames="custom-gaming-website">
      <Row classNames="row-direction-column row-direction-xl-row row-align-center row-justify-xl-between">
        <img
          className="big-thumbnail"
          src="/images/custom-gaming-website.png"
          alt="custom gaming logos"
        />
        <Section>
          <Heading
            tag="h2"
            classNames="section_title text-light font-tungsten-bold"
          >
            Custom Gaming Website
          </Heading>
          <Text tag="p" classNames="section_description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis.
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
