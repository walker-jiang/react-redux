import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router';
import { sidebar }  from '../../config/app';
import './sidebar.css';

const SubMenu = Menu.SubMenu;
const createMenuItem = function () {

}

const Sidebar = React.createClass({
  getInitialState() {
    return {
      current: '1'
    };
  },

  handleClick(e) {
    this.setState({
      current: e.key
    });
  },

  render() {
    return (
      <div className="layout-sidebar"
           style={{ width: 210 }}>
        <div className="layout-title">
          <img className="layout-logo" src="../../../assets/svgs/logo.svg" />
          <h1 className="layout-title-text">Antd Admin</h1>
        </div>
        <Menu onClick={this.handleClick}
            style={{ width: 210}}
            defaultOpenKeys={['sub0']}
            theme="dark-blue"
            selectedKeys={[this.state.current]}
            mode="inline">
          {
            sidebar.map((ele, index) => {
              if (!ele.sub) {
                return (<Menu.Item key={`${index}`}>
                  <Link to={ele.link}>{ele.title}</Link>
                  </Menu.Item>)
              }
              return (
                <SubMenu key={`sub${index}`} title={<span>
                  <Icon type={ele.icon} />{ele.title}</span>}>
                  {
                    ele.sub.map((sele, sindex) => {
                      let subMenu;
                      if (sele.sub && sele.sub.length) {
                        subMenu = (
                          <SubMenu key={`sub2${index}${sindex}`} title={sele.title}>
                            {
                              sele.sub.map((mele, mindex) => {
                                return (
                                  <Menu.Item key={`${index}${sindex}${mindex}`}>
                                    <Link to={mele.link}>{mele.title}</Link>
                                  </Menu.Item>
                                );
                              })
                            }
                          </SubMenu>
                        );
                      } else {
                        subMenu = (
                          <Menu.Item key={`${index}${sindex}`}>
                            <Link to={sele.link}>{sele.title}</Link>
                          </Menu.Item>
                        );
                      }

                      return subMenu;
                    })
                  }
                </SubMenu>
              );
            })
          }
        </Menu>
      </div>
    );
  }
});

export default Sidebar;
