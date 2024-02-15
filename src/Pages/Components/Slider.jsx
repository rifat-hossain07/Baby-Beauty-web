import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Slider = () => {
  return (
    <Carousel
      showArrows={true}
      showStatus={true}
      showIndicators={true}
      infiniteLoop={true}
      showThumbs={false}
      useKeyboardArrows={true}
      autoPlay={true}
      stopOnHover={true}
      swipeable={true}
      emulateTouch={true}
      autoFocus={true}
      selectedItem={0}
      interval={2000}
      transitionTime={900}
      swipeScrollTolerance={5}
    >
      {/* First */}
      <div className="h-[500px]">
        <img src="https://i.ibb.co/jJzFg9c/slider.jpg" alt="" />
      </div>
      {/* Second */}
      <div className="h-[500px]">
        <img src="https://i.ibb.co/mFYr4Qv/slider-1.jpg" alt="" />
      </div>
      {/* Third */}
      <div className="h-[500px]">
        <img src="https://i.ibb.co/mSHRTCP/slider3.jpg" alt="" />
      </div>
    </Carousel>
  );
};

export default Slider;
