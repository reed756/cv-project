import React from 'react'
import '../styles/Template.css';

function Template(props) {
        return (
        <div className="template">
            <div className="general">
                <h3>General information</h3>
                  <p>Name: { props.fullname }</p>
                  <p>Email Address: { props.email }</p>
                  <p>Phone Number: { props.phone }</p>
            </div>
            <div className="education">
                <h3>Education</h3>
                  <p>School/College: { props.school }</p>
                  <p>Subject: { props.subject }</p>
                  <p>From: { props.studiedFrom }</p>
                  <p>Until: { props.studiedUntil }</p>
            </div>
            <div className="work">
                <h3>Work Experience</h3>
                  <p>Company: { props.company }</p>
                  <p>Position Held: { props.position }</p>
                  <p>Tasks: { props.tasks }</p>
                  <p>From: { props.workedFrom }</p>
                  <p>Until: { props.workedUntil }</p>
            </div>
        </div>
        )
}

export default Template