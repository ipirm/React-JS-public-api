import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { withI18N } from 'libs/i18n';
import DocumentMeta from 'react-document-meta';
import Header from 'components/specific/header';
import LatestNews from 'components/specific/latest-news';
import Footer from 'components/specific/footer';
import Description from './components/description';
import Poster from './components/poster';
import Slider from './components/slider';
import PromoBlock from './components/promo';
import TableCrypto from './components/table-crypto';
import devices from './devices';
import meta from './meta';

class HardwareDevicesPage extends Component {
  static propTypes = {
    i18n: PropTypes.object,
  }

  render() {
    return (
      <DocumentMeta extend {...meta(this.props.i18n)}>
        <Fragment>
          <Header />
          <Poster />
          <Description />
          <Slider list={devices} />
          <PromoBlock />
          <TableCrypto list={devices} />
          <LatestNews />
          <Footer />
        </Fragment>
      </DocumentMeta>
    );
  }
}

export default withI18N(HardwareDevicesPage);
