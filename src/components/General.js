import React from 'react'
import '../styles/General.css'

function General(props) {
        return (
            <div className="general-box">
                    <label htmlFor={ props.fullname }>Name: </label>
                    <input 
                        name={ props.fullname }
                        type={ props.text }
                        placeholder={ props.placeholder }
                        value={ props.isSubmitted ? "" : props.stateName }
                        onChange={ props.onChange }
                        className="input"
                    />
                    
                    <br />
                    <label htmlFor={ props.email }>Email Address: </label>
                    <input 
                        name={ props.email } 
                        type={ props.email }
                        placeholder={ props.placeholder }
                        value={ props.isSubmitted ? "" : props.stateEmail }
                        onChange={ props.onChange }
                    />
                    
                    <br />
                    <label htmlFor={ props.phone }>Phone Number: </label>
                    <input 
                        name={ props.phone } 
                        type={ props.phone }
                        placeholder={ props.placeholder }
                        value={ props.isSubmitted ? "" : props.statePhone }
                        onChange={ props.onChange }
                    />
                    
            </div>
        )
}

export default General;