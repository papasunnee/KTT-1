import {Component} from 'react'
import Router from 'next/router'

export default class Home extends Component {
  render(){
    return (
      <div style={{
        "width": "100%",
        "height": "100vh",
        "max-height": "100%",
        "margin": "0",
        "padding": "0",
        "backgroundImage": "url('/static/img/nigeria-wallpaper.jpg')",
        "backgroundSize": "100% 100%",
        "backgroundRepeat": "no-repeat"
      }}></div>
    )
  }
}
