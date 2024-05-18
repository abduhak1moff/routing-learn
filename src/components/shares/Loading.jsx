import React, { Component } from "react";
import { RotatingLines } from "react-loader-spinner";

export class Loading extends Component {
  render() {
    return (
      <div className="d-flex align-items-center justify-content-center min-vh-100">
        <RotatingLines
          visible={true}
          height="100"
          width="100"
          color="#007bff" // Changed to primary color
          strokeWidth="5"
          animationDuration="1"
          ariaLabel="rotating-lines-loading"
          wrapperStyle={{ color: "#007bff" }} // Ensuring wrapper color matches
          wrapperClass=""
        />
      </div>
    );
  }
}

export default Loading;
