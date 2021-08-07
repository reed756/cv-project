import Heading from './components/Heading';
import './styles/App.css';
import General from './components/General';
import Education from './components/Education';
import Work from './components/Work';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      email: '',
      number: '',
    }
    this.handleChange = this.handleChange.bind(this)
  }
  
  handleChange = (event) => {
    this.setState({
      fullName: event.target.value
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
            <div className="template">
                  <p>{this.state.fullName}</p>
                  <p>{this.state.email}</p>
                  <p>{this.state.number}</p>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;