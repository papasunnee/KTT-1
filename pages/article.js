import {Component} from 'react'
import Router from 'next/router'
import Head from 'next/head'

import withLayout from '../components/withLayout'
import PageTitle from '../components/common/PageTitle/PageTitle'
import HeroSection from '../components/ArticlePage/HeroSection/HeroSection'
import TextBody from '../components/ArticlePage/TextBody'

const breadcrumbs = [
  {title: 'Home', link:'/'},
  {title: 'News', link:'/news'},
  {title: 'Article', active: true},
]

class ArticlePage extends Component {
  render(){
    return (
      <div>
        <Head>
          <title>KTT4President | Article</title>
        </Head>
        <HeroSection />
        <PageTitle title={"You First: What it Really Means"} breadcrumbs={breadcrumbs}/>
        <TextBody />
      </div>
    )
  }
}

export default withLayout(ArticlePage)
