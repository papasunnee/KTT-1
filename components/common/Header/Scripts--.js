import {Component} from 'react'
import Script from 'react-load-script'

class Scripts extends Component {
  componentDidMount(){    
    console.log('mounted');
  }
  handleScriptLoad(){
    console.log('Language Script loaded');    
    this.googleTranslateElementInit = () => {
      new google.translate.TranslateElement(
      {
        pageLanguage: 'en', 
        includedLanguages: 'en,ha,ig,yo', 
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE
      }, 'google_translate_element');
    }
    if (google.translate.TranslateElement){      
      setTimeout(()=>{this.googleTranslateElementInit()}, 200)
    } else {
      setTimeout(()=>{this.googleTranslateElementInit()}, 1000)
    }
  }
  render(){
    return (
      <div>
        <Script
        url="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        onLoad={this.handleScriptLoad.bind(this)}
        />
      </div>
    )
  }
}

export default Scripts
