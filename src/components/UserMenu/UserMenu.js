import { connect } from "react-redux";
import { logOut } from "../../redux/auth/auth-operation";
import { getUserName, getUserMail } from "../../redux/auth/auth-selectors";

const UserMenu = ({ name, email, onLogout }) => {
  return (
    <div className="userMenu">
      <div className="user-data">
        <span>Welcome, {name}</span>
        <span>E-mail: {email}</span>
      </div>
      <button type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  name: getUserName(state),
  email: getUserMail(state),
});

const mapDispatchToProps = {
  onLogout: logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
