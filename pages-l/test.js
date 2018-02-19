import {Component} from 'react'
import Router from 'next/router'
import Head from 'next/head'
import HomeSlider from '../components/HomeSlider/HomeSlider'

export default class test extends Component {
  render(){
    return (
      <div>
        <Head>
          <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        </Head>
        <HomeSlider/>
      </div>
    )
  }
}
