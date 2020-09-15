import React, { Component } from 'react';

class RockCounter extends Component {

  state = {
    rockCount: 0
  }

  onIncrease = () => {
    this.setState({
      rockCount: this.state.rockCount + 1
    });
  }

  onDecrease = () => {
    this.setState({
      rockCount: this.state.rockCount - 1
    });
  }

  onReset = () => {
    this.setState({
      rockCount: 0
    });
  }
//---------------------------------------------------------------------
  render() {
    return (
      <div>
          <div>
              Rocks Picked: {this.state.rockCount}
          </div>
          <div>
            <button onClick={this.onIncrease}>Increase</button>
            <button onClick={this.onDecrease}>Decrease</button>
            <button onClick={this.onReset}>Reset</button>
          </div>
      </div>
    );
  }
}

export default RockCounter;
