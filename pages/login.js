import {Component} from 'react'
//import Router from 'next/router'
import Head from 'next/head'

import withMediaAppLogin from '../components/withMediaAppLogin'
import Login from '../components/MediaPortal/views/Login/Login'

class LoginPage extends Component {
  render(){
    return (
      <div>
      {/*<div className="animated fadeIn">*/}
        <Head>
          <title>KTT4President | Media Portal Login</title>
        </Head>
        <Login />
      </div>
    )
  }
}

export default withMediaAppLogin(LoginPage)
