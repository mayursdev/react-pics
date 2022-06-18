import React, { Component } from "react";

export default class Image extends Component {

  state = {
    spans: 0,
  };
  imgRef = React.createRef();

  componentDidMount() {
    this.imgRef.current.addEventListener("load", this.setSpan);
  }

  setSpan = () => {
    const {
      current: { clientHeight: height },
    } = this.imgRef;

    const spans = Math.ceil(height / 100);
    this.setState({ spans });
  };

  render() {
    const {
      alt_description: alt,
      urls: { regular },
    } = this.props.image;

    return (
      <img
        style={{ gridRowEnd: `span ${this.state.spans}` }}
        ref={this.imgRef}
        src={regular}
        alt={alt}
      />
    );
  }
}
