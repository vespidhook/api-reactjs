import React, { Component } from "react";
import "./styles.css";

class View extends Component {
  render() {
    let dataView =
      this.props.dataState !== "pending" ? (
        <div>
          <div className="name">
            <h1>{this.props.data.name}</h1>
          </div>
          <div className="body">
            <h3>Population: {this.props.data.population}</h3>
            <h3>Climate: {this.props.data.climate}</h3>
            <h3>Terrain: {this.props.data.terrain}</h3>
            <h3>Feature in {this.props.data.films.length} FILMS</h3>
          </div>
        </div>
      ) : (
        <div data-test-loading className="flex-row inline-center">
          <h1>loading...</h1>
        </div>
      );

    return (
      <div className="flex-column inline-center cross-center">
        <div className="view">{dataView}</div>
        <button data-test-next-button onClick={this.props.nextPlanet}>
          Next
        </button>
      </div>
    );
  }
}

export default View;
