import React from 'react';
import {shallow} from 'enzyme';
import App from '../client/src/components/App.jsx';




describe('Test App React Component', () => {

    it('should render one <h1>', () => {
      const wrapper = shallow(<App />)
        expect(wrapper.find('h1')).toHaveLength(1);
    });

});
