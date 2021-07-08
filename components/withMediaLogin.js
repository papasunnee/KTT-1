import React from 'react'
import Head from 'next/head'
/* import { graphql} from 'react-apollo'
import gql from 'graphql-tag' */
//import 'isomorphic-fetch'
import { Container} from 'reactstrap';

//import withData from '../lib/withData'
//import Breadcrumb from './MediaPortal/components/Breadcrumb/Breadcrumb'
//import Sidebar from './MediaPortal/components/adminUIComponents/Sidebar/Sidebar'
//import Header from './MediaPortal/components/adminUIComponents/Header/Header'

export default function withMediaLogin(Child, options) {
  class WrappedComponent extends React.Component {
    static async getInitialProps(context) {
      let ChildProps = {};

      if (Child.getInitialProps) {
        ChildProps = await Child.getInitialProps(context)
      }

      return {
        ...ChildProps
      }
    }

    render() {
      /*console.log('opts');
      console.log(options);
      const opts = options || {
        noLayout: false
      };*/
      //const breakingNewsArticles = this.props.articles.gistMany;
      return (
        <div>
          <Head>
            <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
            <meta charSet="utf-8"/> {/* <!-- Stylesheets--> */}
            {/*<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Montserrat:400,700%7CLibre+Baskerville:300,400,400i,700,700i%7CLato:400,400i,700,900"/>*/}
            <link rel="stylesheet" href="/static/css/media-portal/style.css"/>
            {/*<link rel="stylesheet" href="/static/css/meda-portal/dropdown-menu-right.css"/>
            <link rel="stylesheet" href="/static/css/media-portal/flag-icon.min.css"/>
            <link rel="stylesheet" href="/static/css/media-portal/font-awesome.min.css"/>
            <link rel="stylesheet" href="/static/css/media-portal/simple-line-icons.css"/>*/}
          </Head>
          {/*<Child {...this.props}/>*/}
        </div>
    )}
  }
  //return withData(WrappedComponent)
  return (WrappedComponent)
}
