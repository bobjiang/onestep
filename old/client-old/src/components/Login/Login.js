import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import { Error } from '../oauth/FormStyle'
import isEmpty from 'lodash.isempty'
import Layout from '../shared/AuthFormLayout'
import Button from '@material-ui/core/Button'

class Login extends Component {
  state = {
    account: '',
    password: '',
    errors: {}
  }

  handleSubmit = e => {
    e.preventDefault()
    const { account, password } = this.state
    const errors = {}
    if (!account) {
      errors.account = '不能为空'
    }
    if (!password) {
      errors.password = '密码错误'
    }
    if (!isEmpty(errors)) {
      this.setState({ errors: { ...this.errors, ...errors } })
      return
    }

    this.props.login({ account, password }, this.props.history)
  }

  handleChange = (field, e) => {
    const value = e.target.value.trim()
    this.setState({ [field]: value })
  }

  render() {
    const { account, password, errors } = this.state
    return (
      <Layout title="登录" notice>
        <div>
          <TextField
            style={{ width: '100%' }}
            value={account}
            onChange={this.handleChange.bind(this, 'account')}
            margin="dense"
            label="用户名或手机号"
            helperText={<Error>{errors.account}</Error>}
          />

          <TextField
            style={{ width: '100%' }}
            value={password}
            onChange={this.handleChange.bind(this, 'password')}
            margin="dense"
            label="密码"
            type="password"
            helperText={<Error>{errors.password}</Error>}
          />
          <Button
            color="primary"
            variant="raised"
            fullWidth
            onClick={this.handleSubmit}
          >
            登录
          </Button>
        </div>
      </Layout>
    )
  }
}

export default Login
