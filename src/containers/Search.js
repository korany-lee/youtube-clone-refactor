import React from "react";
import { connect } from "react-redux";
import { thunkedSearch } from "../actions";

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ""
    };
  }

  handleInputChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  handleSearch() {
    this.props.dispatch(/* TODO: 여기에서 액션을 실행합니다 */);
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input
          className="form-control"
          type="text"
          value={this.state.value}
          onChange={this.handleInputChange.bind(this)}
        />
        <button
          className={this.props.darkMode ? "btn btn-dark" : "btn btn-light"}
          onClick={this.handleSearch.bind(this)}
        >
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    );
  }
}

export default connect()(Search);
