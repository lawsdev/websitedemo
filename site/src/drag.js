import React, { Component } from 'react';
 
class Click extends Component {
  constructor(props) {
    super(props);
    this.state = {
            message: "Mouse Event"
        }
  }
 
  handleEvent = (event) => {
   if (event.type === "mousedown") {
          this.setState({ message: "Mouse Down"});
      } else {
          this.setState({ message: "Mouse Up"});
      }
  }
 
  render() {
    return (
      <div>
      <div className="h4 bg-secondary text-white text-center p-2">
          { this.state.message }
      </div>
        <div className="text-center">
          <button className="btn btn-secondary" onMouseDown={ this.handleEvent } onMouseUp={ this.handleEvent } >
           Change Image
          </button>
        </div>
      </div>
    );
  }
}
 
export default Click;