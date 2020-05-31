import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitterSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import Row from "../utils/row";

export default function Header() {
  return (
    <header className="header">
      <div className="container-inner">
        <Row classNames="row-align-center row-justify-between">
          <div className="header_logo">
            <img src="images/logo.png" alt="WACK3D" />
          </div>
          <Row classNames="header_social">
            <a href="https://www.facebook.com">
              <FontAwesomeIcon icon={faFacebookSquare} />
            </a>
            <a href="https://www.facebook.com">
              <FontAwesomeIcon icon={faTwitterSquare} />
            </a>
            <a href="https://www.facebook.com">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </Row>
        </Row>
      </div>
    </header>
  );
}
