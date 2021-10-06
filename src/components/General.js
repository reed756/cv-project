import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

function General(props) {
    const GeneralDiv = styled.div`
        margin-bottom: 10px;
        margin-top: 100px;
        @media only screen and (max-width: 1200px) {
            display: block;
        }
    `
    const GeneralInput = styled.input`
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
    const GeneralLabel = styled.label`
        display: inline-block;
        width: 200px;
        margin: 0;
        padding: 0;
        font-size: 20px;
    `
        return (
            <GeneralDiv className="general-box">
                    <GeneralLabel htmlFor={ props.fullname }>Name: </GeneralLabel>
                    <GeneralInput 
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
                    <GeneralLabel htmlFor={ props.email }>Email Address: </GeneralLabel>
                    <GeneralInput 
                        name={ props.email } 
                        type={ props.email }
                        placeholder={ props.placeholder }
                        value={ props.isSubmitted ? "" : props.stateEmail }
                        onChange={ (event) => {
                            props.changeEmail(event.target.value)
                        } }
                    />
                    
                    <br />
                    <GeneralLabel htmlFor={ props.phone }>Phone Number: </GeneralLabel>
                    <GeneralInput 
                        name={ props.phone } 
                        type={ props.phone }
                        placeholder={ props.placeholder }
                        value={ props.isSubmitted ? "" : props.statePhone }
                        onChange={ (event) => {
                            props.changePhone(event.target.value)
                        } }
                    />
            </GeneralDiv>
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