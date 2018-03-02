import {Component} from 'react'
import Router from 'next/router'
import Head from 'next/head'

import withLayout from '../components/withLayout'
import PageTitle from '../components/common/PageTitle/PageTitle'
import HeroSection from '../components/PolicyPage/HeroSection/HeroSection'
import TextBody from '../components/PolicyPage/TextBody'

const defaultBreadcrumbsbreadcrumbs = [
  {title: 'Home', link:'/'},
  {title: 'Policy', active: true},
]

class AboutPage extends Component {
  static async getInitialProps ({ req, query}) {
    const _breadcrumbs = [
      {title: 'Home', link:'/'},
      {title: 'Policy', link:'/'},
      {title: query.policy, active: true},
    ]
    return {query, _breadcrumbs}
  }
  render(){
    const {_breadcrumbs, query} = this.props;
    const title = query.policy || ''
    const imageSrc = query.imageSrc || ''
    const breadcrumbs = _breadcrumbs || defaultBreadcrumbs
    return (
      <div>
<<<<<<< HEAD
        <HeroSection />
          <PageTitle title={title} breadcrumbs={breadcrumbs}/>
=======
        <HeroSection imageSrc={imageSrc} />
        <PageTitle title={title} breadcrumbs={breadcrumbs}/>
>>>>>>> 2b6d5cb5330a9ad78f74372d22e4c9f03f8b59e0
        <TextBody />
      </div>
    )
  }
}

export default withLayout(AboutPage)
