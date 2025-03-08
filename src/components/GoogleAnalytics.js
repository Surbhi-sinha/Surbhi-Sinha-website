import React, { useEffect } from "react";
import ReactGA from "react-ga4";

const TRACKING_ID = "G-YE6YVPB81T"; // Replace with your actual ID
ReactGA.initialize(TRACKING_ID);

const GoogleAnalytics = () => {
  useEffect(() => {
   ReactGA.send({ hitType: "pageview", page: window.location.pathname });
   console.log("GA Pageview Sent:", window.location.pathname);
  }, []);

  return null;
};

export default GoogleAnalytics;
