import { connect } from "react-redux";
import Menu from "../components/menu";
import { loadPage } from "../actions";

const mapStateToProps = state => ({
  page: state.page.id
});

const mapDispatchToProps = dispatch => ({
  onChange: id => {
    dispatch(loadPage(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
