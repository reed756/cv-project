import React from 'react';

class General extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <label htmlFor="name">Name: </label>
                    <input id="name" name="name" />
                    <br />
                    <label htmlFor="email">Email Address: </label>
                    <input id="email" name="email" />
                    <br />
                    <label htmlFor="phone">Phone Number: </label>
                    <input id="phone" name="phone" />
                </form>
            </div>
        )
    }
}

export default General;