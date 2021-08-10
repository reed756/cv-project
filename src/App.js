import Heading from './components/Heading';
import './styles/App.css';
import General from './components/General';
import Education from './components/Education';
import Work from './components/Work';
import React from 'react';
import Template from './components/Template';
import Footer from './components/Footer'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      email: '',
      phone: '',
      school: "",
      subject: "",
      studiedFrom: "",
      studiedUntil: "",
      company: "",
      position: "",
      tasks: "",
      workedFrom: "",
      workedUntil: "",
      isSubmitted: false,
    }
    this.handleChange = this.handleChange.bind(this)
  }
  
  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState(prevState => {
      return {
        isSubmitted: !prevState.isSubmitted
      }
    })
  }

  render() {
    return (
      <div className="App">
        <Heading />
        <div className="content">
          <div className="forms">
            <form onSubmit={ this.handleSubmit }>
              <General 
                fullname="fullName"
                email="email"
                phone="phone"
                text="text"
                placeholder="Please enter required information"
                isSubmitted={ this.state.isSubmitted }
                stateName={ this.state.fullName }
                stateEmail={ this.state.email }
                statePhone={ this.state.phone }
                onChange={ this.handleChange }
              />
              <Education 
                school="school"
                subject="subject"
                studiedfrom="studiedFrom"
                studieduntil="studiedUntil"
                text="text"
                date="date"
                placeholder="Please enter required information"
                isSubmitted={ this.state.isSubmitted }
                stateSchool={ this.state.school }
                stateSubject={ this.state.subject }
                stateStudiedFrom={ this.state.studiedFrom }
                stateStudiedUntil={ this.state.studiedUntil }
                onChange={ this.handleChange }
              />
              <Work 
                company="company"
                position="position"
                tasks="tasks"
                workedfrom="workedFrom"
                workeduntil="workedUntil"
                text="text"
                date="date"
                placeholder="Please enter required information"
                isSubmitted={ this.state.isSubmitted }
                stateCompany={ this.state.company }
                statePosition={ this.state.position }
                stateTasks={ this.state.tasks }
                stateWorkedFrom={ this.state.workedFrom }
                stateWorkedUntil={ this.state.workedUntil }
                onChange={ this.handleChange }
              />
              <button type="submit">
                { this.state.isSubmitted ? "EDIT" : "SUBMIT" }
              </button>
            </form>
          </div>
          <div className="preview">
            <Template 
              fullname={ this.state.fullName }
              email={ this.state.email }
              phone={ this.state.phone }
              school={ this.state.school }
              subject={ this.state.subject }
              studiedFrom={ this.state.studiedFrom }
              studiedUntil={ this.state.studiedUntil }
              company={ this.state.company }
              position={ this.state.position }
              tasks={ this.state.tasks }
              workedFrom={ this.state.workedFrom }
              workedUntil={ this.state.workedUntil }
            />
          </div>
        </div>
        <Footer footer="© 2021 - James Reed"/>
      </div>
    );
  }
}

export default App;