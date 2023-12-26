import Slider from "react-slick";

const Slick = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <Slider {...settings}>
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-yellow-500 text-white">
        <div className="flex flex-col items-center justify-center min-h-screen h-96">
          <p className="text-2xl md:text-4xl text-center">
            Welcome to this vape-store
          </p>
          <br />
          <p className="text-xl md:text-2xl">Scroll down to see product</p>
        </div>
      </div>
      <div className="bg-red-900 min-h-screen h-96">
        <h3>1</h3>
      </div>
      <div className="bg-blue-900 min-h-screen h-96">
        <h3>1</h3>
      </div>
    </Slider>
  );
};

export default Slick;
