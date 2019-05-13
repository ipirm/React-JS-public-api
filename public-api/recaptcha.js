import React, { Fragment, Component } from 'react';
import I18nText from 'libs/i18n/text';
import Button from 'components/global/button';
import Loader from 'components/global/loader';
import axios from 'axios';
import loadScript from './load-script';
import styles from './styles.css';

export default class RecaptchaAPIKey extends Component {
  state = {
    isLoading: false,
  }

  async componentWillMount() {
    if (window) {
      window.onloadCallback = () => {
        window.grecaptcha.render('g-recaptcha', {
          sitekey: '6Lem50oUAAAAABdpgf_V_9kvMlFlHKrgkyRhwdEY',
          theme: 'light',
          callback: this.handleVerifyCallback,
          'expired-callback': () => this.setState({ code: '' }),
        });
        this.setState({ isLoading: true });
      };
      await loadScript('https://www.google.com/recaptcha/api.js?onload=onloadCallback');
    }
  }

  handleVerifyCallback = (code) => {
    this.setState({ code });
  }

  handleGenerateAPIKey = async () => {
    const { data } = await axios.post('/api/v1/internal/generate-api-key', { code: this.state.code });
    this.setState({ apiKey: data.apiKey });
  }

  render() {
    return (
      <div>
        <h3>
          <I18nText id="GENERATE_API_KEY" />
        </h3>
        {!this.state.isLoading ? (
          <div className={styles.wrapperLoader}>
            <Loader visible width={32} />
          </div>
        ) : null}
        {!this.state.apiKey ? (
          <Fragment>
            <div
              className={styles.captchaBlock}
              id="g-recaptcha"
              style={{ display: !this.state.isLoading ? 'none' : '' }}
            />
            <Button
              disabled={!this.state.isLoading || !this.state.code}
              color="blue"
              size="big"
              onClick={this.handleGenerateAPIKey}
            >
              <I18nText id="GENERATE_API_KEY" />
            </Button>
          </Fragment>
        ) : null}
        {this.state.isProcessGenerate ? (
          <div className={styles.wrapperLoader}>
            <Loader visible width={32} />
          </div>
        ) : null}
        {this.state.apiKey ? (
          <div> <I18nText id="YOU_API_KEY" />: {this.state.apiKey}</div>
        ) : null}
      </div>
    );
  }
}
