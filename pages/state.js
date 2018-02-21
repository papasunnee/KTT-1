import {Component} from 'react'
import Router from 'next/router'

import withLayout from '../components/withLayout'
import PageTitle from '../components/common/PageTitle/PageTitle'
import HeroSection from '../components/StatePage/HeroSection/HeroSection'
import TextBody from '../components/StatePage/TextBody'

const defaultBreadcrumbs = [
  {title: 'Home', link:'/'},
  {title: 'Country', link:'/country'},
  {title: 'State', active: true},
]
class StatePage extends Component {
  static async getInitialProps ({ req, query}) {
    //console.log(query.state);
    //breadcrumbs[2].title = query.state
    const _breadcrumbs = [
      {title: 'Home', link:'/'},
      {title: 'Country', link:'/country'},
      {title: query.state, active: true},
    ]

    return {query, _breadcrumbs}
  }
  render(){
    const {_breadcrumbs} = this.props;
    const breadcrumbs = _breadcrumbs || defaultBreadcrumbs;
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
