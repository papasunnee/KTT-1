import {Component} from 'react'
import Router from 'next/router'

import withLayout from '../components/withLayout'
import PageTitle from '../components/common/PageTitle/PageTitle'
import HeroSection from '../components/StatePage/HeroSection/HeroSection'
import TextBody from '../components/StatePage/TextBody'

const breadcrumbs = [
  {title: 'Home', link:'/'},
  {title: 'Country', link:'/country'},
  {title: 'Abia State', active: true},
]
class StatePage extends Component {
  render(){
    return (
      <div>
        <HeroSection />
        <PageTitle breadcrumbs={breadcrumbs}/>
        <TextBody />
      </div>
    )
  }
}

export default withLayout(StatePage, {activePage: 'states'})
