import {Component} from 'react'
import Router from 'next/router'

import withLayout from '../components/withLayout'
import Policies from '../components/HomePage/Policies/Policies'

class HomePage extends Component {
  render(){
    return (
      <div>
        <Policies /> 
      </div>
    )
  }
}

export default withLayout(HomePage, {activePage: 'home'})
