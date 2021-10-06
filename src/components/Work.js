import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

function Work(props) {
        const WorkDiv = styled.div`
            margin-bottom: 10px;
        `
        const WorkLabel = styled.label`
            display: inline-block;
            width: 200px;
            margin: 0;
            padding: 0;
            font-size: 20px;
        `
        const WorkInput = styled.input`
            width: 400px;
            padding: 0 10px;
            border: none;
            margin-bottom: 5px;
            font-size: 20px;
            border-radius: 2em;
            @media only screen and (max-width: 1200px) {
                    display: block;
            }
            @media only screen and (max-width: 410px) {
                    width: 300px;
            }
            @media only screen and (max-width: 320px) {
                    width: 275px;
            }
        `
        const WorkTextArea = styled.textarea`
            width: 400px;
            padding: 0 10px;
            border: none;
            margin-bottom: 5px;
            font-size: 20px;
            border-radius: 2em;
            @media only screen and (max-width: 1200px) {
                    display: block;
            }
            @media only screen and (max-width: 410px) {
                    width: 300px;
            }
            @media only screen and (max-width: 320px) {
                    width: 275px;
            }
        `
        return (
            <WorkDiv className="work-box">
                    <WorkLabel htmlFor={ props.company }>Company Name: </WorkLabel>
                    <WorkInput 
                        name={ props.company } 
                        type={ props.text }
                        placeholder={ props.placeholder }
                        value={ props.isSubmitted ? "" : props.stateCompany }
                        onChange={ (event) => {
                            props.changeCompany(event.target.value)
                        } }
                    />
                    
                    <br />
                    <WorkLabel htmlFor={ props.position }>Position: </WorkLabel>
                    <WorkInput 
                        name={ props.position } 
                        type={ props.text }
                        placeholder={ props.placeholder }
                        value={ props.isSubmitted ? "" : props.statePosition }
                        onChange={ (event) => {
                            props.changePosition(event.target.value)
                        } }
                    />
                    
                    <br />
                    <WorkLabel htmlFor={ props.tasks }>Main Tasks: </WorkLabel>
                    <WorkTextArea 
                        name={ props.tasks }
                        type={ props.text }
                        placeholder={ props.placeholder }
                        value={ props.isSubmitted ? "" : props.stateTasks }
                        onChange={ (event) => {
                            props.changeTasks(event.target.value)
                        } }
                    />
                    
                    <br />
                    <WorkLabel htmlFor={ props.workedfrom }>Date From: </WorkLabel>
                    <WorkInput 
                        name={ props.workedfrom } 
                        type={ props.date }
                        value={ props.isSubmitted ? "" : props.stateWorkedFrom }
                        onChange={ (event) => {
                            props.changeWorkedFrom(event.target.value)
                        } }
                    />
                    
                    <br />
                    <WorkLabel htmlFor={ props.workeduntil }>Date Until: </WorkLabel>
                    <WorkInput 
                        name={ props.workeduntil } 
                        type={ props.date }
                        value={ props.isSubmitted ? "" : props.stateWorkedUntil }
                        onChange={ (event) => {
                            props.changeWorkedUntil(event.target.value)
                        } }
                    />
            </WorkDiv>
        )
}

Work.propTypes = {
    company: PropTypes.string,
    position: PropTypes.string,
    tasks: PropTypes.string,
    workedfrom: PropTypes.string,
    workeduntil: PropTypes.string,
    stateCompany: PropTypes.string,
    statePosition: PropTypes.string,
    stateWorkedFrom: PropTypes.string,
    stateWorkedUntil: PropTypes.string,
    stateTasks: PropTypes.string,
    isSubmitted: PropTypes.bool
}

export default Work;