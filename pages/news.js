import {Component} from 'react'
import Router from 'next/router'
import Head from 'next/head'

import withLayout from '../components/withLayout'
import PageTitle from '../components/common/PageTitle/PageTitle'
import HeroSection from '../components/KttvPage/HeroSection/HeroSection'
import Body from '../components/KttvPage/Body'
// import fetchArticleList from '../components/common/fetchArticleList'

const breadcrumbs = [
  {title: 'Home', link:'/'},
  {title: 'KTT Television', active: true},
]
class KttvPage extends Component {
  render(){
    const articles = this.props.articles || [];
    return (
      <div>
        <Head>
          <title>KTT4President | KTT Tv</title>
          <link rel="stylesheet" href="/static/css/modal-video.css"/>
          {/* <link rel="stylesheet prefetch" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css"/> */}
        </Head>
        <PageTitle breadcrumbs={breadcrumbs} title={" "} isMediaPage isTelevisionPage>
          <HeroSection />
        </PageTitle>
        <Body articles={articles.gistMany}/>
      </div>
    )
  }
}

export default withLayout(KttvPage)
