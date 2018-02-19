import {Component} from 'react'
import dynamic from 'next/dynamic'

const F = dynamic(
  import ('./f.js'),
  { ssr: false }
)

class Scripts extends Component {
  constructor(props){
    super(props)
    this.state = {showBar: false}
  }
  componentDidMount(){
    console.log(F.prototype);
    console.log('F.google');
    console.log(F.google);
    /*const googleTranslateElementInit = () =>{
      new google.translate.TranslateElement({pageLanguage: 'en', includedLanguages: 'en,ha,ig,yo', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
    }
    googleTranslateElementInit();
    setState({showBar: true})*/
  }

  render(){
    return(
      <div>
        {(this.state.showBar) && (
          <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
        )}
      </div>
    )
  }
}
export default Scripts
