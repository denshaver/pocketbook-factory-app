import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


import useLocalStorage from 'hooks/useLocalStorage';

import i18n from '../../i18n';

const PositionedMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };



  
  const [language, setLanguage] = useLocalStorage('language', 'en');
  
  
  const handleLanguageChange = (selectedLanguage) => {
    if (selectedLanguage === 'en' && language !== 'en') {
      i18n.changeLanguage('en');
      setLanguage('en');
      
    } else if (selectedLanguage === 'it' && language !== 'it') {
      i18n.changeLanguage('it');
      setLanguage('it');
      
    } else if (selectedLanguage === 'es' && language !== 'es') {
      i18n.changeLanguage('es');
      setLanguage('es');
      
    }
  }
  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
       LNG
      </Button>
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
      </Menu>
    </div>
  );
}


export default PositionedMenu;