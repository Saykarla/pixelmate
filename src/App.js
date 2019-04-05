import React, { Component } from 'react';
import './App.sass';
import AddItem from './AddItem.js';
import data from './data/test-data.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data,
    };
  }

  handleState = (inputtedValues) => {

    let day = new Date().getDate(); //Current Day.
    let month = new Date().getMonth() + 1; //Current Month.
    let year = new Date().getFullYear(); //Current Year.
    
    let today = year + '-' + month + '-' + day;//All date

    const newItem = {
      date: today,
      gender: inputtedValues.gender,
      name: inputtedValues.name,
      surname: inputtedValues.surname
    };
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr
      };
    });
  };

  render() {
    return (
      <div className="">
       <AddItem inputName={this.handleState} />
        <div className="data-wrap data-list">
        <div className="root-title"><h4>Přehled</h4></div>
          {this.state.data.map(value => (
            <div className="list-item">
              <span className="list-date">{value.date}</span>
              <span className="list-gender"><b>{value.gender}</b></span>
              <span className="list-name"><b>{value.name}&nbsp;&nbsp;{value.surname}</b></span>
              <span className="list-detail"><button>Zobrazit</button></span>
            </div>
          ))}
         
        </div>
      </div>
    );
  }
}

export default App;