import React, { Component } from "react";
import swapi from "../../swapi/swapi";
import View from "../View";
import logo from "../../assets/logo.png";
import Emoji from "react-emoji-render";
import "./styles.css";

class Page extends Component {
  constructor(props) {
    super(props);
    this.swapi = new swapi();
    this.planetIds = [];
    this.state = {
      planetData: {
        name: null,
        population: null,
        climate: null,
        terrain: null,
        films: []
      },
      dataState: "pending"
    };
    this.nextPlanet = this.nextPlanet.bind(this);
  }

  async componentDidMount() {
    let planetCount = await this.swapi.getPlanetCount();
    this.planetIds = [...Array(planetCount).keys()].map(x => x + 1);
    await this.nextPlanet();
  }

  async nextPlanet() {
    this.setState({ dataState: "pending" });
    let id = this.planetIds[Math.floor(Math.random() * this.planetIds.length)];

    this.planetIds = this.planetIds.filter(x => x !== id);
    let planetData = await this.swapi.getPlanet(id);
    this.setState({
      planetData: planetData,
      dataState: "completed"
    });
  }

  render() {
    return (
      <>
        <div className="flex-column inline-center cross-center">
          <h1>
            <img src={logo} alt="Starwars" />
          </h1>
          <View
            dataState={this.state.dataState}
            data={this.state.planetData}
            nextPlanet={this.nextPlanet}
          />
        </div>
        <div className="push">
          <footer className="footer">
            <Emoji text="With ❤️ Bruno | Star Wars" />
          </footer>
        </div>
      </>
    );
  }
}

export default Page;
