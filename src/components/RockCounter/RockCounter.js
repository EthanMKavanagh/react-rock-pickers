import React, { Component } from 'react';

class RockCounter extends Component {

  state = {
    rockCount: 45,
    status: ''
  }

  onIncrease = () => {
    console.log('this.state.rockCount = ', this.state.rockCount);
    if (this.state.rockCount < 49){
      this.setState({
        rockCount: this.state.rockCount + 1
      });
    }
    else{
      this.setState({
        rockCount: this.state.rockCount + 1,
        status: 'DONE'
      });
    }
  }

  onDecrease = () => {
    if (this.state.rockCount > 0) {
      this.setState({
        rockCount: this.state.rockCount - 1
      });
    }
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
              Rocks Picked: {this.state.rockCount} {this.state.status}
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
