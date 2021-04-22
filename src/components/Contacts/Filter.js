import { connect } from "react-redux";
import * as action from "../../redux/contacts/contacts-action";
import * as selectors from "../../redux/contacts/contacts-selectors";

const Filter = ({ onChange, filter }) => {
  return (
    <>
      <p>Find contact by name</p>
      <label>
        <input
          type="text"
          value={filter}
          onChange={onChange}
          placeholder="Enter name to find"
        />
      </label>
    </>
  );
};

const mapStateToProps = (state) => ({
  filter: selectors.getFilter(state),
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => dispatch(action.changeFilter(e.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
