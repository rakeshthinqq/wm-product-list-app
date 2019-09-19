import React from 'react';
import logo from './logo.svg';
import './App.css';
import FixedContainer from './components/Container';

export default class App extends React.Component {
  render(){
    return (
      <div className='App'>
        <FixedContainer />
      </div>
    );
  }
};
