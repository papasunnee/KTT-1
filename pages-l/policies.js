import {Component} from 'react'
import Head from 'next/head'

import Policies from '../components/HomePage/Policies/Policies'

class HomePage extends Component {
  render(){
    return (
      <div>
        <Head>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
        </Head>
        <Policies />
      </div>
    )
  }
}

export default (HomePage)
