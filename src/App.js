import Heading from './components/Heading';
import './styles/App.css';
import General from './components/General';
import Education from './components/Education';
import Work from './components/Work';
import React, { useState } from 'react';
import Template from './components/Template';
import Footer from './components/Footer'
import styled from 'styled-components';

function App() {

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

  const ContentDiv = styled.div`
    display: flex;
    background-color: rgb(182, 182, 182);
    height: 1000px;
    margin-top: 10px;
    @media only screen and (max-width: 1215px) {
          flex-direction: column;
          height: auto;
          align-items: center;
  }
  `
  const FormsDiv = styled.div`
    width: 50%;
    height: 800px;
    @media only screen and (max-width: 1215px) {
          height: 700px;
    }
    @media only screen and (max-width: 1200px) {
          height: auto;
          margin-bottom: 100px;
    }
  `
  const PreviewDiv = styled.div`
    background-color: white;
    border: 1px solid black;
    height: 900px;
    width: 630px;
    @media only screen and (max-width: 1215px) {
          margin-bottom: 100px;
    }
    @media only screen and (max-width: 630px) {
          width: 400px;
          height: 1000px;
    @media only screen and (max-width: 410px) {
          width: 300px;
    }
    @media only screen and (max-width: 320px) {
          width: 275px;
  }
  `
  const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
  `
  const StyledButton = styled.button`
    width: 600px;
    height: 50px;
    border: none;
    font-size: 20px;
    cursor: pointer;
    padding: 0.3em 1.2em;
    margin: 0 0.1em 0.1em 0;
    border: 0.16em solid rgba(255,255,255,0);
    border-radius: 2em;
    text-shadow: 0 0.04em 0.04em rgba(0,0,0,0.35);
    transition: all 0.2s;
    @media only screen and (max-width: 1200px) {
          width: 400px;
    }
    @media only screen and (max-width: 410px) {
          width: 300px;
    }
    @media only screen and (max-width: 320px) {
          width: 275px;
  }
  `
  function handleSubmit (event) {
    event.preventDefault()
    setIsSubmitted(!isSubmitted)
  }

  return (
      <div>
        <Heading />
        <ContentDiv>
          <FormsDiv>
            <StyledForm 
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
              <StyledButton type="submit" className={ isSubmitted ? "red" : "green" }>
                { isSubmitted ? "EDIT" : "SUBMIT" }
              </StyledButton>
            </StyledForm>
          </FormsDiv>
          <PreviewDiv>
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
          </PreviewDiv>
        </ContentDiv>
        <Footer/>
      </div>
    );
}

export default App;