import FaFacebook from 'react-icons/lib/fa/facebook'
import FaTwitter from 'react-icons/lib/fa/twitter'
import FaGP from 'react-icons/lib/fa/google-plus'
import FaInstagram from 'react-icons/lib/fa/instagram'
import FaRss from 'react-icons/lib/fa/feed'
import FaLang from 'react-icons/lib/fa/language'
import {DropdownButton, MenuItem} from 'react-bootstrap'

import dynamic from 'next/dynamic'
const LangTranslateScripts = dynamic(
  import ('./Scripts--'),
  {ssr: false}
)

const iconStyles = {
  "color": "#FFFFFF"
}
const social = (props) => {
  return (
    <ul className="list-inline list-inline-sm" style={{color: 'white'}}>
      {/*<li><a href="/facebook" style={iconStyles}><FaFacebook/></a></li>
      <li><a href="/twitter" style={iconStyles}><FaTwitter/></a></li>
      <li><a href="/google-plus" style={iconStyles}><FaGP/></a></li>
      <li><a href="/instagram" style={iconStyles}><FaInstagram/></a></li>
      <li><a href="/rss" style={iconStyles}><FaRss/></a></li>*/}      
      <li>
        <div id="google_translate_element"></div>
        <LangTranslateScripts />
      </li>    
    </ul>
  )
}
export default social
