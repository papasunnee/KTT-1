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
        <HeroSection imageSrc={imageSrc} />
        <PageTitle title={title} breadcrumbs={breadcrumbs} yearQuote=' '/>
        <div className="container">
           <div className="row">
              <div className="col-md-offset-6 col-md-6" style={{height : '300px', backgroundColor : '#C71E24'}}>
                <ul style={{paddingTop : '30px' , color : 'white' , textAlign : 'left'}}>
                  <li>jksjksd fjsdkfjskl fjs kld ksfjsd fjk fsjd fjksd</li>
                  <li>jksjksd fjsdkfjskl fjs kld jdhf jksdhfjsd</li>
                  <li>jksjksd fjsdkfjskl fjs kld kdjfks jfksdjfkl djflks fjk jfs</li>
                  <li>jksjksd fjsdkfjskl fjs kld jkf jsd</li>
                  <li>jksjksd fjsdkfjskl fjs kldkd jkf sdkfj skld fjlskd</li>
                  <li>jksjksd fjsdkfjskl fjs kld  jkhfksd  djkh sdj h</li>
                  <li>jksjksd fjsdkfjskl fjs kld jdhf jksdhfjsd</li>
                  <li>jksjksd fjsdkfjskl fjs kld kdjfks jfksdjfkl djflks fjk jfs</li>
                  <li>jksjksd fjsdkfjskl fjs kld jkf jsd</li>
                  <li>jksjksd fjsdkfjskl fjs kldkd jkf sdkfj skld fjlskd</li>
                </ul>
              </div>
           </div> 
           <div className="row">
              <div className=" col-md-6" style={{height : '300px', backgroundColor : '#1B4478'}}>
              <ul style={{paddingTop : '30px' , color : 'white' , textAlign : 'left'}}>
                  <li>jksjksd fjsdkfjskl fjs kld ksfjsd fjk fsjd fjksd</li>
                  <li>jksjksd fjsdkfjskl fjs kld jdhf jksdhfjsd</li>
                  <li>jksjksd fjsd kfjskl fjs kld kdjfks jfksdjfkl djflks fjk jfs</li>
                  <li>jksjksd fjsdkfjskl fjs kld jkf jsd</li>
                  <li>jksjksd fjsdkfj skl fjs kldkd jkf sdkfj skld fjlskd</li>
                  <li>jksjksd fjs dkfjskl fjs kld  jkhfksd  djkh sdj h</li>
                  <li>jksjksd fjsdkf jskl fjs kld jdhf jksdhfjsd</li>
                  <li>jksjksd fjsd kfjskl fjs kld kdjfks jfksdjfkl djflks fjk jfs</li>
                  <li>jksjksd fjs dkfjskl fjs kld jkf jsd</li>
                  <li>jksjksd fjsdkf jskl fjs kldkd jkf sdkfj skld fjlskd</li>
                </ul>
              </div>
           </div>
        </div>
      </div>
    )
  }
}

export default withLayout(AboutPage)
