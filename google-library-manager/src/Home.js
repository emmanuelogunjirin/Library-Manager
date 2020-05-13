import withRoot from './modules/withRoot';

import React from 'react';
import HomeFooter from './modules/HomepageItems/HomeFooter';
import ProductHero from './modules/HomepageItems/HomePage';
import HomeHeader from './modules/HomepageItems/HomeHeader';

function Index() {
  return (
    <React.Fragment>
      <HomeHeader />
      <ProductHero />
      <HomeFooter />
    </React.Fragment>
  );
}

export default withRoot(Index);
