import { connect } from "react-redux";
import Menu from "../components/menu";
import { loadPage } from "../actions";

const mapStateToProps = state => ({
  page: state.page
});

const mapDispatchToProps = dispatch => ({
  onChange: page => dispatch(loadPage(page))
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
