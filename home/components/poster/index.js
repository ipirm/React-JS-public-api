/* eslint max-len: [1, 500] */

import React, { Component } from 'react';
import Poster from 'components/specific/poster';
import axios from 'axios';
import Button from 'components/global/button';
// import I18nText from 'libs/i18n/text';
import TrustPilotImage from './trustpilot.png';
// import StoreButtons from '../store-buttons';
import styles from './styles.css';
import IconAppStore from './icons/appstore.png';
import IconChrome from './icons/chrome.png';
import IconMacos from './icons/macos.png';
import IconGP from './icons/play.png';
import IconUbuntu from './icons/ubuntu.png';
import IconWindows from './icons/windows.png';

const handleDesktopDownload = platform => () => {
  axios.post('/api/v1/internal/count-downloads', {
    platform,
  });
};

class PosterComponent extends Component {
  state = {
    os: 'windows',
  }

  componentWillMount() {
    if (!window) {
      return;
    }

    let os;
    if (window.navigator.userAgent.indexOf('Mac') > -1) {
      os = 'mac';
    }

    if (window.navigator.userAgent.indexOf('Windows') > -1) {
      os = 'windows';
    }

    if (window.navigator.userAgent.indexOf('Linux') > -1) {
      os = 'linux';
    }

    this.setState({ os });
  }

  render() {
    const { os } = this.state;
    return (
      <Poster className={styles.poster}>
        <div className="col-xs-5">
          <h1>
            All coins in one wallet
          </h1>
          <div className={styles.blocks}>
            <p>
              Receive, Send, Buy, Exchange, Stake and do whatever you want with all coins in one secure, non-custodial, multiplatform wallet
            </p>
            <a href="/app" target="_blank">
              <Button color="white" className={styles.whiteButton}>
                <span>Create Web Wallet</span>
              </Button>
            </a>
          </div>
        </div>
        <div className="col-xs-6 col-xs-offset-1">
          <div className={styles.webWalletImage} />
          <a href="https://www.trustpilot.com/review/guarda.co" target="_blank" rel="noreferrer noopener" className={styles.trustpilot}>
            <img src={TrustPilotImage} alt="Guarda TrustPilot" />
          </a>
        </div>
        <div className={styles.storeButtons}>
          <div>
            OTHER PLATFORMS:
          </div>
          <a href="https://itunes.apple.com/app/apple-store/id1442083982?pt=118900606&ct=frommainpage&mt=8" target="_blank" rel="noopener noreferrer">
            <img src={IconAppStore} alt="Guarda for iPhone" />
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.crypto.multiwallet&referrer=utm_source%3Dlanding%26utm_campaign%3Dfrommainpage%26anid%3Dadmob" target="_blank" rel="noopener noreferrer">
            <img src={IconGP} alt="Guarda for Android" />
          </a>
          {os === 'mac' && (
            <a href="/apps/Guarda-1.0.0.dmg" target="_blank" download onClick={handleDesktopDownload('Mac')}>
              <img src={IconMacos} alt="Guarda for Mac OS" />
            </a>
          )}
          {os === 'linux' && (
            <a href="/apps/Guarda_1.0.0_amd64.deb" download target="_blank" onClick={handleDesktopDownload('Linux')}>
              <img src={IconUbuntu} alt="Guarda for Ubuntu/Debian" />
            </a>
          )}
          {os === 'windows' && (
            <a href="/apps/Guarda_Setup_1.0.0x64.exe" target="_blank" download onClick={handleDesktopDownload('Windows')}>
              <img src={IconWindows} alt="Guarda for windows" />
            </a>
          )}
          <a href="https://chrome.google.com/webstore/detail/guarda/hpglfhgfnhbgpjdenjgmdgoeiappafln" target="_blank" rel="noopener noreferrer">
            <img src={IconChrome} alt="Guarda for Chrome extension" />
          </a>
        </div>
      </Poster>
    );
  }
}


export default PosterComponent;
