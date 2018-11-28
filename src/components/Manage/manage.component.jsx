import React from 'react';
import { connect } from 'react-redux';
import { Breadcrumb, QueueAnim } from 'antd';
import Sidebar from '../Sidebar/sidebar.component';
import Header from '../Header/header.component';
import { StoreSession, loginSuccessAction } from '../../actions/auth.action';

const Manage  = React.createClass({
  propTypes: {
    dispatch: React.PropTypes.func.isRequired
  },

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  checkLogin() {
    if (!this.props.auth.token) {
      this.context.router.push('/login');
    }
  },

  componentDidUpdate() {
    //this.checkLogin();
  },

  render() {
    return (
      <div style={{height: '100%'}}>
        <Sidebar />
        <Header />
        <div className="layout-contentbox clearfix">
          {this.props.children}
        </div>
      </div>
    );
  }
});

export default connect(
  state => ({
    auth: state.auth
  })
)(Manage);
