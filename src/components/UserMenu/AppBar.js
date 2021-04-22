import { connect } from "react-redux";
import { getIsAuthenticated } from "../../redux/auth/auth-selectors";
import Navigation from "./Navigation";
import UserMenu from "./UserMenu";
import AuthNav from "./AuthNav";

const AppBar = ({ isAuthenticated }) => {
  return (
    <header className="list">
      <Navigation />
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);
