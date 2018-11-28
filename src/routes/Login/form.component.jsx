import React from 'react';
// import styled, { css } from 'styled-components';
import { Form, Input, Button, Icon } from 'antd';
import { autobind } from 'core-decorators';
import getResource from '../../util/ajaxGetResource';
import { openMessageAction } from '../../actions/message.action';

const FormItem = Form.Item;

class FormData extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      verificationCode: ''
    };
  };
  componentWillMount(){
    this.getVerificationCode();
  };
  static propTypes = {
    loading: React.PropTypes.bool.isRequired,
    loginHandler: React.PropTypes.func.isRequired,
    dispatch: React.PropTypes.func.isRequired
  }
  //获取验证码
  getVerificationCode() {
    let that = this;
    let params = {
      type: 'GET',
      server_url: 'http://119.61.64.104:8124/zyg',
      url: 'verificationCodeController/getVerificationCode',
      data: {}
    };
    function success(res) {
      that.setState({
        verificationCode: res.data.verificationCode,
        code: res.data.code
      })
      // window.localStorage.setItem('verificationCode',  res.data.verificationCode);
      // window.localStorage.setItem('code',  res.data.code);
    };
    getResource(params, success);
  }
  @autobind()
  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, value) => {
      if (!err) {
        this.props.loginHandler(value.username, value.password);
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { verificationCode } = this.state;
    return (
      <Form horizontal onSubmit={this.handleSubmit}>
        <FormItem>
          {getFieldDecorator('username', {
            rules: [{required: true}]
          })(
            <Input addonBefore={<Icon type="user" />} placeholder="用户名" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{required: true}]
          })(
            <Input addonBefore={<Icon type="lock" />} ype="password" placeholder="密码" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('verificationCode', {
            rules: [{ required: false, message: '请输入右侧验证码!' }],
          })(
            <Input placeholder="请输入右侧验证码"/>
          )}
        </FormItem>
        <FormItem>
          <img alt="" src={verificationCode} />
        </FormItem>
        <Button
          type="primary"
          loading={ this.props.loading }
          htmlType="submit"
        >登录</Button>
      </Form>
    );
  }
}

export default Form.create()(FormData);
