import React, { Component } from 'react';
import { scroller } from 'react-scroll';
import Poster from 'components/specific/poster';
import Popup from 'components/global/popup';
import styles from './styles.css';

import slides from './slides';

class PosterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisibleVideoPopup: false,
      slide: 0,
      maxSlides: 9,
    };

    this.timer = setInterval(() => {
      let slide = this.state.slide + 1;
      if (slide >= this.state.maxSlides) {
        slide = 0;
      }
      this.setState({ slide });
    }, 10000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  handleStarted = () => {
    scroller.scrollTo('scrollToWallets', {
      duration: 300,
      delay: 100,
      smooth: true,
      offset: -20,
    });
  }

  handleOpenPopup = () => {
    this.setState({ isVisibleVideoPopup: !this.state.isVisibleVideoPopup });
  }

  handleClosePopup = () => {
    this.setState({ isVisibleVideoPopup: false });
  }

  handleRight = () => {
    clearInterval(this.timer);
    if (this.state.slide + 1 >= this.state.maxSlides) {
      return;
    }
    this.setState({ slide: this.state.slide + 1 });
  }

  handleLeft = () => {
    clearInterval(this.timer);
    if (this.state.slide <= 0) {
      return;
    }
    this.setState({ slide: this.state.slide - 1 });
  }

  isNextVisible = () => this.state.slide + 1 < this.state.maxSlides

  isPrevVisible = () => this.state.slide > 0

  render() {
    return (
      <Poster className={styles.poster}>
        <Popup visible={this.state.isVisibleVideoPopup} onClose={this.handleClosePopup}>
          <iframe
            width="960"
            height="540"
            src="https://www.youtube.com/embed/mDVGM81uDuw?autoplay=1"
            frameBorder="0"
            title="Promo video"
            allow="encrypted-media"
            allowFullScreen
          />
        </Popup>
        <div className={styles.sliderWrapper}>
          <div className={styles.wrapperArrows}>
            <div className={styles.arrowLeft} onClick={this.handleLeft} />
            <div className={styles.arrowRight} onClick={this.handleRight} />
          </div>

          {slides.map((slide, index) => (
            <div className={styles.banner} style={{ marginLeft: index === 0 ? `-${this.state.slide * 100}%` : 0 }}>
              {slide([this.state.slide - 1, this.state.slide, this.state.slide + 1].indexOf(index) > -1, this.handleOpenPopup)}
            </div>
          ))}
        </div>
      </Poster>
    );
  }
}

export default PosterComponent;
