import React from "react";
import { connect } from 'react-redux';
import { fetchUsers } from '../actions'

class Users extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { dispatch } = this.props

    dispatch(fetchUsers())
  }

  render() {
    return ()
  }
}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(Users);