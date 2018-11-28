import React from 'react';
import {Menu, Dropdown, Icon} from 'antd';
import Store from '../../store';
import {logoutAction} from '../../actions/accounts.action';
import avatar_pic from '../../../assets/images/avatar.png';
import './userMenu.css';

const MenuFunc = {
  logout() {
    Store.dispatch(logoutAction());
  }
};

const clickMenu = ({key}) => {
  MenuFunc[key] && MenuFunc[key]();
};

const menu = (
  <Menu onClick={clickMenu}>
    <Menu.Item key="logout">
      <span>退出</span>
    </Menu.Item>
  </Menu>
);

class UserMenu extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  render() {
    return (
      <div className="layout-menu-user">
        <Dropdown overlay={menu} trigger={['click']}>
          <div>
            <img className="avatar" src={avatar_pic} />
            <Icon type="down" />
          </div>
        </Dropdown>
      </div>
    );
  }
}

export default UserMenu;
