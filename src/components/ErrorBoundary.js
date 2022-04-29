import React from "react"

/**
 * This catches component problems in production. During dev the errors still show
 */
class ErrorBoundary extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) {
        this.setState({hasError: true})
    }

    render(){
        if(this.state.hasError){
            return <h1>Uh oh! Error encountered</h1>
        }
        else{
            return this.props.children
        }
    }
}

export default ErrorBoundary