import React, { useEffect } from "react";
import Router from "next/router";

const results = "/results"; // Define your results route address.

const checkUserAuthentication = () => {
  return { auth: false }; // change null to { isAdmin: true } for test it.
};

export default (WrappedComponent) => {
  useEffect(() => {
    const user = localStorage.getItem("user");
  }, []);

  const hocComponent = ({ ...props }) => <WrappedComponent {...props} />;

  hocComponent.getInitialProps = async ({ res }) => {
    const userAuth = await checkUserAuthentication();

    // Are you an authorized user or not?
    if (!userAuth?.auth) {
      // Handle server-side and client-side rendering.
      if (res) {
        res.writeHead(302, {
          Location: results,
        });
        res.end();
      } else {
        Router.replace("/");
      }
    } else if (WrappedComponent.getInitialProps) {
      const wrappedProps = await WrappedComponent.getInitialProps(userAuth);
      return { ...wrappedProps, userAuth };
    }

    return { userAuth };
  };

  return hocComponent;
};
