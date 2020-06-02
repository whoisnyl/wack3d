import React, { useState } from "react";
import Slider from "react-slick";
import LinesEllipsis from "react-lines-ellipsis";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import Row from "../utils/row";
import Text from "../utils/text";

import { reviews } from "../../data";

const CustomArrow = ({ classNames, onClick }) => {
  return <div className={classNames} onClick={onClick} />;
};

export default function Review() {
  const [expand, setExpand] = useState({ id: 1, expand: false });
  const [current, setCurrent] = useState(1);

  const config = {
    className: "center",
    focusOnSelect: true,
    centerMode: true,
    infinite: true,
    centerPadding: "200px",
    slidesToShow: 3,
    speed: 500,
    arrows: true,
    dots: false,
    adaptiveHeight: false,
    nextArrow: <CustomArrow classNames="custom-arrow custom-arrow--right" />,
    prevArrow: <CustomArrow classNames="custom-arrow custom-arrow--left" />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          centerPadding: "180px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "120px",
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          centerPadding: "60px",
        },
      },
    ],
    afterChange: (current) => {
      setCurrent(current + 1);
      setExpand({ expand: false });
    },
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
    <div className={`review-slider ${expand["expand"] ? "lightbox" : ""}`}>
      <Slider {...config}>
        {reviews &&
          reviews.map((review) => (
            <div className="wrapper">
              <span
                className="close"
                onClick={() => setExpand({ id: null, expand: false })}
              >
                <FontAwesomeIcon icon={faTimes} />
              </span>
              <div
                key={review.id}
                className={`review-slider_item ${
                  expand["id"] == review.id && expand["expand"]
                    ? "review-slider_item--active"
                    : ""
                }`}
                onClick={() =>
                  current == review.id
                    ? setExpand({ id: review.id, expand: true })
                    : console.log(review.id)
                }
              >
                <GetStars num={review.ratings} />
                <div className="review-slider_item__feedback">
                  {expand["id"] == review.id && expand["expand"] ? (
                    <Text tag="p">{review.feedback}</Text>
                  ) : (
                    <LinesEllipsis
                      text={review.feedback}
                      maxLine="3"
                      ellipsis="..."
                      component="p"
                    />
                  )}
                </div>
                <Row classNames="review-slider_item__user row align-center">
                  <Text tag="p">{review.username}</Text>
                  <Text tag="span">&nbsp;-&nbsp;{review.title}</Text>
                </Row>
              </div>
            </div>
          ))}
      </Slider>
    </div>
  );
}
