import React, { Component } from 'react';
import { I18nText } from 'libs/i18n';
import PropTypes from 'prop-types';
import CenterTitle from 'components/specific/center-title';
import Slider from 'components/global/slider';
import Button from 'components/global/button';
import { Element } from 'react-scroll';
// import cn from 'classnames';
import ItemDevice from './item-device';
import styles from './styles.css';

export default class DevicesSlider extends Component {
  static propTypes = {
    list: PropTypes.array,
  }

  state = {
    sliderActive: this.props.list[1],
  }

  render() {
    const deviceInfo = this.state.sliderActive;
    return (
      <Element name="scrollToDevices">
        <div className={styles.wrapper}>
          <CenterTitle
            title={<I18nText id="HW_SLIDER_TITLE" />}
            description={<I18nText id="HW_SLIDER_DESC" />}
          />

          <Slider
            initialSlide={2}
            list={this.props.list}
            item={ItemDevice}
            countVisibles={3}
            onChange={sliderActive => this.setState({ sliderActive })}
          />
          <div className="container">
            <div className={styles.textCenter}>
              <h2>{deviceInfo.title}</h2>
              {deviceInfo.description}
            </div>
          </div>
          <div className="container">
            <div className={styles.priceWrapperBlock}>
              <div className={styles.priceBlock}>
                <span className={styles.price}><I18nText id="FROM_BUY" /> {deviceInfo.price}</span>
                <a rel="noopener noreferrer" href={deviceInfo.officialSite} className={styles.linkStore} target="_blank">
                  <I18nText id="VISIT_OFFICIAL_WEBSITE" />
                </a>
              </div>
              <a rel="noopener noreferrer" href={deviceInfo.officialSite} target="_blank">
                <Button color="blue" className={styles.buyButton}><I18nText id="BUY_ONLINE" /></Button>
              </a>
            </div>
          </div>
        </div>
      </Element>
    );
  }
}
