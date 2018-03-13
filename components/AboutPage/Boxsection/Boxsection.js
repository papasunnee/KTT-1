import {Component} from 'react'
import Head from 'next/head'
import {Grid, Row, Col, Modal , OverlayTrigger,Tooltip,Button} from 'react-bootstrap'

export default class Boxsection extends Component {

    constructor(props, context) {
        super(props, context);
    
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    
        this.state = {
          show: false
        };
      }
    
      handleClose() {
        this.setState({ show: false });
      }
    
      handleShow() {
        this.setState({ show: true });
      }

  render(){
      const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;
    return (
        <div>
        <Head>
          <link rel="stylesheet" href="/static/css/profile/component.css" />
          <script type="text/javascript" src="/static/js/profile/modernizr.custom.js"></script>
          <script type="text/javascript" src="/static/js/profile/toucheffects.js"></script>
        </Head>
        <Modal show={this.state.show} onHide={this.handleClose} bsSize="large">
          <Modal.Header closeButton>
            {/* <Modal.Title>Title</Modal.Title> */}
          </Modal.Header>
          <Modal.Body>
            <h4>Descriptive Text</h4>
            <p>
                <img src="/static/images/dialogimage.png" style={{width : '100%'}} />
            </p>

            <hr />
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </p>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur
              et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
              auctor.
            </p>
            <p>
              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
              cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
              dui. Donec ullamcorper nulla non metus auctor fringilla.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>

        <Grid>
            <Row>
            <Col md={8}>
                <h3 className="text-bold" style={{textAlign: 'left'}}>Profile</h3>
                <hr className="divider divider-iron"/>
                <Row>
                
                    <Col md={6}>
                        <div class="grid cs-style-4">
                            <figure>
                                <div><img src="/static/images/profile/pro.png" alt="img05"/></div>
                                <figcaption>
                                    <h3>Education</h3>
                                    <span>KTT -19</span>
                                    <Button className="anchor" bsStyle="link" onClick={this.handleShow}>Take a Look</Button>
                                </figcaption>
                            </figure>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div class="grid cs-style-4">
                            <figure>
                                <div><img src="/static/images/profile/pro.png" alt="img06"/></div>
                                <figcaption>
                                    <h3>Profession</h3>
                                    <span>KTT -19</span>
                                    <Button className="anchor" bsStyle="link" onClick={this.handleShow}>Take a Look</Button>
                                </figcaption>
                            </figure>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div class="grid cs-style-4">
                            <figure>
                                <div><img src="/static/images/profile/pro.png" alt="img05"/></div>
                                <figcaption>
                                    <h3>Business</h3>
                                    <span>KTT -19</span>
                                    <Button className="anchor" bsStyle="link" onClick={this.handleShow}>Take a Look</Button>
                                </figcaption>
                            </figure>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div class="grid cs-style-4">
                            <figure>
                                <div><img src="/static/images/profile/pro.png" alt="img02"/></div>
                                <figcaption>
                                    <h3>Politics</h3>
                                    <span>KTT -19</span>
                                    <Button className="anchor" bsStyle="link" onClick={this.handleShow}>Take a Look</Button>
                                </figcaption>
                            </figure>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div class="grid cs-style-4">
                            <figure>
                                <div><img src="/static/images/profile/pro.png" alt="img04"/></div>
                                <figcaption>
                                    <h3>Family</h3>
                                    <span>KTT -19</span>
                                    <Button className="anchor" bsStyle="link" onClick={this.handleShow}>Take a Look</Button>
                                </figcaption>
                            </figure>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div class="grid cs-style-4">
                            <figure>
                                <div><img src="/static/images/profile/pro.png" alt="img04"/></div>
                                <figcaption>
                                    <h3>Philantrophy</h3>
                                    <span>KTT -19</span>
                                    <Button className="anchor" bsStyle="link" onClick={this.handleShow}>Take a Look</Button>
                                </figcaption>
                            </figure>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div class="grid cs-style-4">
                            <figure>
                                <div><img src="/static/images/profile/pro.png" alt="img01"/></div>
                                <figcaption>
                                    <h3>Hobbies & Travel</h3>
                                    <span>KTT -19</span>
                                    <Button className="anchor" bsStyle="link" onClick={this.handleShow}>Take a Look</Button>
                                </figcaption>
                            </figure>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div class="grid cs-style-4">
                            <figure>
                                <div><img src="/static/images/profile/pro.png" alt="img03"/></div>
                                <figcaption>
                                    <h3>Public Service</h3>
                                    <span>KTT -19</span>
                                    <Button className="anchor" bsStyle="link" onClick={this.handleShow}>Take a Look</Button>
                                </figcaption>
                            </figure>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div class="grid cs-style-4">
                            <figure>
                                <div><img src="/static/images/profile/pro.png" alt="img03"/></div>
                                <figcaption>
                                    <h3>Religion</h3>
                                    <span>KTT -19</span>
                                    <Button className="anchor" bsStyle="link" onClick={this.handleShow}>Take a Look</Button>
                                </figcaption>
                            </figure>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div class="grid cs-style-4">
                            <figure>
                                <div><img src="/static/images/profile/pro.png" alt="img05"/></div>
                                <figcaption>
                                    <h3>Chieftancy Titles</h3>
                                    <span>KTT -19</span>
                                    <Button className="anchor" bsStyle="link" onClick={this.handleShow}>Take a Look</Button>
                                </figcaption>
                            </figure>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div class="grid cs-style-4">
                            <figure>
                                <div><img src="/static/images/profile/pro.png" alt="img06"/></div>
                                <figcaption>
                                    <h3>Honour & Awards</h3>
                                    <span>KTT -19</span>
                                    <Button className="anchor" bsStyle="link" onClick={this.handleShow}>Take a Look</Button>
                                </figcaption>
                            </figure>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div class="grid cs-style-4">
                            <figure>
                                <div><img src="/static/images/profile/pro.png" alt="img05"/></div>
                                <figcaption>
                                    <h3>Tribe, Town & State</h3>
                                    <span>KTT -19</span>
                                    <Button className="anchor" bsStyle="link" onClick={this.handleShow}>Take a Look</Button>
                                </figcaption>
                            </figure>
                        </div>
                    </Col>     
                </Row>
            </Col>
            <Col md={4}>
                <div style={{
                    margin : '65px 0px'
                }}>
                    <img src="/static/images/sidebanner.png" style={{
                        width : '100%'
                    }} />
                </div>

                <div style={{
                    margin : '90px 0px'
                }}>
                    <img src="/static/images/turakigray.png" style={{
                        width : '100%'
                    }} />
                </div>
            </Col>
            </Row>
        </Grid>
      </div>
    )
  }
}
