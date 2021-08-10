import React from 'react'
import '../styles/Work.css'

class Work extends React.Component {
    render() {
        return (
            <div className="work-box">
                    <label htmlFor={ this.props.company }>Company Name: </label>
                    <input 
                        name={ this.props.company } 
                        type={ this.props.text }
                        placeholder={ this.props.placeholder }
                        value={ this.props.isSubmitted ? "" : this.props.stateCompany }
                        onChange={ this.props.onChange }
                    />
                    
                    <br />
                    <label htmlFor={ this.props.position }>Position: </label>
                    <input 
                        name={ this.props.position } 
                        type={ this.props.text }
                        placeholder={ this.props.placeholder }
                        value={ this.props.isSubmitted ? "" : this.props.statePosition }
                        onChange={ this.props.onChange }
                    />
                    
                    <br />
                    <label htmlFor={ this.props.tasks }>Main Tasks: </label>
                    <textarea 
                        name={ this.props.tasks }
                        type={ this.props.text }
                        placeholder={ this.props.placeholder }
                        value={ this.props.isSubmitted ? "" : this.props.stateTasks }
                        onChange={ this.props.onChange }
                    />
                    
                    <br />
                    <label htmlFor={ this.props.workedfrom }>Date From: </label>
                    <input 
                        name={ this.props.workedfrom } 
                        type={ this.props.date }
                        value={ this.props.isSubmitted ? "" : this.props.stateWorkedFrom }
                        onChange={ this.props.onChange }
                    />
                    
                    <br />
                    <label htmlFor={ this.props.workeduntil }>Date Until: </label>
                    <input 
                        name={ this.props.workeduntil } 
                        type={ this.props.date }
                        value={ this.props.isSubmitted ? "" : this.props.stateWorkedUntil }
                        onChange={ this.props.onChange }
                    />
                    
            </div>
        )
    }
}

export default Work;