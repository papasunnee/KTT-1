import {Component} from 'react'
import ParagraphText from './ParagraphText'
import FullImage from './FullImage/FullImage'
import {Grid, Row, Col } from 'react-bootstrap'

export default class Home extends Component {
  render(){
    return (
      <Grid>
        <Row>
          <Col md={9}>
            <Row style={{textAlign: 'left'}}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam,
              </p>
            </Row>
            <br/>
            <Row style={{textAlign: 'left'}}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam,
              </p>
            </Row>
            <br/>
          </Col>
          <Col md={3}>
            <div className="cell-sm-6 cell-lg-12">
              <h6 className="text-bold" style={{textAlign: 'left'}}>States in Nigeria</h6>
              <hr className="divider divider-iron"/>
              <div>
                <div className="range">
                  <div className="cell-xs-6">
                    <ul className="list list-marked">
                      <li><a href="post-page.html#" className="text-primary">Abia State</a></li>
                      <li><a href="post-page.html#" className="text-primary">Abia State</a></li>
                      <li><a href="post-page.html#" className="text-primary">Abia State</a></li>
                      <li><a href="post-page.html#" className="text-primary">Abia State</a></li>
                      <li><a href="post-page.html#" className="text-primary">Abia State</a></li>
                      <li><a href="post-page.html#" className="text-primary">Abia State</a></li>
                    </ul>
                  </div>
                  <div className="cell-xs-6">
                    <ul className="list list-marked">
                      <li><a href="post-page.html#" className="text-primary">Abia State</a></li>
                      <li><a href="post-page.html#" className="text-primary">Abia State</a></li>
                      <li><a href="post-page.html#" className="text-primary">Abia State</a></li>
                      <li><a href="post-page.html#" className="text-primary">Abia State</a></li>
                      <li><a href="post-page.html#" className="text-primary">Abia State</a></li>
                      <li><a href="post-page.html#" className="text-primary">Abia State</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Grid>
    )
  }
}
