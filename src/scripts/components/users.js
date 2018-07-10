import React from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions";
import Grid from "@material-ui/core/Grid";
import Loader from "@material-ui/core/CircularProgress";
import User from "./user";

class Users extends React.Component {
  constructor(props) {
    super(props);

    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler() {
    const { dispatch } = this.props;

    dispatch(fetchUsers());
  }

  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(fetchUsers());
  }

  render() {
    const { isLoading, users } = this.props;

    if (isLoading) {
      return <Loader />;
    }

    return (
      <Grid container spacing={24}>
        {users.map((user, i) => (
          <User key={i} data={user} onClick={this.onClickHandler} />
        ))}
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoading: state.isLoading,
    users: state.users
  };
}

export default connect(mapStateToProps)(Users);
