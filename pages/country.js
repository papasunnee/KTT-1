import {Component} from 'react'
import Router from 'next/router'
import Head from 'next/head'

import withLayout from '../components/withLayout'
import PageTitle from '../components/common/PageTitle/PageTitle'
import HeroSection from '../components/CountryPage/HeroSection/HeroSection'
import TextBody from '../components/CountryPage/TextBody'

const breadcrumbs = [
  {title: 'Home', link:'/'},
  {title: 'Country', active: true},
]
class CountryPage extends Component {
  render(){
    return (
      <div>
        <Head>
          <title>KTT4President | Nigeria</title>
        </Head>
        <HeroSection />
        <PageTitle breadcrumbs={breadcrumbs}/>
        <TextBody />
      </div>
    )
  }
}

export default withLayout(CountryPage, {activePage: 'states'})
