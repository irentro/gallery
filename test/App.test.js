import React from 'react';
import ReactDOM from 'react-dom';
import App from '../client/src/components/App.jsx';


describe('Test App React Component', () => {
  it('should render App component', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})
