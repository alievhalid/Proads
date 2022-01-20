import React, { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { SliderData } from "./SliderData";
function ImageSlider({ slides }) {
  const [current, setCurrent] = useState(1);
  const length = slides.length;

  const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1);
  }
  const prevSlide = () => {
      setCurrent(current === 0 ? length - 1 : current - 1);
  }
  if (!Array.isArray(slides) || slides.length <= 0) {
      return null;
  }
  return (
    <section className="slider">
      <FaArrowAltCircleLeft className="left-slide" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-slide" onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
            <div className={index === current ? 'slide active' : 'slide'} key={index}>
                {index === current && (<img src={slide.image} alt="image" className="image" />)}
            </div>
        )
      })}
    </section>
  );
}

export default ImageSlider;
