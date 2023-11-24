import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import style from '../header/header.module.scss';

import useLocalStorage from 'hooks/useLocalStorage';

import i18n from '../../i18n';

const PositionedMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const currentLanguageText = () => {
    if (language === 'en') return 'ENG';
    if (language === 'es') return 'ESP';
    if (language === 'it') return 'ITL';
    if (language === 'ua') return 'UKR';
    if (language === 'ru') return 'RUS';
    return 'ENG';
  };

  const [language, setLanguage] = useLocalStorage('language', 'en');

  const handleLanguageChange = selectedLanguage => {
    if (selectedLanguage === 'en' && language !== 'en') {
      i18n.changeLanguage('en');
      setLanguage('en');
      setAnchorEl(null);
    } else if (selectedLanguage === 'it' && language !== 'it') {
      i18n.changeLanguage('it');
      setLanguage('it');
      setAnchorEl(null);
    } else if (selectedLanguage === 'es' && language !== 'es') {
      i18n.changeLanguage('es');
      setLanguage('es');
      setAnchorEl(null);
    } else if (selectedLanguage === 'ua' && language !== 'ua') {
      i18n.changeLanguage('ua');
      setLanguage('ua');
      setAnchorEl(null);
    } else if (selectedLanguage === 'ru' && language !== 'ru') {
      i18n.changeLanguage('ru');
      setLanguage('ru');
      setAnchorEl(null);
    } else {
      setAnchorEl(null);
    }
  };

  return (
    <div>
      <div className={style.btnContainer}>
        <Button
          id="demo-positioned-button"
          aria-controls={open ? 'demo-positioned-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <span className={style.txtbtnLng}>{currentLanguageText()}</span>
        </Button>
      </div>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={() => handleLanguageChange('en')}>EN</MenuItem>
        <MenuItem onClick={() => handleLanguageChange('es')}>ES</MenuItem>
        <MenuItem onClick={() => handleLanguageChange('it')}>IT</MenuItem>
        <MenuItem onClick={() => handleLanguageChange('ua')}>UA</MenuItem>
        <MenuItem onClick={() => handleLanguageChange('ru')}>RU</MenuItem>
      </Menu>
    </div>
  );
};

export default PositionedMenu;
