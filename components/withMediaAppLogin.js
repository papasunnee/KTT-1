import React from 'react'
import Head from 'next/head'
/*import { graphql} from 'react-apollo'
import gql from 'graphql-tag'
import 'isomorphic-fetch'*/

//import withData from '../lib/withData'

/*import Header from './common/Header/Header'
import BreakingNewsBar from './common/BreakingNewsBar/BreakingNewsBar'
import Footer from './common/Footer/Footer'
import Scripts from './common/Scripts/Scripts'*/

//import 'bootstrap/dist/css/bootstrap.css';
//import '../static/css/styles.css';
//import '../static/html/css/style.css';


export default function withLayout(Child, opts) {
  class WrappedComponent extends React.Component {
    static async getInitialProps(context) {
      let ChildProps = {};

      if (Child.getInitialProps) {
        ChildProps = await Child.getInitialProps(context)
      }

      return {
        ...ChildProps,
        //articles,
      }
    }

    render() {
      console.log(opts);
      const opts = opts || {};
      return (
        <div>
          <Head>
            <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
            <meta charSet="utf-8"/>
            {/*<link rel="icon" href="wt_62309/images/favicon.ico" type="image/x-icon"/>*/}
            {/*<!-- Stylesheets-->*/}
            <link rel="stylesheet" href="/static/css/media-portal/style.css"/>
            <link rel="stylesheet" href="/static/css/meda-portal/dropdown-menu-right.css"/>
            <link rel="stylesheet" href="/static/css/media-portal/flag-icon.min.css"/>
            <link rel="stylesheet" href="/static/css/media-portal/font-awesome.min.css"/>
            <link rel="stylesheet" href="/static/css/media-portal/simple-line-icons.css"/>
            {/*<script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-59c55ee9a6332134"></script>*/}
          </Head>
          <div>
            <Child {...this.props}/>
          </div>
        </div>
      )
    }
  }
  //return withData(WrappedComponent)
  return WrappedComponent
}
