import React from 'react'
import PropTypes from 'prop-types'

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
                        onChange={ (event) => {
                            props.changeName(event.target.value)
                        } }
                        className="input"
                    />
                    
                    <br />
                    <label htmlFor={ props.email }>Email Address: </label>
                    <input 
                        name={ props.email } 
                        type={ props.email }
                        placeholder={ props.placeholder }
                        value={ props.isSubmitted ? "" : props.stateEmail }
                        onChange={ (event) => {
                            props.changeEmail(event.target.value)
                        } }
                    />
                    
                    <br />
                    <label htmlFor={ props.phone }>Phone Number: </label>
                    <input 
                        name={ props.phone } 
                        type={ props.phone }
                        placeholder={ props.placeholder }
                        value={ props.isSubmitted ? "" : props.statePhone }
                        onChange={ (event) => {
                            props.changePhone(event.target.value)
                        } }
                    />
                    
            </div>
        )
}

General.propTypes = {
    stateName: PropTypes.string,
    fullname: PropTypes.string,
    stateEmail: PropTypes.string,
    email: PropTypes.string,
    statePhone: PropTypes.string,
    phone: PropTypes.string,
    isSubmitted: PropTypes.bool
};

export default General;