import React, { Component } from "react";
import Body from "./Body.jsx";
import Title from "./Title.jsx";
import Text from "./Text.jsx";
class Card extends Component {
  static Body = Body;
  static Title = Title;
  static Text = Text;
  render() {
    return <div className={"card"}>{this.props.children}</div>;
  }
}

export default Card;
