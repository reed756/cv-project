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
                        onChange={ props.onChange }
                    />
                    
                    <br />
                    <label htmlFor={ props.subject }>Subject: </label>
                    <input 
                        name={ props.subject }
                        type={ props.text }
                        placeholder={ props.placeholder }
                        value={ props.isSubmitted ? "" : props.stateSubject }
                        onChange={ props.onChange }
                    />
                    
                    <br />
                    <label htmlFor={ props.studiedfrom }>Date From: </label>
                    <input 
                        name={ props.studiedfrom } 
                        type={ props.date }
                        value={ props.isSubmitted ? "" : props.stateStudiedFrom }
                        onChange={ props.onChange }
                    />
                    
                    <br />
                    <label htmlFor={ props.studieduntil }>Date Until: </label>
                    <input 
                        name={ props.studieduntil } 
                        type={ props.date }
                        value={ props.isSubmitted ? "" : props.stateStudiedUntil }
                        onChange={ props.onChange }
                    />
                    
            </div>
        )
}

export default Education;