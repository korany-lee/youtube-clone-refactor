import React from "react";

class Search extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			value: "",
		};
	}

	handleInputChange(e) {
		// this.props.handleSearchInputChange(e.target.value);
		this.setState({
			value: e.target.value,
		});
	}

	handleSearch() {
		this.props.handleSearchInputChange(this.state.value);
	}

	onKeyPress(event) {
		if (event.key === "Enter") {
			this.handleSearch();
		}
	}

	render() {
		return (
			<div className="search-bar form-inline">
				<input
					className="form-control"
					type="text"
					value={this.state.value}
					onChange={this.handleInputChange.bind(this)}
					onKeyPress={this.onKeyPress.bind(this)}
				/>
				<button
					className={this.props.darkMode ? "btn btn-dark" : "btn btn-light"}
					onClick={this.handleSearch.bind(this)}>
					<span className="glyphicon glyphicon-search"></span>
				</button>
			</div>
		);
	}
}

export default Search;
