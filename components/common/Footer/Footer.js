import { Grid, Row, Col} from 'react-bootstrap'
import Social from '../Header/Social'
import Policies from './Policies'

const Footer = (props) => {
  return (
    <div  style={{marginTop: '30px'}}>
      <Policies />
      <footer className="mainfooter" role="contentinfo">
        <div className="footer-middle">
        <Grid>
          <Row>
            <Col md={3} sm={6}>
              {/*<!--Column1-->*/}
              <div className="footer-pad">
                <h5>Address</h5>
                <hr style={{ width : '20%' , padding : '0 !important', 'margin' : '0', border : ' 1px solid #DC3545'}}/>
                <address>
                  <ul className="list-unstyled">
                      <li>
                          Lorem Ipsum<br/>
                          212  Kumasi Crescent<br/>
                          Abuja<br/>
                          234<br/>
                      </li>
                      <li>
                          Phone: 0
                      </li>
                  </ul>
              </address>
              </div>
            </Col>
            <Col md={3} sm={6}>
              {/*<!--Column1-->*/}
              <div className="footer-pad">
                <h5>Services</h5>
                <hr style={{ width : '20%' , padding : '0 !important', 'margin' : '0', border : ' 1px solid #DC3545'}}/>
                <ul className="list-unstyled">
                  <li><a href="#">Lorem Ipsum</a></li>
                  <li><a href="#">Lorem Ipsum</a></li>
                  <li><a href="#">Lorem Ipsum</a></li>
                  <li><a href="#">Lorem Ipsum</a></li>
                  <li><a href="#">Lorem Ipsum</a></li>
                  <li><a href="#">Lorem Ipsum</a></li>
                </ul>
              </div>
            </Col>
            <Col md={3} sm={6}>
              {/*<!--Column1-->*/}
              <div className="footer-pad">
                <h5> Information</h5>
                <hr style={{ width : '20%' , padding : '0 !important', 'margin' : '0', border : ' 1px solid #DC3545'}}/>
                <ul className="list-unstyled">
                  <li><a href="#">Lorem Ipsum</a></li>
                  <li><a href="#">Lorem Ipsum</a></li>
                  <li><a href="#">Lorem Ipsum</a></li>
                  <li><a href="#">Lorem Ipsum</a></li>
                  <li><a href="#">Lorem Ipsum</a></li>
                  <li><a href="#">Lorem Ipsum</a></li>
                </ul>
              </div>
            </Col>
            <Col md={3} sm={6}>
              {/*<!--Column1-->*/}
              <div className="footer-pad">
                <h5>Live Twitter Feeds</h5>
                <hr style={{ width : '20%' , padding : '0 !important', 'margin' : '0', border : ' 1px solid #DC3545'}}/>
                <ul className="list-unstyled">
                <li><a href="#">Lorem Ipsum</a></li>
                  <li><a href="#">Lorem Ipsum</a></li>
                  <li><a href="#">Lorem Ipsum</a></li>
                  <li><a href="#">Lorem Ipsum</a></li>
                  <li><a href="#">Lorem Ipsum</a></li>
                  <li>&nbsp;</li>
                 <li>
                   <Social />
                 </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Grid>
        </div>
        <div className="footer-bottom">
          <Grid>
            <Row>
              <Col xs={12}>
                {/*<!--Footer Bottom-->*/}
                <p className="text-xs-center" style={{fontSize: '10px'}}>&copy; Copyright 2018 - Altitude Technology.  All rights reserved.</p>
              </Col>
            </Row>
          </Grid>
        </div>
      </footer>
    </div>
  )
}
export default Footer
