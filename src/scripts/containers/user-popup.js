import { connect } from "react-redux";
import { loadPage } from "../actions";
import UserPopup from "../components/user-popup";

const mapStateToProps = state => ({
  id: state.page.id
});

const mapDispatchToProps = dispatch => ({
  onChange: id => {
    dispatch(loadPage(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPopup);
