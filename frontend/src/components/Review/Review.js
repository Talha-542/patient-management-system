import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Review.module.css';
import userImage from './user.jpeg';
const data = [
  {
    name: 'John Morgan',
    img: userImage,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    name: 'Ellie Anderson',
    img: userImage,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    name: 'Nia Adebayo',
    img: userImage,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    name: 'Rigo Louie',
    img: userImage,
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    name: 'Mia Williams',
    img: userImage,
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
];
const ReviewSlider = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className={styles.container}>
      <div className={styles.sliderContainer}>
        <Slider {...settings}>
          {data.map((d) => (
            <div key={d.name} className={styles.card}>
              <div className={styles.imageContainer}>
                <img src={d.img} alt={d.name} className={styles.image} />
              </div>
              <div className={styles.content}>
                <p className={styles.name}>{d.name}</p>
                <p className={styles.review}>{d.review}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
export default ReviewSlider;










