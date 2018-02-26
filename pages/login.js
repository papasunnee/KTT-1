import {Component} from 'react'
//import Router from 'next/router'
import Head from 'next/head'

import withMedia from '../components/withMedia'
import Login from '../components/MediaPortal/views/Login/Login'

class MediaAdminPage extends Component {
  render(){
    return (
      <div className="animated fadeIn">
        <Head>
          <title>KTT4President | Media Portal Login</title>
        </Head>
        <Login />
      </div>
    )
  }
}

export default withMedia(MediaAdminPage, {noLayout: true})
