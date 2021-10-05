import React from 'react'
import PropTypes from 'prop-types'

import '../styles/Work.css'

function Work(props) {
        return (
            <div className="work-box">
                    <label htmlFor={ props.company }>Company Name: </label>
                    <input 
                        name={ props.company } 
                        type={ props.text }
                        placeholder={ props.placeholder }
                        value={ props.isSubmitted ? "" : props.stateCompany }
                        onChange={ (event) => {
                            props.changeCompany(event.target.value)
                        } }
                    />
                    
                    <br />
                    <label htmlFor={ props.position }>Position: </label>
                    <input 
                        name={ props.position } 
                        type={ props.text }
                        placeholder={ props.placeholder }
                        value={ props.isSubmitted ? "" : props.statePosition }
                        onChange={ (event) => {
                            props.changePosition(event.target.value)
                        } }
                    />
                    
                    <br />
                    <label htmlFor={ props.tasks }>Main Tasks: </label>
                    <textarea 
                        name={ props.tasks }
                        type={ props.text }
                        placeholder={ props.placeholder }
                        value={ props.isSubmitted ? "" : props.stateTasks }
                        onChange={ (event) => {
                            props.changeTasks(event.target.value)
                        } }
                    />
                    
                    <br />
                    <label htmlFor={ props.workedfrom }>Date From: </label>
                    <input 
                        name={ props.workedfrom } 
                        type={ props.date }
                        value={ props.isSubmitted ? "" : props.stateWorkedFrom }
                        onChange={ (event) => {
                            props.changeWorkedFrom(event.target.value)
                        } }
                    />
                    
                    <br />
                    <label htmlFor={ props.workeduntil }>Date Until: </label>
                    <input 
                        name={ props.workeduntil } 
                        type={ props.date }
                        value={ props.isSubmitted ? "" : props.stateWorkedUntil }
                        onChange={ (event) => {
                            props.changeWorkedUntil(event.target.value)
                        } }
                    />
                    
            </div>
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