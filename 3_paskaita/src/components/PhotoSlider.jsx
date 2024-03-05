import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderPhoto1 from "../assets/sliderPhoto1.jpg";
import sliderPhoto2 from "../assets/sliderPhoto2.jpg";

const PhotoSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div>
        <img src={sliderPhoto1} alt="Nuotrauka 1" />
      </div>
      <div>
        <img src={sliderPhoto2} alt="Nuotrauka 2" />
      </div>
    </Slider>
  );
};
export default PhotoSlider;
