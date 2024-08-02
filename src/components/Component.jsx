import React from "react";

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      log: [],
    };
  }

  handleIncrement = () => {
    const { log } = this.state;
    const newValue = log.length > 0 ? log[0] + 1 : 1;
    this.setState({ log: [newValue, ...log] });
  };

  handleDecrement = () => {
    const { log } = this.state;
    const newValue = log.length > 0 ? log[0] - 1 : -1;
    this.setState({ log: [newValue, ...log] });
  };

  handleRemove = (index) => {
    const { log } = this.state;
    const updatedLog = log.filter((_, i) => i !== index);
    this.setState({ log: updatedLog });
  };

  render() {
    const { log } = this.state;

    return (
      <div>
        <div className="btn-group font-monospace" role="group">
          <button
            type="button"
            className="btn btn-outline-success"
            onClick={this.handleIncrement}
          >
            +
          </button>
          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={this.handleDecrement}
          >
            -
          </button>
        </div>
        <div>
          {log.map((value, index) => (
            <div key={index}>
              <button
                className="list-group-item list-group-item-action"
                onClick={() => this.handleRemove(index)}
              >
                Remove
              </button>
              {value}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Component;
