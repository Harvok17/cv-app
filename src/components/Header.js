import React from 'react';
import '../styles/Header.css';
import Toggle from './Toggle';

const Header = props => {
  const { enableDarkMode, enablePreviewMode, children } = props;
  return (
    <div className="header">
      <div className="header__options">
        <Toggle label="Dark Mode" clickHandler={enableDarkMode} />
        <Toggle label="Preview Mode" clickHandler={enablePreviewMode} />
      </div>

      {children}
    </div>
  );
};

export default Header;
