import React from 'react'
import Head from 'next/head'
/*import { graphql} from 'react-apollo'
import gql from 'graphql-tag'
import 'isomorphic-fetch'*/

import withData from '../lib/withData'


export default function withLayout(Child, opts) {
  class WrappedComponent extends React.Component {
    static async getInitialProps(context) {
      let ChildProps = {};

      if (Child.getInitialProps) {
        ChildProps = await Child.getInitialProps(context)
      }

      return {
        ...ChildProps,
      }
    }

    render() {
      //console.log(opts);
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
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.4.1/css/simple-line-icons.css"/>
          </Head>
          <div>
            <Child {...this.props}/>
          </div>
        </div>
      )
    }
  }

  return withData(WrappedComponent)
}
