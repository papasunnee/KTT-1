import { Grid, Row, Col} from 'react-bootstrap'
import Social from '../Header/Social'
import Policies from './Policies'
import ChoiceContent from '../../HomePage/ChoiceContent/ChoiceContent'


const Footer = (props) => {
  return (
    <div  style={{marginTop: '30px'}}>
    <Policies />
    <ChoiceContent addClass='addClass' title='NIGERIA : A BEACON OF HOPE' content = 'How can a nation, with so much respect and dedication to religion, in contrast be filled with lost hopes, shattered dreams, fear and insecurity, violence, corruption, deprivation, hunger, and injustice? Under my leadership, our country, Nigeria, must give hope to the poor, weak and vulnerable, boldness and freedom to speak the truth, expose and punish corruption without bias, reduce inequality, and secure our future as a nation. Nigeria will become a land of hope and opportunity. ' />
    <footer className="mainfooter" role="contentinfo">
      <div className="footer-middle">
      <h4 style={{color : '#b2b2b2'}}>A New Nigeria, where</h4>
        <h2 style={{
          textAlign : 'center' ,
          color : '#ffffff',
          fontWeight : 'bolder'
        }}>NO ONE IS LEFT BEHIND <span style={{color : 'red'}}>!</span></h2>
      <Grid>
        <Row>
          <Col md={3} sm={6}>
            {/*<!--Column1-->*/}
            {/* <div className="footer-pad">
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
            </div> */}
          </Col>
          <Col md={3} sm={6}>
            {/*<!--Column1-->*/}
            {/* <div className="footer-pad">
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
            </div> */}
          </Col>
          <Col md={3} sm={6}>
            {/*<!--Column1-->*/}
            {/* <div className="footer-pad">
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
            </div> */}
          </Col>
          <Col md={3} sm={6}>
            {/*<!--Column1-->*/}
            {/* <div className="footer-pad">
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
            </div> */}
          </Col>
        </Row>
      </Grid>
      </div>
      <div className="footer-bottom">
        <Grid>
          <Row>
            <Col xs={12}>
              {/*<!--Footer Bottom-->*/}
              <p className="privacylinks">
                <a href="#">Privacy Policy</a>  <span>|</span>
                <a href="#">Cookie Policy</a> <span>|</span>
                <a href="#">Terms of Use</a> <span>|</span>
                <a href="#">Disclaimer</a>
              </p>
              <p className="text-xs-center" style={{fontSize: '15px'}}>&copy; Copyright 2018 - KTT Presidential Campaign.  All rights reserved <span style={{color:'#DC3545'}}>|</span> Powered by <a style={{color : '#DC3545'}}>Altitude Technology </a> </p>
            </Col>
          </Row>
        </Grid>
      </div>
    </footer>
    </div>
  )
}
export default Footer
