import {Component} from 'react'
//import Router from 'next/router'
import Head from 'next/head'
/*import dynamic from 'next/dynamic'*/

import withMediaApp from '../components/withMediaApp'
import Home from '../components/MediaPortal/Outlet'
//const Home = dynamic(import ('../components/MediaPortal/Outlet'), { ssr: false })

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
          <title>KTT4President | Outlets</title>
        </Head>
        <Home />
      </div>
    )
  }
}

export default withMediaApp(MediaAdminPage)
