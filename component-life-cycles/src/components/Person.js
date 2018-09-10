import React, { Component } from 'react';
import './person.css'
class Person extends Component {
  constructor() {
    super();

    this.state = {
      firstName:'',
      lastName: '',
      email: '',
      phone: '',
      errors: {
        firstName: false,
        lastName: false
      }
    };
  }

  // Handle the text on the inputs
  handleOnChange = e => {
    const { target: {value, name}} = e;

    this.setState({
      [name]: value
    });
  }

  // Handle the submit of the local state values
  handleOnSubmit = e => {
    // cancel the default action of the event.
    e.preventDefault();

    // Obtain the nodes of the local state
    const { firstName, lastName, email, phone } = this.state;

    // Updating the local state if the fields are empty
    this.setState({
      errors: {
        firstName: firstName === '', // true if is equal in type and value.
        lastName: lastName === ''
      }
    });

    // data is an object with all information of the local state.
    const data = {
      firstName,
      lastName,
      email,
      phone
    };

    console.log('data', data);
  }

  render() {
    return(
      <div className="Person">
        <form onSubmit={ this.handleOnSubmit }>
          <div>
            <p><strong>First Name:</strong></p> {/* the only way to re-render is updatin local state*/}
            <p>
              <input name="firstName" type="text" onChange={ this.handleOnChange } value={ this.state.firstName } className={ this.state.errors.firstName ? 'error' : '' }/>
              { this.state.errors.firstName && <div className="errorMessage">Required Field</div> }
            </p>

            <p><strong>Last Name</strong></p>
            <p><input name="lastName" type="text" onChange={ this.handleOnChange } value={ this.state.lastName } className={ this.state.errors.lastName ? 'error': '' }/></p>
          </div>

          <div>
            <p><strong>Email:</strong></p>
            <p><input name="email" type="email" onChange={ this.handleOnChange } value={ this.state.email }/></p>
          </div>

          <div>
            <p><strong>Phone:</strong></p>
            <p><input name="phone" type="tel" onChange={ this.handleOnChange } value={ this.state.phone }/></p>
          </div>

          <p>
            <button>Save</button>
          </p>

        </form>
      </div>
    );
  }

}

export default Person;
