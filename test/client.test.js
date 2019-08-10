import React from 'react';
import { shallow } from 'enzyme';
import sinon from "sinon";

import App from '../client/src/components/App.jsx';
import PhotoDisplay from '../client/src/components/PhotoDisplay.jsx';
import Carousel from '../client/src/components/Carousel.jsx';
import CarouselSlides from '../client/src/components/CarouselSlides.jsx';


const mockPhotos = {
  listing_id: 100,
  photos: [
    {
      position: 1,
      imageUrl: 'https://irentro.s3-us-west-1.amazonaws.com/rooms/bd49.jpeg',
      description: 'incidunt eaque quia'
    },
    {
      position: 2,
      imageUrl: 'https://irentro.s3-us-west-1.amazonaws.com/rooms/bd80.jpeg',
      description: 'aut dolor consequatur'
    }
  ]
}


describe('Test App React Component', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });
  it('should render <PhotoDisplay /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(PhotoDisplay)).toHaveLength(1);
  });
  it('should render <Carousel /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Carousel)).toHaveLength(0);
  });

});

describe('Test Carousel React Component', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Carousel position={0} photos={mockPhotos} hideCarousel={jest.fn()}/>);
    expect(wrapper.exists()).toBe(true);
  });
  it('should test click', () => {
    const clickStub = sinon.spy();
    const wrapper = shallow(<Carousel photos={mockPhotos} hideCarousel={clickStub}/>);
    expect(clickStub.calledOnce).toBe(false);
  });

});

describe('Test PhotoDisplay React Component', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<PhotoDisplay photos={mockPhotos} showCarousel={jest.fn()}/>);
    expect(wrapper.exists()).toBe(true);
  });
  it('should render correctly with empty array', () => {
    const wrapper = shallow(<PhotoDisplay photos={[]} showCarousel={jest.fn()}/>);
    expect(wrapper.exists()).toBe(true);
  });
});


describe('Test CarouselSlides React Component', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<CarouselSlides photos={mockPhotos} onClickSlide={jest.fn()} position={0}/>);
    expect(wrapper.exists()).toBe(true);
  });
  it('should render two <p>', () => {
    const wrapper = shallow(<CarouselSlides photos={mockPhotos} onClickSlide={jest.fn()} position={0}/>)
      expect(wrapper.find('p')).toHaveLength(2);
  });

});
