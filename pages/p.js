import {Component} from 'react'
import Router from 'next/router'

import withLayout from '../components/withLayout'
import Gallery from '../components/GalleryPage/Gallery/Gallery'

class HomePage extends Component {
  render(){
    return (
      <div>
        <Gallery />
      </div>
    )
  }
}

export default withLayout(HomePage, {activePage: 'home'})
