import {Component} from 'react'
import Router from 'next/router'

import withLayout from '../components/withLayout'
import PageTitle from '../components/common/PageTitle/PageTitle'
import HeroSection from '../components/KttvPage/HeroSection/HeroSection'
import Body from '../components/KttvPage/Body'

const breadcrumbs = [
  {title: 'Home', link:'/'},
  {title: 'KTT Television', active: true},
]
class KttvPage extends Component {
  render(){
    return (
      <div>
        <PageTitle breadcrumbs={breadcrumbs} title={"KTT Television"} isMediaPage isTelevisionPage>
          <HeroSection />
        </PageTitle>
        <Body />
      </div>
    )
  }
}

export default withLayout(KttvPage)
