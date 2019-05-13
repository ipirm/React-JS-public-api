import React from 'react';
import { I18nText } from 'libs/i18n';
import PropTypes from 'prop-types';
import { formatCurrency } from 'libs/currency-info';
import CenterTitle from 'components/specific/center-title';
import IconCurrency from 'components/global/icon-currency';
import Button from 'components/global/button';
import styles from './styles.css';
import tableData from './table-data';

const findDeviceById = (id, list) => list.find(item => item.id === id);

const TableCrypto = ({ list }) => (
  <div>
    <CenterTitle
      title={<I18nText id="CRYPTOCURRENCIES" />}
      description={<I18nText id="HARDWARE_CRYPTO_DESC" />}
    />

    <div className="container">
      <table className={styles.table}>
        <thead>
          <tr>
            <td colSpan={2}>
              <I18nText id="CURRENCY" />
            </td>
            <td>
              Ledger Blue
            </td>
            <td>
              Ledger Nano S
            </td>
            <td>
              Trezor
            </td>
            <td>
              Guarda <I18nText id="APPS" />
            </td>
            <td>
              Android
            </td>
          </tr>
        </thead>
        <tbody>
          {tableData.map(item => (
            <tr key={`table-key${item.ticker}`}>
              <td className={styles.iconCol}>
                {item.icon ? (
                  <img src={item.icon} alt="" />
                ) : (
                  <IconCurrency currency={item.ticker} className={styles.iconCurrency} />
                )}
              </td>
              <td>
                <span className={styles.title}>{item.title}</span>
                <span className={styles.ticker}>{formatCurrency(item.ticker)}</span>
              </td>
              <td className={styles.dotWrapper}>
                {item.ladgerBlue ? (<span className={styles.dotIcon} />) : null}
              </td>
              <td className={styles.dotWrapper}>
                {item.ladgerNano ? (<span className={styles.dotIcon} />) : null}
              </td>
              <td className={styles.dotWrapper}>
                {item.trezor ? (<span className={styles.dotIcon} />) : null}
              </td>
              <td className={styles.storeWrapper}>
                {/* {item.links && item.links.playMarket ? (
                  <a rel="noopener noreferrer" href={item.links.playMarket} target="_blank">Android</a>
                  ) : null}
                  {item.links && item.links.appStore ? (
                  <a rel="noopener noreferrer" href={item.links.appStore} target="_blank">iOS</a>
                ) : null} */}
                {item.links && item.links.webWallet ? <a rel="noopener noreferrer" href={item.links.webWallet} target="_blank">Web</a> : null}
              </td>
              <td className={styles.storeWrapper}>
                {item.android ? (<a rel="noopener noreferrer" target="_blank" href={item.links.android}>Android</a>) : null}
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={2} />
            <td>
              <div className={styles.fromText}>
                <I18nText id="FROM_BUY" /> {findDeviceById(1, list).price}
              </div>
              <a href={findDeviceById(1, list).officialSite} rel="noopener noreferrer" target="_blank">
                <Button color="blue"><I18nText id="BUY" /></Button>
              </a>
            </td>
            <td>
              <div className={styles.fromText}>
                <I18nText id="FROM_BUY" /> {findDeviceById(2, list).price}
              </div>
              <a rel="noopener noreferrer" href={findDeviceById(2, list).officialSite} target="_blank">
                <Button color="blue"><I18nText id="BUY" /></Button>
              </a>
            </td>
            <td>
              <div className={styles.fromText}>
                <I18nText id="FROM_BUY" /> {findDeviceById(3, list).price}
              </div>
              <a rel="noopener noreferrer" href={findDeviceById(3, list).officialSite} target="_blank">
                <Button color="blue"><I18nText id="BUY" /></Button>
              </a>
            </td>
            <td />
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
);


TableCrypto.propTypes = {
  list: PropTypes.array,
};

export default TableCrypto;
