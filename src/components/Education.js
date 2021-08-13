import React from 'react'
import '../styles/Education.css'

class Education extends React.Component {

    render() {
        return (
            <div className="education-box">
                    <label htmlFor={ this.props.school }>School: </label>
                    <input 
                        name={ this.props.school }
                        type={ this.props.text }
                        placeholder={ this.props.placeholder }
                        value={ this.props.isSubmitted ? "" : this.props.stateSchool }
                        onChange={ this.props.onChange }
                    />
                    
                    <br />
                    <label htmlFor={ this.props.subject }>Subject: </label>
                    <input 
                        name={ this.props.subject }
                        type={ this.props.text }
                        placeholder={ this.props.placeholder }
                        value={ this.props.isSubmitted ? "" : this.props.stateSubject }
                        onChange={ this.props.onChange }
                    />
                    
                    <br />
                    <label htmlFor={ this.props.studiedfrom }>Date From: </label>
                    <input 
                        name={ this.props.studiedfrom } 
                        type={ this.props.date }
                        value={ this.props.isSubmitted ? "" : this.props.stateStudiedFrom }
                        onChange={ this.props.onChange }
                    />
                    
                    <br />
                    <label htmlFor={ this.props.studieduntil }>Date Until: </label>
                    <input 
                        name={ this.props.studieduntil } 
                        type={ this.props.date }
                        value={ this.props.isSubmitted ? "" : this.props.stateStudiedUntil }
                        onChange={ this.props.onChange }
                    />
                    
            </div>
        )
    }
}

export default Education;