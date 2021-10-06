import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import '../styles/Education.css'

function Education(props) {

        const EducationDiv = styled.div`
            margin-bottom: 10px;
        `
        const EducationLabel = styled.label`
            display: inline-block;
            width: 200px;
            margin: 0;
            padding: 0;
            font-size: 20px;
        `
        const EducationInput = styled.input`
            width: 400px;
            padding: 0 10px;
            border: none;
            margin-bottom: 5px;
            font-size: 20px;
            border-radius: 2em;
            @media only screen and (max-width: 410px) {
                    width: 300px;
            }
            @media only screen and (max-width: 320px) {
                    width: 275px;
            }
        `

        return (
                <EducationDiv>
                    <EducationLabel htmlFor={ props.school }>School: </EducationLabel>
                    <EducationInput 
                        name={ props.school }
                        type={ props.text }
                        placeholder={ props.placeholder }
                        value={ props.isSubmitted ? "" : props.stateSchool }
                        onChange={ (event) => {
                            props.changeSchool(event.target.value)
                        } }
                    />
                    
                    <br />
                    <EducationLabel htmlFor={ props.subject }>Subject: </EducationLabel>
                    <EducationInput 
                        name={ props.subject }
                        type={ props.text }
                        placeholder={ props.placeholder }
                        value={ props.isSubmitted ? "" : props.stateSubject }
                        onChange={ (event) => {
                            props.changeSubject(event.target.value)
                        } }
                    />
                    
                    <br />
                    <EducationLabel htmlFor={ props.studiedfrom }>Date From: </EducationLabel>
                    <EducationInput 
                        name={ props.studiedfrom } 
                        type={ props.date }
                        value={ props.isSubmitted ? "" : props.stateStudiedFrom }
                        onChange={ (event) => {
                            props.changeStudiedFrom(event.target.value)
                        } }
                    />
                    
                    <br />
                    <EducationLabel htmlFor={ props.studieduntil }>Date Until: </EducationLabel>
                    <EducationInput 
                        name={ props.studieduntil } 
                        type={ props.date }
                        value={ props.isSubmitted ? "" : props.stateStudiedUntil }
                        onChange={ (event) => {
                            props.changeStudiedUntil(event.target.value)
                        } }
                    />
                </EducationDiv>
        )
}

Education.propTypes = {
    school: PropTypes.string,
    subject: PropTypes.string,
    stateStudiedFrom: PropTypes.string,
    stateStudiedUntil:  PropTypes.string,
    studiedfrom: PropTypes.string,
    studieduntil: PropTypes.string,
    stateSchool: PropTypes.string,
    stateSubject: PropTypes.string,
    isSubmitted: PropTypes.bool
}

export default Education;