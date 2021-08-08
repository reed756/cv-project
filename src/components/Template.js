import React from 'react'
import '../styles/Template.css';

class Template extends React.Component {
    render() {
        return (
        <div className="template">
            <div className="general">
                <h3>General information</h3>
                  <p>Name: { this.props.fullname }</p>
                  <p>Email Address: { this.props.email }</p>
                  <p>Phone Number: { this.props.phone }</p>
            </div>
            <div className="education">
                <h3>Education</h3>
                  <p>School/College: { this.props.school }</p>
                  <p>Subject: { this.props.subject }</p>
                  <p>From: { this.props.studiedFrom }</p>
                  <p>Until: { this.props.studiedUntil }</p>
            </div>
            <div className="work">
                <h3>Work Experience</h3>
                  <p>Company: { this.props.company }</p>
                  <p>Position Held: { this.props.position }</p>
                  <p>Tasks: { this.props.tasks }</p>
                  <p>From: { this.props.workedFrom }</p>
                  <p>Until: { this.props.workedUntil }</p>
            </div>
        </div>
        )
    }
}

export default Template