import {Component} from 'react'
import Script from 'react-load-script'

class Scripts extends Component {
  componentDidMount(){
    console.log('mounted');
  }
  handleScriptLoad(){
    console.log('AddThis Script loaded');
    addthis.init();
  }
  render(){
    return (
        <Script
        url="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5a8bfd531159be8a"
        onLoad={this.handleScriptLoad.bind(this)}
        />
    )
  }
}

export default Scripts
