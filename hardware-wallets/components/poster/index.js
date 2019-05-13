import React, { Component } from 'react';
import { I18nText } from 'libs/i18n';
import { scroller } from 'react-scroll';
import Poster from 'components/specific/poster';
import Button from 'components/global/button';
import styles from './styles.css';

export default class PosterComponent extends Component {
  handleStarted = () => {
    scroller.scrollTo('scrollToDevices', {
      duration: 300,
      delay: 100,
      smooth: true,
      offset: -20,
    });
  }

  render() {
    return (
      <Poster className={styles.poster}>
        <div className="col-xs-5">
          <h1><I18nText id="HW_POSTER_TITLE" /></h1>
          <div className={styles.blocks}>
            <p>
              <I18nText id="HW_POSTER_TEXT" />
            </p>
            <div className="clearfix" />
            <div className={styles.buttonsWrapper}>
              <Button className={styles.whiteButton} onClick={this.handleStarted}>
                <I18nText id="LETS_GET_STARTED" />
              </Button>
            </div>
          </div>
        </div>
        <div className="col-xs-6">
          <div className={styles.hardwareWalletsImage} />
        </div>
      </Poster>
    );
  }
}
