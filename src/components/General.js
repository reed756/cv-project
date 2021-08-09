import React from 'react';

class General extends React.Component {
    render() {
        return (
            <div className="general-box">
                    <label htmlFor={ this.props.fullname }>Name: </label>
                    <input 
                        name={ this.props.fullname }
                        type={ this.props.text }
                        placeholder={ this.props.placeholder }
                        onChange={ this.props.onChange }
                    />
                    
                    <br />
                    <label htmlFor={ this.props.email }>Email Address: </label>
                    <input 
                        name={ this.props.email } 
                        type={ this.props.email }
                        placeholder={ this.props.placeholder }
                        onChange={ this.props.onChange }
                    />
                    
                    <br />
                    <label htmlFor={ this.props.phone }>Phone Number: </label>
                    <input 
                        name={ this.props.phone } 
                        type={ this.props.phone }
                        placeholder={ this.props.placeholder }
                        onChange={ this.props.onChange }
                    />
                    
            </div>
        )
    }
}

export default General;