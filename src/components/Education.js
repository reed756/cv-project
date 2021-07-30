import React from 'react';

class Education extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <label htmlFor="school">School: </label>
                    <input id="school" name="school" />
                    <br />
                    <label htmlFor="subject">Subject: </label>
                    <input id="subject" name="subject" />
                    <br />
                    <label htmlFor="date-from">Date From: </label>
                    <input id="date-from" name="date-from" type="date" />
                    <br />
                    <label htmlFor="date-until">Date Until: </label>
                    <input id="date-until" name="date-until" type="date" />
                </form>
            </div>
        )
    }
}

export default Education;