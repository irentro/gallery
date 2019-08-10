/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import CarouselSlides from './CarouselSlides.jsx';
import styles from '../style.css';


class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: this.props.position,
    };
    this.onClickRight = this.onClickRight.bind(this);
    this.onClickLeft = this.onClickLeft.bind(this);
    this.onClickSlide = this.onClickSlide.bind(this);
  }

  onClickRight() {
    const ind = this.state.position;
    if (ind <= this.props.photos.length - 2) {
      this.setState({ position: ind + 1 });
    } else {
      this.setState({ position: 0 });
    }
  }

  onClickLeft() {
    const ind = this.state.position;
    if (ind !== 0) {
      this.setState({ position: ind - 1 });
    } else {
      this.setState({ position: this.props.photos.length - 1 });
    }
  }

  onClickSlide(item) {
    const ind = item.position;
    this.setState({ position: ind - 1 });
  }

  render() {
    const { photos, hideCarousel } = this.props;
    const { position } = this.state;
    return (
      <div className={styles.carousel}>
        <btn className={styles.close} onClick={hideCarousel} />
        <div className={styles.wrapperCarousel}>
          <btn className={styles.leftBtn} onClick={this.onClickLeft} />
          <div className={styles.mainImg}>
            <img
              className={styles.carouselImg}
              src={photos[position].imageUrl}
              onClick={this.onClickRight}
            />
          </div>
          <btn className={styles.rightBtn} onClick={this.onClickRight} />
        </div>
        <div className={styles.CarouselSlides}>
          <CarouselSlides
            photos={this.props}
            onClickSlide={this.onClickSlide}
            position={position}
          />
        </div>
      </div>
    );
  }
}

export default Carousel;
