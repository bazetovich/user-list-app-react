import { connect } from "react-redux";
import Menu from "../components/menu";

const mapStateToProps = state => ({
  page: state.page
});

const mapDispatchToProps = dispatch => ({
  onChange: value => dispatch()
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
