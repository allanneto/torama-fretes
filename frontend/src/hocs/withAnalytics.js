import React, { Component } from "react";
import ReactGA from "react-ga";

export default () => (Composed) =>
  class extends Component {
    static async getInitialProps(ctx) {
      const pageProps =
        Composed.getInitialProps && (await Composed.getInitialProps(ctx));
      return { ...pageProps };
    }

    componentDidMount() {
      ReactGA.initialize("ID_ANALYTICS");
      ReactGA.pageview(window.location.pathname);
    }

    render() {
      return <Composed {...this.props} />;
    }
  };
