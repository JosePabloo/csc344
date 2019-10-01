import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import BottomBar from '../admin/bottomBar'

const styles = theme => ({
  
});

class Dashboard extends Component {
  render() {
    let intro = (
      <div>
        <h2> Welcome to the Dashboard page</h2>
      </div>
    );

    return (
      <React.Fragment>
        <div align="center">{intro}</div>
        <BottomBar />
      </React.Fragment>
    );
  }
}

Dashboard.defaultProps = {
  signedIn: false
};

Dashboard.propTypes = {
  // Styling
  classes: PropTypes.object.isRequired,

  // Properties
  signedIn: PropTypes.bool.isRequired
};

export default withStyles(styles)(Dashboard);