import React from 'react';
import axios from 'axios';
import PhotoDisplay from './PhotoDisplay.jsx';
import Carousel from './Carousel.jsx';
import styles from '../style.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      carouselView: -1,
    };
    this.showCarousel = this.showCarousel.bind(this);
    this.hideCarousel = this.hideCarousel.bind(this);
  }

  componentDidMount() {
    const listingid = 20;
    // axios.get(`http://54.153.43.37:3009/gallery/${listingid}`)
    axios.get(`http://localhost:3009/gallery/${listingid}`)
      .then((res) => {
        console.log('good');
        const { data } = res;
        console.log(data);
        console.log('dataphotos', data[0].photos);
        this.setState({ photos: data[0].photos });
      });
  }

  showCarousel(position) {
    if ((position >= 0) && (position < this.state.photos.length)) {
      this.setState({ carouselView: position });
    } else {
      this.setState({ carouselView: -1 });
    }
  }

  hideCarousel() {
    this.setState({ carouselView: -1 });
  }

  render() {
    return (
      <div>
        { (this.state.carouselView < 0)
          ? (
            <PhotoDisplay
              photos={this.state.photos} 
              showCarousel={this.showCarousel}
            />
          )
          : (
            <Carousel
              position={this.state.carouselView} 
              photos={this.state.photos} 
              hideCarousel={this.hideCarousel}
            />
          )
      }
      </div>
    );
  }
}


export default App;
