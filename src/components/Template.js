import { render } from '@testing-library/react'
import React from 'react'

class Template extends React.Component {
    render() {
        return (
        <div className="template">
                  <p>{this.props.fullname}</p>
                  <p>{this.props.email}</p>
                  <p>{this.props.phone}</p>
        </div>
        )
    }
}

export default Template