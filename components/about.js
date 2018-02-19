import {Component} from 'react'
import Router from 'next/router'
import Head from 'next/head'
import Header from './components/Header/Header'
import BreakingNewsBar from './components/BreakingNewsBar/BreakingNewsBar'
import About from './about/index'
import Footer from './components/Footer/Footer'
import Scripts from './components/Scripts/Scripts'

export default class Home extends Component {
  render(){
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
        </Head>
        <div className="pagebody">
          <div className="page text-center">
            <Header />
            <hr/>
            <BreakingNewsBar />
            <About />
            <Footer />
          </div>
          <Scripts />
        </div>
      </div>
    )
  }
}
