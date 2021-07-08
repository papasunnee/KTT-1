import Social from './Social'

const TopNav = (props) => {
  return (
    <div className="rd-navbar-top-panel"
      style={{
        backgroundColor : '#09123A',
        fontWeight : 300,
        height: '50px',
        fontSize: '20px',
        marginTop: '-10px',
        color: 'white'
      }}
    >
      <div className="left-side" style={{paddingLeft: '200px', float: 'none', textAlign: 'center'}}>
        {/*<!-- Contact Info-->*/}
        <address className="contact-info text-left">
          <div className="reveal-inline-block">
            <div className="unit unit-middle unit-horizontal unit-spacing-xs unit-xs-top">
              <div className="unit-left" style={{textAlign: 'center'}}>
                <div className="p"><a href="callto:#" className="text-alto">THE OFFICIAL PRESIDENTIAL CAMPAIGN WEBSITE OF KABIRU TANIMU TURAKI</a></div>
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
