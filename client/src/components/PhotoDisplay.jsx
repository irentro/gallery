/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareSquare, faHeart } from '@fortawesome/free-regular-svg-icons';
import styles from '../style.css';

class PhotoDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: -1,
    };
    this.handleMouseOn = this.handleMouseOn.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleMouseOut() {
    this.setState({hovered: -1});
  }

  handleMouseOn(e) {
    const { photos } = this.props;
    for (let i = 0; i < photos.length; i++) {
      if (e.target.src === photos[i].imageUrl) {
        this.setState({ hovered: i });
      }
    }
  }

  handleClick(e, index) {
    this.props.showCarousel(index);
  };

  render() {
    const { photos, showCarousel } = this.props;
    const { hovered } = this.state;
    if (!photos[0] || photos[0] === undefined) {
      return <div></div>;
    }
    let classForZooms = [[styles.grid, styles.a].join(' '), [styles.grid, styles.b].join(' '), [styles.grid, styles.c].join(' '), [styles.grid, styles.d].join(' '), [styles.grid, styles.e].join(' ')];
    if (hovered >= 0) {
      classForZooms = classForZooms.map((zoom, index) => {
        if (hovered !== index) {
          zoom = [zoom, styles.opacity].join(' ');
        }
        return zoom;
      });
    }
    return (
      <div>
        <div className={styles.wrapper} onMouseOut={this.handleMouseOut} onMouseOver={this.handleMouseOn}>
          <div className={classForZooms[0]}>
            <img
              className={[styles.box, styles.prim].join(' ')}
              src={photos[0].imageUrl}
              onClick={(e) => { this.handleClick(e, 0); }}
            />
          </div>
          <div className={classForZooms[1]}>
            <img
              className={styles.box}
              src={photos[1].imageUrl} 
              onClick={(e) => { this.handleClick(e, 1); }}
            />
          </div>
          <div className={classForZooms[2]}>
            <img
              className={styles.box}
              src={photos[2].imageUrl} 
              onClick={(e) => { this.handleClick(e, 2); }}
            />
          </div>
          <div className={classForZooms[3]}>
            <img
              className={styles.box}
              src={photos[3].imageUrl}
              onClick={(e) => { this.handleClick(e, 3); }}
            />
          </div>
          <div className={classForZooms[4]}>
            <img
              className={styles.box}
              src={photos[4].imageUrl} 
              onClick={(e) => { this.handleClick(e, 4); }}
            />
          </div>
        </div>

        <div className={styles.topContainer}>
		 <button className={[styles.topGallery, styles.shareBtn].join(' ')}>
            <FontAwesomeIcon icon={faShareSquare} /> Share
          </button>
          <button className={[styles.topGallery, styles.heartBtn].join(' ')}>
            <FontAwesomeIcon icon={faHeart} /> Save
          </button>
        </div>

        <div className={styles.bottomContainer}>
          <button className={styles.viewPhotosBtn} onClick={(e) => { this.handleClick(e, 0); }}>
          View Photos
          </button>
        </div>
      </div>
    );
  }
}


export default PhotoDisplay;
