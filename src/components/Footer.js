import React from "react"
import '../styles/Footer.css'

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <h3>{this.props.footer}</h3>
            </footer>
        )
    }
}

export default Footer