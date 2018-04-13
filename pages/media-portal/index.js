import {Component} from 'react'
//import Router from 'next/router'
import Head from 'next/head'
//import dynamic from 'next/dynamic'

import withMedia from '../../components/withMedia'
import Home from '../../components/MediaPortal/Index'
//const Home = dynamic(import ('../components/MediaPortal/Index'), { ssr: false })

/*const breadcrumbs = [
  {title: 'Home', link:'/'},
  {title: 'News', link:'/news'},
  {title: 'Article', active: true},
]*/

class MediaAdminPage extends Component {
  render(){
    const articles = this.props.articles || [];
    return (
      <div>
        <Head>
          <title>KTT4President | Media Portal</title>
        </Head>
        <Home />
      </div>
    )
  }
}

export default withMedia(MediaAdminPage)
