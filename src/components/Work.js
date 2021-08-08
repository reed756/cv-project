import React from 'react';

class Work extends React.Component {
    render() {
        return (
            <div>
                    <label htmlFor={ this.props.company }>Company Name: 
                        <input 
                            name={ this.props.company } 
                            type={ this.props.text }
                            placeholder={ this.props.placeholder }
                            onChange={ this.props.onChange }
                        />
                    </label>
                    <br />
                    <label htmlFor={ this.props.position }>Position: 
                        <input 
                            name={ this.props.position } 
                            type={ this.props.text }
                            placeholder={ this.props.placeholder }
                            onChange={ this.props.onChange }
                        />
                    </label>
                    <br />
                    <label htmlFor={ this.props.tasks }>Main Tasks: 
                        <textarea 
                            name={ this.props.tasks }
                            type={ this.props.text }
                            placeholder={ this.props.placeholder }
                            onChange={ this.props.onChange }
                        />
                    </label>
                    <br />
                    <label htmlFor={ this.props.workedfrom }>Date From: 
                        <input 
                            name={ this.props.workedfrom } 
                            type={ this.props.date }
                            onChange={ this.props.onChange }
                        />
                    </label>
                    <br />
                    <label htmlFor={ this.props.workeduntil }>Date Until: 
                        <input 
                            name={ this.props.workeduntil } 
                            type={ this.props.date }
                            onChange={ this.props.onChange }
                        />
                    </label>
            </div>
        )
    }
}

export default Work;