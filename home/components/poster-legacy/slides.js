import React, { Fragment } from 'react';
import cn from 'classnames';
import I18nText from 'libs/i18n/text';
import { NavLink } from 'components/global/link';
import Button from 'components/global/button';
import styles from './styles.css';

import IconPlay from './icon-play.svg';
import LinksMultiwallet from '../../../multi-wallet/components/links';
import BannerExtension from './banners/extension.png';
import BannerEos from './banners/eos.png';
import BannerMain from './banners/shield.png';
// import BannerMobile from './banners/mobile.png';
import BannerExchange from './banners/exchange.png';
import BannerBuy from './banners/buy.png';
import BannerWebWallet from './banners/wallet.png';
import BannerOpenSource from './banners/opensource.png';
import BannerMobileWallet from './banners/image-mobile.png';
import BannerTokenGenerator from './banners/token-generator.png';
// import Banner2019 from './banners/2019.svg';
// import BannerBlackFriday from './banners/black-friday.png';
// import BunnerCard from './banners/banner-card.png';
// import BunnerHW from './banners/banner-hw.png';


export default [
  isVisible => (
    <Fragment>
      <div className={cn('col-xs-7', styles.offset)}>
        <h1><I18nText id="BANNER_GET_STARTED_TITLE" /></h1>
        <p><I18nText id="BANNER_GET_STARTED_TEXT" /></p>
        <NavLink to="/web-wallet">
          <Button color="white" className={styles.whiteButton}>
            <span><I18nText id="GET_STARTED" /></span>
          </Button>
        </NavLink>
      </div>
      {isVisible && (
        <div className={styles.posterImage}>
          <img src={BannerWebWallet} alt="" />
        </div>
      )}
    </Fragment>
  ),

  isVisible => (
    <Fragment>
      <div className={cn('col-xs-7', styles.offset)}>
        <h1>Guarda Mobile Multiwallet</h1>
        <p>
          Guarda combines the convenience of a traditional wallet and security of cryptocurrency in the new application.
          No more separate wallets — store all your currencies in one place and access them instantly.
        </p>
        <LinksMultiwallet />
      </div>
      {isVisible && (
      <div className={styles.posterImage}>
        <img src={BannerMobileWallet} alt="" style={{ paddingTop: '40px' }} />
      </div>
      )}
    </Fragment>
  ),

  isVisible => (
    <Fragment>
      <div className={cn('col-xs-7', styles.offset)}>
        <h1><I18nText id="BANNER_EXTENSION_TITLE" /></h1>
        <p><I18nText id="BANNER_EXTENSION_TEXT" /></p>
        <a
          href="https://chrome.google.com/webstore/detail/guarda/hpglfhgfnhbgpjdenjgmdgoeiappafln?hl=en-GB"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button color="white" className={styles.whiteButton}>
            <span><I18nText id="ADD_TO_CHROME" /></span>
          </Button>
        </a>
      </div>
      {isVisible && (
      <div className={styles.posterImage}>
        <img src={BannerExtension} alt="" style={{ paddingTop: '40px' }} />
      </div>
      )}
    </Fragment>
  ),

  isVisible => (
    <Fragment>
      <div className={cn('col-xs-7', styles.offset)}>
        <h1><I18nText id="BANNER_EOS_TITLE" /></h1>
        <p><I18nText id="BANNER_EOS_TEXT" /></p>
        <a href="/app">
          <Button color="white" className={styles.whiteButton}>
            <span><I18nText id="SIGN_IN" /></span>
          </Button>
        </a>
      </div>
      {isVisible && (
      <div className={styles.posterImage}>
        <img src={BannerEos} alt="" style={{ paddingTop: '40px' }} />
      </div>
      )}
    </Fragment>
  ),

  (isVisible, handleOpenPopup) => (
    <Fragment>
      <div className={cn('col-xs-7', styles.offset)}>
        <h1><I18nText id="BANNER_PROMO_TITLE" /></h1>
        <p><I18nText id="BANNER_PROMO_TEXT" /></p>
        <Button className={styles.transparentButton} onClick={handleOpenPopup}>
          <img src={IconPlay} alt="" />
          <span><I18nText id="WATCH_PROMO" /></span>
        </Button>
      </div>
      {isVisible && (
        <div className={styles.posterImage}>
          <img src={BannerMain} alt="" />
        </div>
      )}
    </Fragment>
  ),

  isVisible => (
    <Fragment>
      <div className={cn('col-xs-7', styles.offset)}>
        <h1><I18nText id="BANNER_EXCHANGE_TITLE" /></h1>
        <p><I18nText id="BANNER_EXCHANGE_TEXT" /></p>
        <NavLink to="/exchange">
          <Button color="white" className={styles.whiteButton}>
            <span><I18nText id="START_EXCHANGE" /></span>
          </Button>
        </NavLink>
      </div>
      {isVisible && (
        <div className={styles.posterImage}>
          <img src={BannerExchange} alt="" />
        </div>
      )}
    </Fragment>
  ),

  isVisible => (
    <Fragment>
      <div className={cn('col-xs-7', styles.offset)}>
        <h1>Guarda Token Generator</h1>
        <p>
          The time of loyalty bonuses and cashback programmes is over. Tokens are the new black.
          Create a token that stands out. We will deal with all the rest.
        </p>
        <a href="/app/token-generator" target="_blank" rel="noopener noreferrer">
          <Button color="white" className={styles.whiteButton}>
            <span>Create token</span>
          </Button>
        </a>
      </div>
      {isVisible && (
        <div className={styles.posterImage} style={{ bottom: 50 }}>
          <img src={BannerTokenGenerator} alt="" style={{ width: 650, height: 'auto', paddingTop: '0' }} />
        </div>
      )}
    </Fragment>
  ),

  isVisible => (
    <Fragment>
      <div className={cn('col-xs-7', styles.offset)}>
        <h1><I18nText id="BANNER_BUY_TITLE" /></h1>
        <p><I18nText id="BANNER_BUY_TEXT" html /></p>
        <NavLink to="/buy">
          <Button className={styles.whiteButton}>
            <span><I18nText id="BUY_CRYPTO" /></span>
          </Button>
        </NavLink>
      </div>
      {isVisible && (
        <div className={styles.posterImage}>
          <img src={BannerBuy} alt="" />
        </div>
      )}
    </Fragment>
  ),

  isVisible => (
    <Fragment>
      <div className={cn('col-xs-7', styles.offset)}>
        <h1><I18nText id="BANNER_SECURITY_TITLE" /></h1>
        <p><I18nText id="BANNER_SECURITY_TEXT" /></p>
        <NavLink to="/about">
          <Button className={styles.whiteButton}>
            <span><I18nText id="MORE" /></span>
          </Button>
        </NavLink>
      </div>
      {isVisible && (
        <div className={styles.posterImage}>
          <img src={BannerOpenSource} alt="" />
        </div>
      )}
    </Fragment>
  ),
];
