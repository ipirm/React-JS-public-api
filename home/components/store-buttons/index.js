import React from 'react';
import axios from 'axios';
import cn from 'classnames';
import Button from 'components/global/button';
import IconLinux from './icon-linux.svg';
import IconMac from './icon-mac.svg';
import IconWindows from './icon-windows.svg';
import styles from './styles.css';


const handleDesktopDownload = platform => () => {
  axios.post('/api/v1/internal/count-downloads', {
    platform,
  });
};

export default ({ className }) => ( // eslint-disable-line
  <div className={cn(styles.buttonsWrapper, className)}>
    <div>
      <a href="/apps/Guarda_Setup_1.0.0x64.exe" target="_blank" download onClick={handleDesktopDownload('Windows')}>
        <Button color="white" size="big">
          <img src={IconWindows} alt="" />
          Windows 64
        </Button>
      </a>
      <a className={styles.alternative} href="/apps/Guarda_Setup_1.0.0x86.exe" target="_blank" download onClick={handleDesktopDownload('Windows32')}>
        Windows 32
      </a>
    </div>
    <div>
      <a href="/apps/Guarda-1.0.0.dmg" target="_blank" download onClick={handleDesktopDownload('Mac')}>
        <Button color="white" size="big">
          <img src={IconMac} alt="" />
          Mac OS
        </Button>
      </a>
    </div>
    <div>
      <a href="/apps/Guarda-1.0.0-x86_64.AppImage" target="_blank" download onClick={handleDesktopDownload('Linux-AppImage')}>
        <Button color="white" size="big">
          <img src={IconLinux} alt="" />
          Linux
        </Button>
      </a>
      <a
        className={styles.alternative}
        href="/apps/Guarda_1.0.0_amd64.deb"
        target="_blank"
        download
        onClick={handleDesktopDownload('Linux')}
      >
        Debian/Ubuntu
      </a>
    </div>
  </div>
);
