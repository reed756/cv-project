import React from 'react';

class General extends React.Component {
    render() {
        return (
            <div>
                    <label htmlFor={ this.props.fullname }>Name: 
                        <input 
                            name={ this.props.fullname }
                            type={ this.props.text }
                            placeholder={ this.props.placeholder }
                            onChange={this.props.onChange}
                        />
                    </label>
                    <br />
                    <label htmlFor={ this.props.email }>Email Address: 
                        <input 
                            name={ this.props.email } 
                            type={ this.props.email }
                            placeholder={ this.props.placeholder }
                        />
                    </label>
                    <br />
                    <label htmlFor={ this.props.phone }>Phone Number: 
                        <input 
                            name={ this.props.phone } 
                            type={ this.props.phone }
                            placeholder={ this.props.placeholder }
                    />
                    </label>
            </div>
        )
    }
}

export default General;