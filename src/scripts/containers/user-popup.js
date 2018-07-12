import { connect } from "react-redux";
import { updateUser, toggleUserPopup, userPopupEditData } from "../actions";
import UserPopup from "../components/user-popup";

const mapStateToProps = state => ({
  active: state.userPopup.active,
  data: state.userPopup.data
});

const mapDispatchToProps = dispatch => ({
  handleChange: name => event => {
    dispatch(userPopupEditData(name, event.target.value));
  },
  handleClose: () => {
    dispatch(toggleUserPopup(false));
  },
  handleSubmit: data => {
    dispatch(updateUser(data.id, data));
    dispatch(toggleUserPopup(false));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPopup);
