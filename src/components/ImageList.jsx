import React, { Component } from "react";
import Image from "./Image";

export default class ImageList extends Component {
  render() {
    const { images } = this.props;
    console.log(images);
    return (
      <div className="image-list">
        {images.map((img) => (
          <Image key={img.id} image={img} />
        ))}
      </div>
    );
  }
}
