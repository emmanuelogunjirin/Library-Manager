import React from "react";
import homeIndex from "../homeIndex";
import LandingFooter from "../Containers/Landing/LandingFooter";
import LandingPage from "../Containers/Landing/LandingPage";
import LandingHeader from "../Containers/Landing/LandingHeader";

function Index() {
  return (
    <React.Fragment>
      <LandingHeader />
      <LandingPage />
      <LandingFooter />
    </React.Fragment>
  );
}

export default homeIndex(Index);
