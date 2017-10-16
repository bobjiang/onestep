import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import styled from 'styled-components'

const LoginWrap = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 20px;
  background-color: #3F51B5;
  text-align: center;
`


class Login extends Component {

  handleClick = () => {
   this.props.onClick()
  }

  render () {
    return (
      <LoginWrap>
        <button
          onClick={this.handleClick}
          style={{ margin: '20% auto', height: '200px', width: '200px' }}
          >
          点击假装微信扫码登录
        </button>
        <Footer />
      </LoginWrap>
    )
  }
}

export default Login
