import homeIndex from '../homeIndex';

import React from 'react';
import HomeFooter from '../Containers/Homepage/HomeFooter';
import HomePage from '../Containers/Homepage/HomePage';
import HomeHeader from '../Containers/Homepage/HomeHeader';

function Index() {
  return (
    <React.Fragment>
      <HomeHeader />
      <HomePage />
      <HomeFooter />
    </React.Fragment>
  );
}

export default homeIndex(Index);
