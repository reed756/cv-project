import React from 'react';

class Work extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <label htmlFor="company">Company Name: </label>
                    <input id="company" name="company" />
                    <br />
                    <label htmlFor="position">Position: </label>
                    <input id="position" name="position" />
                    <br />
                    <label htmlFor="tasks">Main Tasks: </label>
                    <input id="tasks" name="tasks" />
                    <br />
                    <label htmlFor="date-from">Date From: </label>
                    <input id="date-from" name="date-from" type="date-from" />
                    <br />
                    <label htmlFor="date-until">Date Until: </label>
                    <input id="date-until" name="date-until" type="date-from" />
                </form>
            </div>
        )
    }
}

export default Work;