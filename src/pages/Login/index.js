import React, { Component, Fragment } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './style.less';
class Login extends Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Fragment>
        <div className="loginWrapper">
          <div className="loginBox">
            <Form>
              <Form.Item label='用户'>
                {getFieldDecorator('userName', {
                  rules: [
                    { required: true, message: 'Please input your username!' }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                    }
                    placeholder="用户名"
                  />
                )}
              </Form.Item>
              <Form.Item label='密码'>
                {getFieldDecorator('passWord', {
                  rules: [
                    { required: true, message: 'Please input your passWord!' }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                    }
                    placeholder="密码"
                    type="passWord"
                  />
                )}
                <a className='login-form-forgot' href=''></a>
              </Form.Item>
            </Form>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default Form.create()(Login);
