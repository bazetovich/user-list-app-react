import { connect } from "react-redux";
import Users from "../components/users";

const mapStateToProps = state => ({
  isLoading: state.page.isLoading,
  users: state.page.data.users
});

export default connect(mapStateToProps)(Users);
