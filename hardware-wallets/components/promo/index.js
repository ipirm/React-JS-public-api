import React from 'react';
import { I18nText } from 'libs/i18n';
import styles from './styles.css';

import Icon1 from './icon-1.svg';
import Icon2 from './icon-2.svg';
import Icon3 from './icon-3.svg';

export default () => (
  <div className={styles.wrapper}>
    <div className="container">
      <div className={styles.container}>
        <div className={styles.block}>
          <img src={Icon1} alt="" />
          <h4><I18nText id="MULTI_CURRENCY" /></h4>
          <p><I18nText id="HW_PROMO_TEXT_1" /></p>
        </div>
        <div className={styles.block}>
          <img src={Icon2} alt="" />
          <h4><I18nText id="SECURITY" /></h4>
          <p><I18nText id="HW_PROMO_TEXT_2" /></p>
        </div>
        <div className={styles.block}>
          <img src={Icon3} alt="" />
          <h4><I18nText id="BACKUP" /></h4>
          <p><I18nText id="HW_PROMO_TEXT_3" /></p>
        </div>
      </div>
    </div>
  </div>
);
