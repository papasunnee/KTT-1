import {Component} from 'react'

class Scripts extends Component {
  componentDidMount(){
    //this.googleTranslateElementInit();
    console.log('mounted');
  }

  render(){
    console.log('googles');
    console.log(google);
    /*const this.googleTranslateElementInit = () =>{
      new google.translate.TranslateElement({pageLanguage: 'en', includedLanguages: 'en,ha,ig,yo', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
    }*/

    return (
      <div>
        <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
        <script type="text/javascript">
          const this.googleTranslateElementInit = () =>{
            new google.translate.TranslateElement({pageLanguage: 'en', includedLanguages: 'en,ha,ig,yo', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
          }
          this.googleTranslateElementInit();
        </script>
      </div>
    )
  }
}

export default Scripts
