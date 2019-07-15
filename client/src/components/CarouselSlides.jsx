import React from 'react';
import styles from '../style.css';

class CarouselSlides extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    }
  }

  componentDidMount() {
    const shift = (this.props.position * (-52)) + 50;
    const str = "translateX(" + shift.toString() + "px)";
    document.getElementById("photos").style.transform = str;
  }

  componentDidUpdate() {
    const shift = (this.props.position * (-52)) + 50;
    const str = "translateX(" + shift.toString() + "px)";
    document.getElementById("photos").style.transform = str;
  }

  render() {
    const { photos, position, onClickSlide } = this.props;
    return (
      <div className={styles.photoAndInfo}>
        <div className={styles.photoSlider}>
          <div id="photos" className={styles.photoList}>
              {photos.photos.map(item =>
                  <li key={item.position} onClick={() => {onClickSlide(item)}}>
                    <img 
                    className={styles.imgSlides} 
                    src={item.imageUrl} />
                  </li>
              )}
          </div>
        </div>
        <div className={styles.listingInfo}>
            <p>{position + 1} / {photos.photos.length}</p>
            <p>{photos.photos[position].description}</p>
        </div>
      </div>
    );
  }
}



export default CarouselSlides;
