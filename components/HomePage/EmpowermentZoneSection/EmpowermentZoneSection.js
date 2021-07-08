import { Grid, Row, Col} from 'react-bootstrap'
import Video from './Video'

const EmpowermentZoneSection = (props) => {
  return (
    <section className="section-fullwidth-events">
      <div >
        {/*<div className="range range-xs-center range-lg-left text-lg-left">*/}
          <Row style={{backgroundColor: '#09123A'}}>
            {/*<Col md={6} className="cell-xs-10 cell-sm-12 cell-lg-9">*/}
            <Col md={6}>
              {/*<div className="inset-lg-left-20 inset-xl-left-110 events fill-height">*/}
              <div className="inset-lg-right-20 inset-xl-right-110 fill-height">
                <article className="post post-event post-event-fullwidth">
                  <div className="post-image-wrap"
                    style={{
                      //backgroundImage: 'url(https://www.tolet.com.ng/blog/wp-content/uploads/2017/02/calabar-Nigeria.jpg)',
                      backgroundImage: 'url(/static/img/ktttv2.png)',
                      minHeight: '350px',
                      backgroundSize: '100%'
                    }}>
                    {/*<img src="/static/html/images/pages/events-7-640x370.jpg" width="640" height="370" alt="" className="img-responsive"/>*/}
                  </div>
                  <Video />
                </article>
              </div>
            </Col>
            {/*<Col md={6} className="cell-xs-10 cell-md-8 cell-lg-3 section-60 section-lg-120">*/}
            <Col md={6} style={{padding: "50px", /*marginLeft: '-25px'*/}}>
              {/*<h2 className="text-bold" style={{fontSize: '50px', color: 'white'}}>TURAKI EMPOWERMENT ZONE</h2>*/}
              <div>
                  <span style={{
                    fontSize: '70px',
                    fontWeight: '500',
                    lineHeight: '1.2',
                    textAlign: 'center',
                    letterSpacing : '10px',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
                    color: '#dc3545',
                    textShadow:'-1px -1px 0 #dc3545, 1px -1px 0 #dc3545,-1px 1px 0 #dc3545,1px 1px 0 #dc3545'
                  }}>KTT. YEZ</span>
              </div>
              {/* <div>
                  <span style={{
                    fontSize: '50px',
                    fontWeight: '300',
                    lineHeight: '1.2',
                    textAlign: 'center',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
                    color: '#fff',
                    textShadow:'-1px -1px 0 #fff, 1px -1px 0 #fff,-1px 1px 0 #fff,1px 1px 0 #fff'
                  }}>EMPOWERMENT ZONE</span>
              </div> */}
              <div className="offset-top-20 offset-md-top-40"><a href="" className="btn btn-secondary" style={{borderColor: 'white', backgroundColor: '#09123A'}}>LET'S GET STARTED</a></div>
            </Col>
          </Row>
          {/*<div className="cell-xs-10 cell-md-8 cell-lg-3 section-60 section-lg-120">

          </div>
          <div className="cell-xs-10 cell-sm-12 cell-lg-9">

          </div>*/}
        {/*</div>*/}
      </div>
    </section>
  )
}
export default EmpowermentZoneSection
