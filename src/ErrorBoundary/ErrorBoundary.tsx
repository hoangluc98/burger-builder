import React, { Component } from 'react';

type ErrorProps = {
  children: React.ReactNode;
};

type ErrorState = {
  hasError: boolean;
  errorMessage: Error | string;
};

class ErrorBoundary extends Component<ErrorProps, ErrorState> {
  state = {
    hasError: false,
    errorMessage: ''
  };

  componentDidCatch = (error: Error) => {
    this.setState({ hasError: true, errorMessage: error });
  };

  render() {
    if (this.state.hasError) {
      return <h1>{this.state.errorMessage}</h1>;
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
