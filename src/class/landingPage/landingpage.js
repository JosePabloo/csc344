import React, { Component } from "react";

import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  
});

class LandingPage extends Component {
  render() {
    let intro = (
      <div>
        <h2> Welcome to your new app. Please create and account.</h2>
        <h3> If you have already created an account, please sign in.</h3>
      </div>
    );

    return (
      <React.Fragment>
        <div align="center">{intro}</div>
      </React.Fragment>
    );
  }
}

LandingPage.defaultProps = {
  signedIn: false
};

LandingPage.propTypes = {
  // Styling
  classes: PropTypes.object.isRequired,

  // Properties
  signedIn: PropTypes.bool.isRequired
};

export default withStyles(styles)(LandingPage);
