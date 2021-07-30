import React from 'react';

class General extends React.Component {
    render() {
        return (
            <div>
                    <label htmlFor="name">Name: </label>
                    <input id="name" name="name"/>
                    <br />
                    <label htmlFor="email">Email Address: </label>
                    <input id="email" name="email" type="email"/>
                    <br />
                    <label htmlFor="phone">Phone Number: </label>
                    <input id="phone" name="phone" type="number"/>
            </div>
        )
    }
}

export default General;