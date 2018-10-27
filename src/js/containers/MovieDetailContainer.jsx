import React from "react";
import { connect } from "react-redux";


class MovieDetailContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const firstTitle = this.props.search[0] && this.props.search[0].Title;
    const plot = this.props.search[0] && this.props.search[0].Plot;
    const year = this.props.search[0] && this.props.search[0].Year;
    const pic = this.props.search[0] && this.props.search[0].Poster;
    const runTime = this.props.search[0] && this.props.search[0].Runtime;
    const genre = this.props.search[0] && this.props.search[0].Genre;
    const awards = this.props.search[0] && this.props.search[0].Awards;
    const imdb = this.props.search[0] && this.props.search[0].imdbRating;
    const meta = this.props.search[0] && this.props.search[0].Metascore;
    
    return (
      
      <div>
        <div className="jumbotron alert-success text-center">
          <h1>Movie Detail Container</h1>
        </div>

        <a href="/#" className="font-weight-bold">Go Back pinche</a>
        <br />
        <div className="row card-deck ">
          <div className="card border-0 flex-fill">
            <div className="card-body text-center">
              <img src={pic} className="rounded" />
            </div>
            {/* within card 1 */}
          </div>
          {/* within col-6 */}

          <br />

          <div className="infoCard card border-success flex-fill">
            <h5 className="card-header border-success text-success alert-success font-weight-bold">
              Movie Details
            </h5>
            <div className="card-body">
              <h4 className="text-left font-weight-bold">{firstTitle}</h4>

              <span className="badge badge-pill badge-success">
                Released {year}
              </span>

              <span className="badge badge-pill badge-success">{runTime}</span>

              <span className="badge badge-pill badge-success">{genre}</span>
              <br />
              <p className="text-left">{plot}</p>
              <p>{awards}</p>
              <br />
              <p className="text-left font-weight-bold">Metascore: {meta}</p>
              <p className="text-left font-weight-bold">IMDB: {imdb}</p>

              {/* card body */}
            </div>
            {/* within card 2 */}
          </div>

          {/* row */}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ search }) {
  console.log("this is:", search);
  return { search }; // es6 // { weather } === { weather: weather }
}

export default connect(mapStateToProps)(MovieDetailContainer);
