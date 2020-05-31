import Slider from "react-slick";

import Row from "../utils/row";
import Text from "../utils/text";

import { reviews } from "../../data";

const CustomNext = ({ classNames, onClick }) => {
  return <div className={classNames} onClick={onClick} />;
};

const CustomPrev = ({ classNames, onClick }) => {
  return <div className={classNames} onClick={onClick} />;
};

export default function Review() {
  const config = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "120px",
    slidesToShow: 3,
    speed: 500,
    arrows: true,
    dots: false,
    adaptiveHeight: false,
    nextArrow: <CustomPrev classNames="custom-arrow custom-arrow--right" />,
    prevArrow: <CustomNext classNames="custom-arrow custom-arrow--left" />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          centerPadding: "60px",
          slidesToShow: 1,
        },
      },
    ],
  };

  const GetStars = ({ num }) => {
    var stars = [];
    for (var i = 0; i < num; i++) {
      stars.push(i);
    }
    return (
      <Row classNames="review-slider_item__ratings row-align-center">
        {stars.map((index) => (
          <div key={index}>
            <img src="/images/icon-star.png" alt="star" />
          </div>
        ))}
      </Row>
    );
  };

  return (
    <div className="review-slider">
      <Slider {...config}>
        {reviews &&
          reviews.map((review) => (
            <div key={review.id} className="review-slider_item">
              <GetStars num={review.ratings} />
              <div className="review-slider_item__feedback">
                <Text tag="p">{review.feedback}</Text>
              </div>
              <Row classNames="review-slider_item__user row align-center">
                <Text tag="p">{review.username}</Text>
                <Text tag="span">&nbsp;-&nbsp;{review.title}</Text>
              </Row>
            </div>
          ))}
      </Slider>
    </div>
  );
}
