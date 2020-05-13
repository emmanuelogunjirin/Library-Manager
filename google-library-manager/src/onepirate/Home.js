import withRoot from './modules/withRoot';

import React from 'react';
import HomeFooter from './modules/views/HomeFooter';
import ProductHero from './modules/views/ProductHero';
import HomeHeader from './modules/views/HomeHeader';

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
