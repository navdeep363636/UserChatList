import React from "react";
import SlickSlider from "react-slick";
import styled from "styled-components";
const settings = {
  dots: true,
  infinite: true,

  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 2000
};
const slideData = [
  {
    img:
      "https://images.unsplash.com/photo-1575972725751-d76ffb06aabd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900"
  },
  {
    img:
      "https://images.unsplash.com/photo-1558981420-c532902e58b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900"
  },
  {
    img:
      "https://images.unsplash.com/photo-1575959508154-1fab18d1338b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900"
  }
];
export default () => (
  <Slider {...settings}>
    {slideData.map(({ img }, index) => (
      <div key={index}>
        <Slide
          style={{
            background: `url(${img}) center / cover`
          }}
        >
          Slide {index + 1}
        </Slide>
      </div>
    ))}
  </Slider>
);

const Slider = styled(SlickSlider)``;
const Slide = styled("div")`
  height: 300px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 26px;
`;
