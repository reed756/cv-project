import React from 'react'
import styled from 'styled-components';

function Template(props) {
        const TemplateDiv = styled.div`
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          margin: 30px;
          border-bottom: 1px solid cornflowerblue;
        `
        return (
        <div>
            <TemplateDiv>
                <h3>General information</h3>
                  <p>Name: { props.fullname }</p>
                  <p>Email Address: { props.email }</p>
                  <p>Phone Number: { props.phone }</p>
            </TemplateDiv>
            <TemplateDiv>
                <h3>Education</h3>
                  <p>School/College: { props.school }</p>
                  <p>Subject: { props.subject }</p>
                  <p>From: { props.studiedFrom }</p>
                  <p>Until: { props.studiedUntil }</p>
            </TemplateDiv>
            <TemplateDiv>
                <h3>Work Experience</h3>
                  <p>Company: { props.company }</p>
                  <p>Position Held: { props.position }</p>
                  <p>Tasks: { props.tasks }</p>
                  <p>From: { props.workedFrom }</p>
                  <p>Until: { props.workedUntil }</p>
            </TemplateDiv>
        </div>
        )
}
export default Template