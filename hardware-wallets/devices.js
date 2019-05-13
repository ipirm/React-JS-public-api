import React, { Fragment } from 'react';
import { I18nText } from 'libs/i18n';
import Image1 from './images/image-1.jpg';
import Image2 from './images/image-2.jpg';
import Image3 from './images/image-3.jpg';

export default [
  {
    id: 1,
    image: Image1,
    title: 'Ledger Blue',
    price: '€274',
    officialSite: 'https://www.ledgerwallet.com/r/acff?path=/products/ledger-blue',
    description: (
      <p>
        <I18nText id="LEDGER_BLUE_DESC_TEXT_1" />
      </p>
    ),
  },
  {
    id: 2,
    image: Image2,
    title: 'Ledger Nano S',
    price: '€94',
    officialSite: 'https://www.ledgerwallet.com/r/acff?path=/products/ledger-nano-s',
    description: (
      <p>
        <I18nText id="LEDGER_NANO_DESC_TEXT_1" />
      </p>
    ),
  },
  {
    id: 3,
    image: Image3,
    title: 'Trezor',
    price: '€89',
    officialSite: 'https://shop.trezor.io?a=5MWUYMHJT4RK',
    description: (
      <Fragment>
        <p>
          <I18nText id="TREZOR_DESC_TEXT_1" />
        </p>
        <p>
          <I18nText id="TREZOR_DESC_TEXT_2" />
        </p>
      </Fragment>
    ),
  },
];
