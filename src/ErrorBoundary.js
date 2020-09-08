import React from "react";
import { Link } from "react-router-dom";
export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <h3>
          There was an error with this listing.
          <Link to="/">Click here </Link>
          to go back to the home page or wait five seconds.
        </h3>
      );
    }

    return this.props.children;
  }
}
