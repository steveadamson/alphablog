import React from "react"
import PropTypes from "prop-types"
class HelloWorld extends React.Component {
  render () {
    return (
      <React.Fragment>
<<<<<<< HEAD
        Message: {this.props.message}
=======
        Greeting: {this.props.greeting}
>>>>>>> 2a8b1d15417c52942326dc44f3b7937e7d2aee00
      </React.Fragment>
    );
  }
}

HelloWorld.propTypes = {
  greeting: PropTypes.string
};
export default HelloWorld
