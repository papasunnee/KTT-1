import React from 'react'
import Head from 'next/head'
/*import { graphql} from 'react-apollo'
import gql from 'graphql-tag'*/
//import 'isomorphic-fetch'

import withData from '../lib/withData'

import { Container } from 'reactstrap'
import Breadcrumb from './MediaPortal/components/Breadcrumb/Breadcrumb'
import Sidebar from './MediaPortal/components/adminUIComponents/Sidebar/Sidebar'
import Header from './MediaPortal/components/adminUIComponents/Header/Header'

/*const Header = dynamic(import ('./MediaPortal/components/adminUIComponents/Header/Header'), { ssr: false })
const Sidebar = dynamic(import ('./MediaPortal/components/adminUIComponents/Sidebar/Sidebar'), { ssr: false })
const Breadcrumb = dynamic(import ('./MediaPortal/components/Breadcrumb/Breadcrumb'), { ssr: false })*/


export default function withLayout(Child, opts) {
  class WrappedComponent extends React.Component {
    static async getInitialProps(context) {
      let ChildProps = {};

      if (Child.getInitialProps) {
        ChildProps = await Child.getInitialProps(context)
      }

      /*const baseUrl = context.req ? `${context.req.protocol}://${context.req.get('Host')}` : '';
      //Loading articles from the411ng api
      let res = await fetch(`${baseUrl}/fetch-breaking-articles`);
      let results = await res.json();*/

      return {
        ...ChildProps,
      }
    }

    constructor(props){
      super(props)
      this.state = {show: false}
    }

    componentDidMount(){
      this.setState({show: true})
      //console.log(S.prototype);
      //import { Container} from 'reactstrap'
    }

    render() {
      const opts = opts || {};

      return (
        <div>
          <Head>
            <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
            <meta charSet="utf-8"/>
            {/*<link rel="icon" href="wt_62309/images/favicon.ico" type="image/x-icon"/>*/}
            {/*<script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-59c55ee9a6332134"></script>*/}
            {/*<!-- Stylesheets-->*/}
            <link rel="stylesheet" href="/static/css/media-portal/style.css"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.4.1/css/simple-line-icons.css"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
          </Head>
          <div className="app">
            <Header />
            <div className="app-body">
              <Sidebar/>
              <main className="main">
                <Breadcrumb/>
                <Container fluid>
                  <Child {...this.props}/>
                </Container>
              </main>
            </div>
          </div>
        </div>
      )
    }
  }
  return withData(WrappedComponent)
}