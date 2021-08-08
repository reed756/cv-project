import React from 'react';

class Education extends React.Component {


    render() {
        return (
            <div className="education-box">
                    <label htmlFor={ this.props.school }>School: 
                        <input 
                            name={ this.props.school }
                            type={ this.props.text }
                            placeholder={ this.props.placeholder }
                            onChange={ this.props.onChange }
                        />
                    </label>
                    <br />
                    <label htmlFor={ this.props.subject }>Subject: 
                        <input 
                            name={ this.props.subject }
                            type={ this.props.text }
                            placeholder={ this.props.placeholder }
                            onChange={ this.props.onChange }
                        />
                    </label>
                    <br />
                    <label htmlFor={ this.props.studiedfrom }>Date From: 
                        <input 
                            name={ this.props.studiedfrom } 
                            type={ this.props.date }
                            onChange={ this.props.onChange }
                        />
                    </label>
                    <br />
                    <label htmlFor={ this.props.studieduntil }>Date Until: 
                        <input 
                            name={ this.props.studieduntil } 
                            type={ this.props.date }
                            onChange={ this.props.onChange }
                        />
                    </label>
            </div>
        )
    }
}

export default Education;