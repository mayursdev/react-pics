import React, { Component } from "react";
import api from "../api/unsplash";
import ImageList from "./ImageList";
import SearchInput from "./SearchInput";

// import json from "../api/sample_response.json";

class App extends Component {
  state = {
    images: [],
  };
  onSubmit = async (searchTerm) => {
    const resp = await api.get("/search/photos", {
      params: { query: searchTerm, per_page: 30 },
    });
    this.setState({ images: resp.data.results });

    // for testing
    // this.setState({ images: json });
  };

  render() {
    return (
      <div className="app ui container" style={{ marginTop: "10px" }}>
        <SearchInput onSubmit={this.onSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
