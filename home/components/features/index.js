import React, { Component } from 'react';
import cn from 'classnames';
import { NavLink } from 'components/global/link';
import Button from 'components/global/button';
import I18nText from 'libs/i18n/text';
import styles from './styles.css';

export default class FeaturesBlock extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-6">
            <div className={cn(styles.block, styles.webWallet)}>
              <h3><I18nText id="FEATURE_WALLET_TITLE" html /></h3>
              <p><I18nText id="FEATURE_WALLET_TEXT" /></p>
              <a href="/app" target="_blank">
                <Button color="blue"><I18nText id="CREATE_WALLET" /></Button>
              </a>
            </div>
          </div>
          <div className="col-xs-6">
            <div className={cn(styles.block, styles.buyCrypto)}>
              <h3><I18nText id="FEATURE_BUY_TITLE" html /></h3>
              <p><I18nText id="FEATURE_BUY_TEXT" /></p>
              <NavLink to="/buy">
                <Button color="blue"><I18nText id="BUY_CRYPTO" /></Button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
