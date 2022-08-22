import React, { Component } from "react";
import User from "./components/Users";
import data from './data.json'
import './App.css'
class App extends Component {
  constructor() {
      super();
      this.state = { data: data };
  }
  handleDelete = () => {
      this.setState({ data: [] });
  };
  handleImport = () => {
      this.setState({ data });
  };
  render() {
      return (
          <div className="app-container">
              <h1>Class List</h1>
              <button onClick={this.handleDelete}>
                  Delete
              </button>
              <button onClick={this.handleImport}>
                  Import Data
              </button>
              <div>
                  {this.state.data.length === 0 ? (
                      <h2>Class list emty</h2>
                  ) : (
                      this.state.data.map((item, idx) => (
                          <User
                              key={idx}
                              name={item.name}
                              age={item.age}
                              avatar={item.avatar}
                              country={item.country}
                          />
                      ))
                  )}
              </div>
          </div>
      );
  }
}

export default App;
