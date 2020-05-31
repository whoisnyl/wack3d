import Countdown from "react-countdown";

import Row from "./row";

export default function Timer({ date }) {
  let dateFormat = new Date(date).toISOString("en-US", {
    timeZone: "Asia/Manila",
  });

  return (
    <div className="ticker_countdown-time">
      <Countdown
        date={dateFormat}
        intervalDelay={1000}
        renderer={(props) => (
          <Row classNames="row-align-center row-justify-center">
            <div className="ct ct-days">
              <p>{props.days}</p>
              <span>DAYS</span>
            </div>
            <div className="ct ct-hours">
              <p>{props.hours}</p>
              <span>HRS</span>
            </div>
            <div className="ct ct-minutes">
              <p>{props.minutes}</p>
              <span>MIN</span>
            </div>
            <div className="ct ct-seconds">
              <p>{props.seconds}</p>
              <span>SEC</span>
            </div>
          </Row>
        )}
      />
    </div>
  );
}
