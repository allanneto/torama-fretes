import Head from "next/head";

import withPrivateRoute from "../src/hocs/withPrivateRoute";
import withAnalytics from "../src/hocs/withAnalytics";

const Results = () => {
  return <h1>@results</h1>;
};

Results.getInitialProps = async (props) => {
  console.info("Chegou hein");
  return {};
};

export default withPrivateRoute(Results);
