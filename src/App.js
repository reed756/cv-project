import Heading from './components/Heading';
import './styles/App.css';
import General from './components/General';
import Education from './components/Education';
import Work from './components/Work';
import React from 'react';
import Template from './components/Template';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      email: '',
      phone: '',
    }
    this.handleChange = this.handleChange.bind(this)
  }
  
  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div className="App">
        <Heading />
        <div className="content">
          <div className="forms">
            <form>
              <General 
                fullname="fullName"
                email="email"
                phone="phone"
                text="text"
                placeholder="Please enter required information"
                onChange={this.handleChange}
              />
              <Education />
              <Work />
              <button type="submit">
                Submit
              </button>
            </form>
          </div>
          <div className="preview">
            <Template 
              fullname={this.state.fullName}
              email={this.state.email}
              phone={this.state.phone}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;