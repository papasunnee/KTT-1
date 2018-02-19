//import TopNav from './TopNav'

const HeroSection = (props) => {
  return (
    <section className="section-60 section-lg-143 section-lg-bottom-155 bg-image-center bg-image-home-5"
      style={{
        backgroundImage: 'url("/static/images/dantokpa-traffic.jpg")'
      }}>
      <div className="shell-fluid">
        <div className="range range-xs-center range-md-left range-lg-left text-md-left">
          <div className="cell-sm-10 cell-md-8 cell-lg-7 cell-md-middle cell-md-preffix-1">
            <h2 style={{fontSize: '90px', paddingLeft: '30px', marginBottom: '-30px'}}>YOU</h2>
            <h1 className="header-preffix text-bold offset-top-10" style={{fontSize: '110px', paddingBottom: '5px'}}>First</h1>
            {/*<div className="offset-top-45">
              <div className="veil reveal-sm-block">
                <h6 className="text-gray-light">Joseph Parker can give you and the local community more than ever. His goal is to develop the state in the most innovative way.</h6>
              </div>
              <div className="offset-top-30 offset-xl-top-55">
                <div className="group-xl">
                  <div><a href="wt_62309.html#" className="btn btn-primary">view the program</a></div>
                  <div><a href="wt_62309.html#" className="btn btn-secondary-outline">learn more</a></div>
                </div>
              </div>
            </div>*/}
          </div>
        </div>
      </div>
    </section>
  )
}
export default HeroSection
