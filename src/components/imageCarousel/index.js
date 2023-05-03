import React, { Component } from 'react';
import Slider from 'react-slick';

class ImageCarousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSlide: 0
    };
  }

  render() {
    const { images } = this.props;
    const { currentSlide } = this.state;

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '0px',
      afterChange: (current) => this.setState({ currentSlide: current })
    };

    return (
      <div className="image-carousel">
        <Slider {...settings}>
          {images.map((imageUrl, index) => (
            <div key={index}>
              <img src={imageUrl} alt={`Image ${index}`} />
            </div>
          ))}
        </Slider>

        <button
          className="image-carousel__arrow image-carousel__arrow--left"
          onClick={() => this.slider.slickPrev()}
          disabled={currentSlide === 0}
        >
          <span className="visually-hidden">Previous Image</span>
        </button>
        <button
          className="image-carousel__arrow image-carousel__arrow--right"
          onClick={() => this.slider.slickNext()}
          disabled={currentSlide === images.length - 1}
        >
          <span className="visually-hidden">Next Image</span>
        </button>
      </div>
    );
  }
}

export default ImageCarousel;
