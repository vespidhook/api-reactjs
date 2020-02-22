import axios from "axios";

const baseURL = "https://swapi.co/api";

class swapi {
  constructor(http = axios) {
    this.http = http;
  }

  getPlanetCount() {
    return new Promise(resolve => {
      let url = `${baseURL}/planets`;
      this.http
        .get(url)
        .then(resp => {
          resolve(resp.data.count);
        })
        .catch(err => {
          console.error(`swapi getPlanetCount failed with: ${err}`);
        });
    });
  }

  getPlanet(id) {
    return new Promise(resolve => {
      let url = `${baseURL}/planets/${id}`;
      this.http
        .get(url)
        .then(resp => {
          resolve(resp.data);
        })
        .catch(err => {
          console.error(`swapi getPlanet failed with: ${err}`);
        });
    });
  }
}

export default swapi;
