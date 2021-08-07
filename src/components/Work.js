import React from 'react';

class Work extends React.Component {
    render() {
        return (
            <div>
                    <label htmlFor="company">Company Name: </label>
                    <input name="company" />
                    <br />
                    <label htmlFor="position">Position: </label>
                    <input name="position" />
                    <br />
                    <label htmlFor="tasks">Main Tasks: </label>
                    <input name="tasks" />
                    <br />
                    <label htmlFor="date-from">Date From: </label>
                    <input name="date-from" type="date-from" />
                    <br />
                    <label htmlFor="date-until">Date Until: </label>
                    <input name="date-until" type="date-from" />
            </div>
        )
    }
}

export default Work;