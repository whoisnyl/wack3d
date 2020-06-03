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
            Are you obsessed with gaming? Do you have a team but not a team
            website? Have you thought about possibly having a quality made
            website built for your team? Lets talk more on discord to further
            discuss the details of your website.
          </Text>
          <Button
            href="https://discord.gg/eRu4V45"
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
