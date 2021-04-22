import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { getIsAuthenticated } from "../../redux/auth/auth-selectors";

const Navigation = ({ isAuthenticated }) => {
  return (
    <ul className="navigation">
      <li>
        <NavLink
          exact
          className="navLink"
          activeClassName="navLink--active"
          to="/"
        >
          Home
        </NavLink>
      </li>
      {isAuthenticated && (
        <li>
          <NavLink
            exact
            className="navLink"
            activeClassName="navLink--active"
            to="/contacts"
          >
            Contacts{" "}
          </NavLink>
        </li>
      )}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
