/* eslint max-len: [0] */
import patchMeta from 'libs/patch-meta';

export default patchMeta(({ translate }) => ({
  title: `${translate('HARDWARE_WALLETS')} | Guarda`,
  url: '/hardware-wallets',
  keywords: translate('HW_META_KEYWORDS'),
  description: translate('HW_META_DESC'),
}));
