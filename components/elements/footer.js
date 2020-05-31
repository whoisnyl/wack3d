import Row from "../utils/row";
import Text from "../utils/text";

import Section from "../elements/section";

export default function Footer() {
  return (
    <footer className="footer">
      <Section classNames="text-center">
        <img src="/images/logo-icon.png" alt="WACK3D" />
        <Text tag="p">© 2019 WACK3D® All rights reserved.</Text>
        <Text tag="p">
          By using this site you agree to our{" "}
          <a href="#">Terms and Conditions</a> • <a href="#">Privacy Policy</a>
        </Text>
      </Section>
    </footer>
  );
}
