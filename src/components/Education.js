import React from 'react'
import PropTypes from 'prop-types'

import '../styles/Education.css'

function Education(props) {
        return (
            <div className="education-box">
                    <label htmlFor={ props.school }>School: </label>
                    <input 
                        name={ props.school }
                        type={ props.text }
                        placeholder={ props.placeholder }
                        value={ props.isSubmitted ? "" : props.stateSchool }
                        onChange={ (event) => {
                            props.changeSchool(event.target.value)
                        } }
                    />
                    
                    <br />
                    <label htmlFor={ props.subject }>Subject: </label>
                    <input 
                        name={ props.subject }
                        type={ props.text }
                        placeholder={ props.placeholder }
                        value={ props.isSubmitted ? "" : props.stateSubject }
                        onChange={ (event) => {
                            props.changeSubject(event.target.value)
                        } }
                    />
                    
                    <br />
                    <label htmlFor={ props.studiedfrom }>Date From: </label>
                    <input 
                        name={ props.studiedfrom } 
                        type={ props.date }
                        value={ props.isSubmitted ? "" : props.stateStudiedFrom }
                        onChange={ (event) => {
                            props.changeStudiedFrom(event.target.value)
                        } }
                    />
                    
                    <br />
                    <label htmlFor={ props.studieduntil }>Date Until: </label>
                    <input 
                        name={ props.studieduntil } 
                        type={ props.date }
                        value={ props.isSubmitted ? "" : props.stateStudiedUntil }
                        onChange={ (event) => {
                            props.changeStudiedUntil(event.target.value)
                        } }
                    />
                    
            </div>
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