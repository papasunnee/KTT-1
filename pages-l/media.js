import {Component} from 'react'
//import Router from 'next/router'
import Head from 'next/head'

import withMedia from '../components/withMedia'
import Home from '../components/MediaPortal/Index'

/*const breadcrumbs = [
  {title: 'Home', link:'/'},
  {title: 'News', link:'/news'},
  {title: 'Article', active: true},
]*/

class MediaAdminPage extends Component {
  render(){
    //const articles = this.props.articles || [];
    return (
      <div className="animated fadeIn">
        <Head>
          <title>KTT4President | Media Portal</title>
        </Head>
        <Home />
      </div>
    )
  }
}

export default withMedia(MediaAdminPage)
