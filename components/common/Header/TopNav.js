import Social from './Social'
import MdPhone from 'react-icons/lib/md/phone'
import MdPlace from 'react-icons/lib/md/place'
import MdMailOutline from 'react-icons/lib/md/mail-outline'

const TopNav = (props) => {
  return (
    <div className="rd-navbar-top-panel"
      style={{
        backgroundColor : '#12806B',
        fontWeight : 300,
        height: '50px',
        fontSize: '12px',
        marginTop: '-10px',
        color: 'white'
      }}
    >
      <div className="left-side">
        {/*<!-- Contact Info-->*/}
        <address className="contact-info text-left">
          <div className="reveal-inline-block">
            <div className="unit unit-middle unit-horizontal unit-spacing-xs unit-xs-top">
              <div className="unit-left"><MdPhone /></div>
              <div className="unit-body">
                <div className="p"><a href="callto:#" className="text-alto">234-818-8555-611</a></div>
              </div>
            </div>
          </div>
          <div className="reveal-inline-block">
            <div className="unit unit-middle unit-horizontal unit-spacing-xs unit-xs-top">
              <div className="unit-left"><MdPlace/></div>
              <div className="unit-body">
                <div className="p"><a href="wt_62309/contacts.html" className="text-alto">8 Spring Drive, Fort Royal Homes, Abuja</a></div>
              </div>
            </div>
          </div>
          <div className="reveal-inline-block">
            <div className="unit unit-middle unit-horizontal unit-spacing-xs unit-xs-top">
              <div className="unit-left"><MdMailOutline/></div>
              <div className="unit-body">
                <div className="p"><a href="mailto:#" className="text-alto">info@demolink.org</a></div>
              </div>
            </div>
          </div>
        </address>
      </div>
      <div className="right-side">
        <Social />
      </div>
    </div>
  )
}
export default TopNav
