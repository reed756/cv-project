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
      name: '',
      email: '',
      number: '',
    }
  }
  
  handleChange = (e) => {

  }

  onSubmit = (e) => {
    e.preventDefault();
    
  }

  render() {
    return (
      <div className="App">
        <Heading />
        <div className="content">
          <div className="forms">
            <form onSubmit={this.onSubmit}>
              <General />
              <Education />
              <Work />
              <button type="submit">
                Submit
              </button>
            </form>
          </div>
          <div className="preview">
            <div className="template">
                  <p>{this.state.name}</p>
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