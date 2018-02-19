import {Component} from 'react'
import Script from 'react-load-script'

class Scripts extends Component {
  componentDidMount(){
    //this.googleTranslateElementInit();
    console.log('mounted');
  }
  handleScriptLoad(){
    console.log('Language Script loaded');
    const googleTranslateElementInit = new google.translate.TranslateElement({pageLanguage: 'en', includedLanguages: 'en,ha,ig,yo', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');    
    googleTranslateElementInit();
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
