import React from 'react'
import Head from 'next/head'
/* import { graphql} from 'react-apollo'
import gql from 'graphql-tag' */
//import 'isomorphic-fetch'
import {Container} from 'reactstrap';

import withData from '../lib/withData'
import Breadcrumb from './MediaPortal/components/Breadcrumb/Breadcrumb'
import Sidebar from './MediaPortal/components/adminUIComponents/Sidebar/Sidebar'
import Header from './MediaPortal/components/adminUIComponents/Header/Header'

export default function withMedia(Child, opts) {
  class WrappedComponent extends React.Component {
    static async getInitialProps(context) {
      let ChildProps = {};

      if (Child.getInitialProps) {
        ChildProps = await Child.getInitialProps(context)
      }

      /*const baseUrl = context.req ? `${context.req.protocol}://${context.req.get('Host')}` : '';
      //Loading articles from the411ng api
      let res = await fetch(`${baseUrl}/fetch-breaking-articles`);
      let articles = await res.json();*/

      return {
        ...ChildProps
      }
    }

    render() {
      console.log('opts');
      console.log(opts);
      const opts = opts || {
        noLayout: false
      };
      //const breakingNewsArticles = this.props.articles.gistMany;
      return (<div>
        <Head>
          <meta name="format-detection" content="telephone=no"/>
          <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
          <meta charSet="utf-8"/> {/* <!-- Stylesheets--> */}
          {/*<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Montserrat:400,700%7CLibre+Baskerville:300,400,400i,700,700i%7CLato:400,400i,700,900"/>*/}
          <link rel="stylesheet" href="/static/css/media-portal/style.css"/>
          <link rel="stylesheet" href="/static/css/media-portal/dropdown-menu-right.css"/>
          <link rel="stylesheet" href="/static/css/media-portal/flag-icon.min.css"/>
          <link rel="stylesheet" href="/static/css/media-portal/font-awesome.min.css"/>
          <link rel="stylesheet" href="/static/css/media-portal/simple-line-icons.css"/>
        </Head>
        {(!opts.noLayout) ? (
          <div className="app">
              <Header/>
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
          ) : (
            <Child {...this.props}/>
          )
        }
      </div>)
    }
  }
  return withData(WrappedComponent)
}
