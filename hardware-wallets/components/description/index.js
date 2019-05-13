import React from 'react';
import { I18nText } from 'libs/i18n';
import cn from 'classnames';
import styles from './styles.css';

import IconSecure from './icon-secure.svg';
import IconPrivacy from './icon-privacy.svg';
import IconDisplay from './icon-display.svg';
import IconCrypto from './icon-crypto.svg';

export default () => (
  <div className="container">
    <div className={cn('row', styles.wrapper)}>
      <div className="col-xs-5 col-xs-offset-1">
        <h2 className={styles.title}><I18nText id="HARDWARE_WALLETS" /></h2>
        <p className={styles.text}>
          <I18nText id="HW_DESC_TEXT_1" />
        </p>
        <p className={styles.text}>
          <I18nText id="HW_DESC_TEXT_2" />
        </p>
      </div>
      <div className={cn('col-xs-6', styles.grid)}>
        <div className={styles.wrapperGrid}>
          <div>
            <img src={IconPrivacy} alt="Privacy" />
            <h3><I18nText id="PRIVACY" /></h3>
            <p><I18nText id="HW_DESC_TEXT_ICON_1" /></p>
          </div>
          <div>
            <img src={IconDisplay} alt="Built-in display" />
            <h3><I18nText id="BUILT_IN_DISPLAY" /></h3>
            <p><I18nText id="HW_DESC_TEXT_ICON_2" /></p>
          </div>
        </div>
        <div className={styles.wrapperGrid}>
          <div>
            <img src={IconSecure} alt="Secure" />
            <h3><I18nText id="SECURE" /></h3>
            <p><I18nText id="HW_DESC_TEXT_ICON_3" /></p>
          </div>
          <div>
            <img src={IconCrypto} alt="Multi-apps" />
            <h3><I18nText id="MULTI_APPS" /></h3>
            <p><I18nText id="HW_DESC_TEXT_ICON_4" /></p>
            <p />
          </div>
        </div>
      </div>
    </div>
  </div>
);
