import Heading from './components/Heading';
import './styles/App.css';
import General from './components/General';
import Education from './components/Education';
import Work from './components/Work';
import React, { useState } from 'react';
import Template from './components/Template';
import Footer from './components/Footer'

function App() {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     fullName: '',
  //     email: '',
  //     phone: '',
  //     school: "",
  //     subject: "",
  //     studiedFrom: "",
  //     studiedUntil: "",
  //     company: "",
  //     position: "",
  //     tasks: "",
  //     workedFrom: "",
  //     workedUntil: "",
  //     isSubmitted: false,
  //   }
  //   this.handleChange = this.handleChange.bind(this)
  // }

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [school, setSchool] = useState('');
  const [subject, setSubject] = useState('');
  const [studiedFrom, setStudiedFrom] = useState('');
  const [studiedUntil, setStudiedUntil] = useState('');
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [tasks, setTasks] = useState('');
  const [workedFrom, setWorkedFrom] = useState('');
  const [workedUntil, setWorkedUntil] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // function handleChange (event) {
  //   setName(event.target.value)
  // }

  function handleSubmit (event) {
    event.preventDefault()
    setIsSubmitted(!isSubmitted)
  }

  return (
      <div className="App">
        <Heading />
        <div className="content">
          <div className="forms">
            <form 
            onSubmit={ 
              handleSubmit 
              }
              >
              <General 
                fullname="fullName"
                email="email"
                phone="phone"
                text="text"
                placeholder="Please enter required information"
                isSubmitted={ isSubmitted }
                stateName={ name }
                stateEmail={ email }
                statePhone={ phone }
                changeName={ setName }
                changeEmail={ setEmail }
                changePhone={ setPhone }
              />
              <Education 
                school="school"
                subject="subject"
                studiedfrom="studiedFrom"
                studieduntil="studiedUntil"
                text="text"
                date="date"
                placeholder="Please enter required information"
                isSubmitted={ isSubmitted }
                stateSchool={ school }
                stateSubject={ subject }
                stateStudiedFrom={ studiedFrom }
                stateStudiedUntil={ studiedUntil }
                changeSchool={ setSchool }
                changeSubject={ setSubject }
                changeStudiedFrom={ setStudiedFrom }
                changeStudiedUntil={ setStudiedUntil }
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
                isSubmitted={ isSubmitted }
                stateCompany={ company }
                statePosition={ position }
                stateTasks={ tasks }
                stateWorkedFrom={ workedFrom }
                stateWorkedUntil={ workedUntil }
                changeCompany={ setCompany }
                changePosition={ setPosition }
                changeTasks={ setTasks }
                changeWorkedFrom={ setWorkedFrom }
                changeWorkedUntil={ setWorkedUntil }
              />
              <button type="submit" className={ isSubmitted ? "red" : "green" }>
                { isSubmitted ? "EDIT" : "SUBMIT" }
              </button>
            </form>
          </div>
          <div className="preview">
            <Template 
              fullname={ name }
              email={ email }
              phone={ phone }
              school={ school }
              subject={ subject }
              studiedFrom={ studiedFrom }
              studiedUntil={ studiedUntil }
              company={ company }
              position={ position }
              tasks={ tasks }
              workedFrom={ workedFrom }
              workedUntil={ workedUntil }
            />
          </div>
        </div>
        <Footer footer="© 2021 - James Reed"/>
      </div>
    );
}

export default App;