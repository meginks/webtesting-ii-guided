import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';
import App from './App';

describe('<App/>', () => {
  

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders successfully', () => {
  const renderObject = render(<App />);
  console.log(renderObject);
})

it('greets the team', ()=> {
  const {getByText} = render(<App/>)
  const greetButton = getByText(/greet/i) 
  fireEvent.click(greetButton)

  getByText(/hello web students/i);
})

it('says bye to team', () => {
  const {getByText} = render(<App/>);
  const farewellButton = getByText(/say bye/i)
  fireEvent.click(farewellButton) 
  getByText(/bye web students/i);
})

it('renders Hello World', () => {
  const {getByText} = render(<App />) 

  const text = getByText(/hello world/i) 

  expect(text).toBeInTheDocument();
})

})