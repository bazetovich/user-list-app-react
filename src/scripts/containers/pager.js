import { connect } from "react-redux";
import Pager from "../components/pager";

const mapStateToProps = state => ({
  page: state.page
});

export default connect(mapStateToProps)(Pager);
