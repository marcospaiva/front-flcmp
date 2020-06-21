import React from 'react'

// Phrase is a normal component that recieve a app state as a prop.
class Phrase extends React.Component{
    render() {
        return(
            <h1>
                {this.props.phrase}
            </h1>
        )
    }
}

export default Phrase