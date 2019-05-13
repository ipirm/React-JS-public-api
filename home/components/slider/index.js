import React, { Component } from 'react';
import { getCurrenciesList, indexes } from 'libs/currency-info';
import { NavLink } from 'components/global/link';
import I18nText from 'libs/i18n/text';
import arrayChunk from 'libs/array-chunk';
import IconShield from 'components/specific/icon-sheild';
import IconArrow from './icon-arrow.svg';
import styles from './styles.css';

const CONT_ITEMS_ONE_LINE = 7;

const list = getCurrenciesList().filter(item => item.sortIndex !== undefined);
list.sort((a, b) => (indexes[a.ticker] > indexes[b.ticker] ? 1 : -1));

export default class WalletSlider extends Component {
  constructor(props) {
    super(props);
    this.chunks = arrayChunk(list, CONT_ITEMS_ONE_LINE);
    this.chunks.forEach((chunk) => {
      if (chunk.length !== CONT_ITEMS_ONE_LINE) {
        chunk.push(...new Array(CONT_ITEMS_ONE_LINE - chunk.length));
      }
    });
    this.state = {
      slide: 0,
      maxSlides: this.chunks.length,
    };
  }

  handleRight = () => {
    if (this.state.slide + 1 >= this.state.maxSlides) {
      return;
    }
    this.setState({ slide: this.state.slide + 1 });
  }

  handleLeft = () => {
    if (this.state.slide <= 0) {
      return;
    }
    this.setState({ slide: this.state.slide - 1 });
  }

  isNextVisible = () => this.state.slide + 1 < this.state.maxSlides

  isPrevVisible = () => this.state.slide > 0

  render() {
    return (
      <div className={styles.wrapper}>
        <div className="container">
          <h2>
            <I18nText id="SLIDER_TITLE" html />
            <div className="pull-right">
              <NavLink to="/supported-cryptocurrencies" className={styles.allApps}>
                <I18nText id="SLIDER_ALL" />
                <img src={IconArrow} alt="" />
              </NavLink>
            </div>
          </h2>

        </div>
        <div className="container relative">
          <div className={styles.wrapperContainer}>
            {this.isNextVisible() ? (
              <div className={styles.arrowRight} onClick={this.handleRight} />
            ) : null}
            {this.isPrevVisible() ? (
              <div className={styles.arrowLeft} onClick={this.handleLeft} />
            ) : null}
            {this.chunks.map((chunk, indexSlide) => (
              <div
                className={styles.slideRow}
                key={`slider-key-row${indexSlide}`}
                style={{ marginLeft: indexSlide === 0 ? `-${this.state.slide * 100}%` : '0' }}
              >
                {chunk.map((item, index) => (item ?
                  <IconShield {...item} onClick={() => {}} key={`slider-currency-item${item.ticker}`} /> :
                  <div key={`slider-currency-item${index}`} />))}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
