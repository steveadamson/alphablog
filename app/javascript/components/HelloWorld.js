import React from "react"
import PropTypes from "prop-types"

class HelloWorld extends React.Component {
  render () {
    return (
      <React.Fragment>
        Message: {this.props.message}
       </React.Fragment>
    );
  }
}

HelloWorld.propTypes = {
  message: PropTypes.string
};

export default HelloWorld
