import { connect } from "react-redux";
import Pager from "../components/pager";

const mapStateToProps = state => ({
  id: state.page.id
});

export default connect(mapStateToProps)(Pager);
