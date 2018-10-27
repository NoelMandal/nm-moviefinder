import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchData } from "../actions";
import MovieSearchList from "../components/MovieList";

class MovieSearchContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ""
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ title: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.dispatch(fetchData(this.state.title));
    this.setState({ title: "" });
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron alert-success">
          <h1 className="text-center">Movie Finder App</h1>
        </div>
        <form onSubmit={this.onFormSubmit} className="input-group">
          <input
            type="text"
            className="form-control border-secondary"
            placeholder="Enter Movie Title"
            value={this.state.title}
            onChange={this.onInputChange}
          />
          <span className="input-group-append">
          <button type="submit" className="btn btn-outline-secondary">
            IKUZO!
          </button>
          </span>
        </form>
        <br />
        <div>
         <MovieSearchList />
        </div>
      </div>
    );
  }
}

export default connect(null)(MovieSearchContainer);
