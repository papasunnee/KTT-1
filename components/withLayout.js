import React from 'react'
import Head from 'next/head'
import { graphql} from 'react-apollo'
import gql from 'graphql-tag'
import 'isomorphic-fetch'

import withData from '../lib/withData'

import Header from './common/Header/Header'
import BreakingNewsBar from './common/BreakingNewsBar/BreakingNewsBar'
import Footer from './common/Footer/Footer'
import Scripts from './common/Scripts/Scripts'

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

      const baseUrl = context.req ? `${context.req.protocol}://${context.req.get('Host')}` : '';
      //Loading articles from the411ng api
      let res = await fetch(`${baseUrl}/fetch-breaking-articles`);
      let articles = await res.json();

      return {
        ...ChildProps,
        articles,
      }
    }

    render() {
      const opts = opts || {},
      breakingNewsArticles = this.props.articles.gistMany;
      return (
        <div>
          <Head>
            <meta name="format-detection" content="telephone=no"/>
            <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
            <meta charSet="utf-8"/>
            <link rel="icon" href="wt_62309/images/favicon.ico" type="image/x-icon"/>
            {/*<!-- Stylesheets-->*/}
            <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Montserrat:400,700%7CLibre+Baskerville:300,400,400i,700,700i%7CLato:400,400i,700,900"/>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
            <link rel="stylesheet" href="/static/css/styles.css"/>
            <link rel="stylesheet" href="/static/html/css/style.css"/>
            {/*<script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-59c55ee9a6332134"></script>*/}
          </Head>
          <div className="pagebody">
            <div className="page text-center">
              <Header active={opts.activePage || ''}/>
              <hr/>
              <BreakingNewsBar articles={breakingNewsArticles}/>
                <Child {...this.props}/>
              <Footer />
            </div>
            <Scripts />
          </div>
        </div>
      )
    }
  }
  return withData(WrappedComponent)
}
