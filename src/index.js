import React from "react";
import ReactDOM from "react-dom";

class HelloWorld extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "Saurabh"
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({userName: e.target.value});
  }

  render() {
    return (
      <div>
        <div>Hello {this.state.userName} </div>
        <input
          type="text"
          value={this.state.userName}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

ReactDOM.render(<HelloWorld />, document.getElementById("root"));
