import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { withI18N } from 'libs/i18n';
import DocumentMeta from 'react-document-meta';
import Header from 'components/specific/header';
import FounderReview from 'components/specific/founder-review';
import PressIcons from 'components/specific/press-icons';
import LatestNews from 'components/specific/latest-news';
import Reviews from 'components/specific/reviews';
import Footer from 'components/specific/footer';
import Poster from './components/poster';
import WalletSlider from './components/slider';
import FeaturesBlock from './components/features';
import meta from './meta';

class HomePage extends Component {
  static propTypes = {
    i18n: PropTypes.object,
  };

  render() {
    return (
      <DocumentMeta extend {...meta(this.props.i18n)}>
        <Fragment>
          <Header />
          <Poster />
          <PressIcons />
          <FeaturesBlock />
          <WalletSlider simple />
          <Reviews />
          <FounderReview />
          <LatestNews />
          <Footer />
        </Fragment>
      </DocumentMeta>
    );
  }
}

export default withI18N(HomePage);
