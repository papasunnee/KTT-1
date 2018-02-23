import {Component} from 'react'
import Router from 'next/router'

import withLayout from '../components/withLayout'
//import PollsSection from '../components/HomePage/PollsSection/PollsSection'

class HomePage extends Component {
  render(){
    return (
      <div>
        {/*<PollsSection />*/}
      </div>
    )
  }
}

export default withLayout(HomePage, {activePage: 'home'})
