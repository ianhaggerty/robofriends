import React, { Component } from "react";

class ErrorBoundary extends Component {
  render() {
    const { hasError } = this.props;
    if (hasError) {
      return <h1>Ooops. That is not good.</h1>;
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
