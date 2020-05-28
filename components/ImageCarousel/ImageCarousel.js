import React, { Component } from "react";
import Slider from "react-slick";
import photo1 from "../../assets/images/outdoor1.jpg";
import photo2 from "../../assets/images/outdoor2.jpg";
import photo3 from "../../assets/images/pexels-photo-3.jpeg";
import photo4 from "../../assets/images/outdoor3.jpg";

const photos = [
  {
    id: "1",
    name: "Photo1",
    src: photo1,
  },
  {
    id: "2",
    name: "Photo2",
    src: photo2,
  },
  {
    id: "3",
    name: "Photo3",
    src: photo3,
  },
  {
    id: "4",
    name: "Photo4",
    src: photo4,
  },
  {
    id: "5",
    name: "Photo5",
    src: photo3,
  },
];

class ImageCarousel extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      adaptiveHeight: false,
      speed: 500,
      arrows: true,
    };
    return (
      <div className="carousel-slider">
        <Slider {...settings}>
          {photos.map((photo, index) => {
            return (
              <div key={index}>
                <img width="95%" src={photo.src} alt="photo1" />
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}

export default ImageCarousel;
