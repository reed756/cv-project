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
                        onChange={ props.onChange }
                    />
                    
                    <br />
                    <label htmlFor={ props.position }>Position: </label>
                    <input 
                        name={ props.position } 
                        type={ props.text }
                        placeholder={ props.placeholder }
                        value={ props.isSubmitted ? "" : props.statePosition }
                        onChange={ props.onChange }
                    />
                    
                    <br />
                    <label htmlFor={ props.tasks }>Main Tasks: </label>
                    <textarea 
                        name={ props.tasks }
                        type={ props.text }
                        placeholder={ props.placeholder }
                        value={ props.isSubmitted ? "" : props.stateTasks }
                        onChange={ props.onChange }
                    />
                    
                    <br />
                    <label htmlFor={ props.workedfrom }>Date From: </label>
                    <input 
                        name={ props.workedfrom } 
                        type={ props.date }
                        value={ props.isSubmitted ? "" : props.stateWorkedFrom }
                        onChange={ props.onChange }
                    />
                    
                    <br />
                    <label htmlFor={ props.workeduntil }>Date Until: </label>
                    <input 
                        name={ props.workeduntil } 
                        type={ props.date }
                        value={ props.isSubmitted ? "" : props.stateWorkedUntil }
                        onChange={ props.onChange }
                    />
                    
            </div>
        )
}

export default Work;