import { connect } from "react-redux";
import { toggleUserPopup, userPopupSetData } from "../actions";
import Users from "../components/users";

const mapStateToProps = state => ({
  isLoading: state.page.isLoading,
  users: state.users
});

const mapDispatchToProps = dispatch => ({
  onClickHandler: user => {
    dispatch(
      userPopupSetData({
        id: user.getProp("id"),
        name: user.getProp("name"),
        email: user.getProp("email"),
        city: user.getProp("address.city"),
        phone: user.getProp("phone"),
        website: user.getProp("website"),
        companyName: user.getProp("company.name")
      })
    );
    dispatch(toggleUserPopup(true));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
