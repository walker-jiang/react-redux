import React from 'react';
import UserMenu from '../UserMenu/userMenu.component';
import './header.css';
import logoImage from '../../../assets/svgs/logo.svg';

const Header = React.createClass({
  render() {
    return (
      <div className="layout-header">
        <UserMenu />
      </div>
    );
  }
});

export default Header;
