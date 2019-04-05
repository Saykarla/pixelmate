import React, { Component } from 'react';
import './AddItem.sass';


class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      surname: "",
      gender: "male",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    var name = this.state.name;
    var surname = this.state.surname;
    var gender = this.state.gender;
    this.props.inputName({
      name,
      surname,
      gender
    });
    event.preventDefault();
    this.setState({
      name: '',
      surname: ''
    });
  }

  render() {
    return (
      <div className="data-wrap data-input">
      	<div className="root-title"><h4>FORMULÁŘ</h4></div>
      	<div className="root-desc">
      		<h4>Vzorový radio button</h4>
      		<p>Rozšířený label radio buttonu který <br />může být delší</p>
      	</div>
	      <form className="root-form" onSubmit={this.handleSubmit}>
	      	
	          <div className="switch-field" onChange={this.handleChange}>
					<input type="radio" id="radio-one" name="gender" value="male" checked/>
					<label for="radio-one">muž</label>
					<input type="radio" id="radio-two" name="gender" value="female" />
					<label for="radio-two">žena</label>
				</div>
	        	<label for="name">Jméno </label>
	          <input
	            type="text"
	            name="name"
	            value={this.state.name}
	            onChange={this.handleChange}
	          />
	          <label for="surname">Příjmení </label>
	          <input
	            type="text"
	            name="surname"
	            value={this.state.surname}
	            onChange={this.handleChange}
	          />
	          
	        <div className="submit-wrapper"><input type="submit" value="Pokračovat" /></div>
	      </form>
      </div>
    );
  }
}

export default AddItem;