import React, { Component } from "react";
import { connect } from "react-redux";


class MovieSearchList extends Component {
  // renderSearch(searchData) {
  //   const names = searchData.Title;
  //   const plots = searchData.Plot;
  //   const years = searchData.Year;
  //   const pics = searchData.Poster;

  //   return (
  //     <div key={names} className="searchCards card">
  //       <div className="card-body">
  //         <img
  //           src={pics}
  //           className="thumb rounded float-left "
            
  //         />
  //         <h5 className="card-title">{names}</h5>
  //         <h6 className="card-title">{years}</h6>
  //         <p className="card-text">
  //           {plots}
  //         </p>
  //         <a href={`#/movie/${names}`} className="btn btn-success justify-right">
  //           More Info
  //         </a>
  //       </div>
  //     </div>
      
  //   );
  // }

  render() {
    const firstTitle = this.props.search[0] && this.props.search[0].Title;
    const plot = this.props.search[0] && this.props.search[0].Plot;
    const year = this.props.search[0] && this.props.search[0].Year;
    const pic = this.props.search[0] && this.props.search[0].Poster;
    if (!this.props.search[0]) {return null};

    return (
      // <div>
      //   {this.props.search[0].Search.map(this.renderSearch)}
      // </div>
      <div className="card">
        <div className="card-body">
          <img
            src={pic}
            className="thumb rounded float-left "
            
          />
          <h5 className="card-title">{firstTitle}</h5>
          <h6 className="card-title">{year}</h6>
          <p className="card-text">
            {plot}
          </p>
          <a href={`#/movie/${firstTitle}`} className="btn btn-success justify-right">
            More Info
          </a>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ search }) {
  return { search }; // es6 // { weather } === { weather: weather }
}

export default connect(mapStateToProps)(MovieSearchList);

