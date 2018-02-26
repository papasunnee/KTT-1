import TopNav from './TopNav'
import BottomNav from './BottomNavbar/BottomNav'

const Header = (props) => {
  return (
    <header className="page-header">
      {/*<!-- RD Navbar Transparent-->*/}
      <div className="rd-navbar-wrap">
        <nav className="rd-navbar rd-navbar-top-panel rd-navbar-default rd-navbar-with-panel" data-layout="rd-navbar-fixed" data-sm-layout="rd-navbar-fixed" data-md-layout="rd-navbar-fullwidth" data-md-device-layout="rd-navbar-fixed" data-lg-device-layout="rd-navbar-fixed" data-lg-layout="rd-navbar-static" data-sm-stick-up="true" data-md-stick-up="true" data-lg-stick-up="true" data-md-stick-up-offset="75px" data-lg-stick-up-offset="105px" data-lg-auto-height="true" data-auto-height="false">
          <div className="rd-navbar-inner">
            {/*<!-- RD Navbar Top Panel-->*/}
            <TopNav />
            <BottomNav active={props.active}/>
          </div>
        </nav>
      </div>
    </header>
  )
}
export default Header
