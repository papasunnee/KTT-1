import Navbar from './Navbar'
import NavbarSearch from './NavbarSearch'

import styles from '../styles'

const BottomNav = (props) => {
  return (
    <div className="rd-navbar-bottom-panel"
      style={{
        height: '50px'
        //'background': '#005926',
      }}
    >
      {/*<!-- RD Navbar Panel-->*/}
      <div className="rd-navbar-panel" style={{background: 'white'}}>
        {/*<!-- RD Navbar Toggle-->*/}
        <button data-rd-navbar-toggle=".rd-navbar, .rd-navbar-nav-wrap" className="rd-navbar-toggle"><span></span></button>
        {/*<!-- RD Navbar Top Panel Toggle-->*/}
        <button data-rd-navbar-toggle=".rd-navbar, .rd-navbar-top-panel" className="rd-navbar-top-panel-toggle">
          <span style={{color: "#393a3c"}}></span>
        </button>
        {/*<!-- Navbar Brand-->*/}
        <div className="rd-navbar-brand">
          <a href="/" style={{'color': '#393a3c'}}>
          {/*<img src="/static/img/PDP-logo-50x33.png" alt="" width="37" height="26"/><span>KTT 2019</span>*/}
          <img src="/static/img/kttlogo.png" alt="" width="100" height="50"/>
          </a>
        </div>
      </div>
      <div className="rd-navbar-menu-wrap">
        <div className="rd-navbar-nav-wrap">
          <div className="rd-navbar-mobile-scroll">
            <Navbar active={props.active}/>
          </div>
        </div>
        {/*<!-- RD Navbar Search-->
        <NavbarSearch />*/}
      </div>
    </div>
  )
}
export default BottomNav
