import React, { Fragment, Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { withI18N, I18nText } from 'libs/i18n';
import SimplePage from 'components/specific/simple-page';
import Button from 'components/global/button';
import { info } from 'libs/logger';
import RecaptchaAPIKey from './recaptcha';
import styles from './styles.css';
import meta from './meta';

const baseUrl = 'https://guarda.co';

class PublicApiPage extends Component {
  static propTypes = {
    i18n: PropTypes.object,
  }

  state = {
    response: {},
    requestParams: {},
  }

  formattingUrl = (url, params) => {
    let result = baseUrl + url;
    if (!params) {
      return result;
    }

    const queryParams = [];
    Object.keys(params).forEach((key) => {
      const val = params[key].values[0];
      if (params[key].query === false) {
        result = result.replace(`:${key}`, val);
      } else {
        queryParams.push(`${key}=${val}`);
      }
    });

    if (queryParams.length) {
      result += `?${queryParams.join('&')}`;
    }
    return result;
  }

  renderTitle = (type, url) => (
    <div>
      <div className={styles.methodWrapper}>
        <div className={styles.type}>{type.toUpperCase()}</div>
        <div className={styles.url}>{url}</div>
      </div>
    </div>
  )

  renderExampleLink = (method, url, params) => {
    if (method !== 'get') {
      return null;
    }
    const urlExample = this.formattingUrl(url, params);
    return (
      <div className={styles.wrapperBlock}>
        <div className={styles.titleBlock}>Example:</div>
        <a href={urlExample} rel="noopener noreferrer" target="_blank">{urlExample}</a>
      </div>
    );
  }

  renderResponse = res => (res ? (
    <div className={styles.wrapperBlock}>
      <div className={styles.titleBlock}>Response:</div>
      <div className={styles.responseBlock}>
        {JSON.stringify(res, null, 2)}
      </div>
    </div>
  ) : null)

  renderDescription = desc => (
    <div className={styles.wrapperBlock}>
      <div className={styles.titleBlock}>Description:</div>
      <div className={styles.descriptionBlock}>{desc}</div>
    </div>
  )

  renderParams = (params) => {
    if (!params) {
      return (
        <div className={styles.paramsWrapperEmpty}>
          Method is not required params
        </div>
      );
    }


    return (
      <div className={styles.wrapperBlock}>
        <div className={styles.titleBlock}>Params:</div>
        <table className={styles.paramsTable}>
          <thead>
            <tr>
              <td width="200">Key</td>
              <td>Default</td>
              <td width="50%">Values</td>
              <td width="120">Required</td>
            </tr>
          </thead>
          <tbody>
            {Object.keys(params).map(key => (
              <tr key={`item-key${key}`}>
                <td>{key}</td>
                <td>{params[key].default || ''}</td>
                <td>{params[key].values ? params[key].values.join(', ') : ''}</td>
                <td className={styles.textCenter}>{params[key].required ? 'yes' : 'no'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  renderTryBlock = (method, url, params) => {
    const urlForKey = this.formattingUrl(url, params);


    const tryAgain = async () => {
      const { requestParams } = this.state;
      const urlForRequest = this.formattingUrl(url, requestParams[urlForKey] || params).replace(baseUrl, '');
      const { response } = this.state;
      response[urlForKey] = '';

      const postParams = {};
      Object.keys(requestParams[urlForKey] || params).forEach((key) => {
        const val = params[key].values[0];
        postParams[key] = val;
      });

      this.setState({ response });
      const { data } = await axios[method](urlForRequest, postParams);
      response[urlForKey] = data;
      this.setState({ response });
      info('Public API try request');
    };

    const enterField = key => ({ target: { value } }) => {
      const { requestParams } = this.state;
      if (!requestParams[urlForKey]) {
        requestParams[urlForKey] = {};
      }

      if (!requestParams[urlForKey][key]) {
        Object.assign(requestParams[urlForKey], {
          [key]: {
            ...params[key],
            values: [value],
          },
        });
      } else {
        requestParams[urlForKey][key].values = [value];
      }
      this.setState({ requestParams });
    };

    const { requestParams } = this.state;
    return (
      <div className={styles.wrapperBlock}>
        <div className={styles.titleBlock}>Online example:</div>
        <div className={styles.exampleColumns}>
          <div>
            {params && Object.keys(params).map(key => (
              <div key={url + key}>
                <input
                  value={requestParams[urlForKey] && requestParams[urlForKey][key] ? requestParams[urlForKey][key].values[0] : ''}
                  defaultValue={params[key].default || params[key].values[0] || ''}
                  onChange={enterField(key)}
                  placeholder={key}
                  type="text"
                />
              </div>
            ))}
            <Button onClick={tryAgain} color="blue">
              <I18nText id="TRY_AGAIN" />
            </Button>
          </div>
          <div>
            <div className={styles.exampleBlock}>
              {
                this.state.response[urlForKey] ?
                  JSON.stringify(this.state.response[urlForKey], null, 2) :
                  'No data'
              }
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderMethodByConfig = config => (
    <Fragment>
      {this.renderTitle(config.method, config.url)}
      {this.renderDescription(config.description)}
      {this.renderExampleLink(config.method, config.url, config.params)}
      {this.renderParams(config.params)}
      {this.renderResponse(config.response)}
      {this.renderTryBlock(config.method, config.url, config.params)}
      <div className={styles.separator} />
    </Fragment>
  )

  render() {
    return (
      <SimplePage meta={meta(this.props.i18n)}>
        <h2><I18nText id="PUBLIC_API" /></h2>
        <p>
          <I18nText id="PUBLIC_API_KEY_INFO" html />
        </p>
        <h3>Config</h3>
        {this.renderMethodByConfig({
          method: 'get',
          url: '/api/v1/config/currencies-info',
          description: 'Receiving the information on all the available currencies',
          params: null,
          response: {
            currencies: [{
              ticker: 'bch',
              title: 'BitcoinCash',
              extraId: false,
              precision: 8,
            }, 'etc...'],
          },
        })}

        <h3>Utils</h3>

        {this.renderMethodByConfig({
          method: 'get',
          url: '/api/v1/utils/recognize-currency/:address',
          description: 'Determining the currency that the address belongs to',
          params: {
            address: {
              query: false,
              required: true,
              values: ['0x307a751412aa334f3417810ef9cab364f27d20c0', 'etc...'],
            },
          },
          response: {
            currencies: [
              'eth',
            ],
          },
        })}

        <h3>Buy</h3>

        {this.renderMethodByConfig({
          method: 'post',
          url: '/api/v1/buy/get-limits',
          description: 'Receiving the maximum and the minimum purchase limits for a taken address',
          params: {
            email: {
              query: false,
              required: true,
              values: ['email@email.com', 'etc...'],
            },
            currencyTo: {
              query: false,
              required: true,
              values: ['eth', 'etc...'],
            },
          },
        })}
        {this.renderMethodByConfig({
          method: 'get',
          url: '/api/v1/buy/get-estimate',
          description: 'Receiving the estimated rate for the transfer amount ',
          params: {
            amount: {
              query: true,
              required: true,
              values: ['200', 'etc...'],
            },
            currencyTo: {
              query: true,
              required: true,
              values: ['eth', 'etc...'],
            },
          },
        })}

        {this.renderMethodByConfig({
          method: 'get',
          url: '/api/v1/buy/get-currencies',
          description: 'Determining the available currencies ',
        })}

        {this.renderMethodByConfig({
          method: 'post',
          url: '/api/v1/buy/create-transaction',
          description: 'Creating a transaction',
          params: {
            email: {
              query: false,
              required: true,
              values: ['email@email.com'],
            },
            currencyTo: {
              query: false,
              required: true,
              values: ['eth'],
            },
            amount: {
              query: false,
              required: true,
              values: ['100'],
            },
            addressTo: {
              query: false,
              required: true,
              values: ['0x307a751412aa334f3417810ef9cab364f27d20c0'],
            },
          },
        })}
        {this.renderMethodByConfig({
          method: 'get',
          url: '/api/v1/buy/transaction/:id',
          description: 'Receiving the transaction data',
          params: {
            id: {
              query: false,
              required: true,
              values: ['1ndidn20mvs', 'etc...'],
            },
          },
        })}
        <RecaptchaAPIKey />
      </SimplePage>
    );
  }
}

export default withI18N(PublicApiPage);
