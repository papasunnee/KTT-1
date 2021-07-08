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

        <Grid>
            <Row>
            <Col md={8}>
                <h3 className="text-bold" style={{textAlign: 'left'}}>Profile</h3>
                <hr className="divider divider-iron"/>
                <Row>
                    <Col md={6} style={{paddingRight : '1px', paddingBottom : '25px'}}>
                        <h5>Water <small><span>|</span> 2015-date</small></h5>
                        <div class="grid cs-style-4">
                        <img style={{width : '100%'}} src="/static/images/turaki2.png" alt="img05"/>
                        </div>
                    </Col>
                    <Col md={6} style={{paddingLeft : '1px', paddingBottom : '25px'}}>
                        <h5>Water <small><span>|</span> 2019-2023</small></h5>
                        <div class="grid cs-style-4">
                            <img style={{width : '100%'}} src="/static/images/turaki.png" alt="img05"/>
                        </div>
                    </Col>
                    <Col md={6} style={{paddingRight : '1px', paddingBottom : '25px'}}>
                        <h5>Electricity <small><span>|</span> 2015-date</small></h5>
                        <div class="grid cs-style-4">
                        <img style={{width : '100%'}} src="/static/images/turaki2.png" alt="img05"/>
                        </div>
                    </Col>
                    <Col md={6} style={{paddingLeft : '1px', paddingBottom : '25px'}}>
                        <h5>Electricity <small><span>|</span> 2019-2023</small></h5>
                        <div class="grid cs-style-4">
                            <img style={{width : '100%'}} src="/static/images/turaki.png" alt="img05"/>
                        </div>
                    </Col><Col md={6} style={{paddingRight : '1px', paddingBottom : '25px'}}>
                        <h5>Hospitals <small><span>|</span> 2015-date</small></h5>
                        <div class="grid cs-style-4">
                        <img style={{width : '100%'}} src="/static/images/turaki2.png" alt="img05"/>
                        </div>
                    </Col>
                    <Col md={6} style={{paddingLeft : '1px', paddingBottom : '25px'}}>
                        <h5>Hospitals <small><span>|</span> 2019-2023</small></h5>
                        <div class="grid cs-style-4">
                            <img style={{width : '100%'}} src="/static/images/turaki.png" alt="img05"/>
                        </div>
                    </Col>
                    <Col md={6} style={{paddingRight : '1px', paddingBottom : '25px'}}>
                        <h5>Employment <small><span>|</span> 2015-date</small></h5>
                        <div class="grid cs-style-4">
                        <img style={{width : '100%'}} src="/static/images/turaki2.png" alt="img05"/>
                        </div>
                    </Col>
                    <Col md={6} style={{paddingLeft : '1px', paddingBottom : '25px'}}>
                        <h5>Employment <small><span>|</span> 2019-2023</small></h5>
                        <div class="grid cs-style-4">
                            <img style={{width : '100%'}} src="/static/images/turaki.png" alt="img05"/>
                        </div>
                    </Col> 

                    <Col md={6} style={{paddingRight : '1px', paddingBottom : '25px'}}>
                        <h5>Schools <small><span>|</span> 2015-date</small></h5>
                        <div class="grid cs-style-4">
                        <img style={{width : '100%'}} src="/static/images/turaki2.png" alt="img05"/>
                        </div>
                    </Col>
                    <Col md={6} style={{paddingLeft : '1px', paddingBottom : '25px'}}>
                        <h5>Schools <small><span>|</span> 2019-2023</small></h5>
                        <div class="grid cs-style-4">
                            <img style={{width : '100%'}} src="/static/images/turaki.png" alt="img05"/>
                        </div>
                    </Col>  
                    <Col md={6} style={{paddingRight : '1px', paddingBottom : '25px'}}>
                        <h5>Roads <small><span>|</span> 2015-date</small></h5>
                        <div class="grid cs-style-4">
                        <img style={{width : '100%'}} src="/static/images/turaki2.png" alt="img05"/>
                        </div>
                    </Col>
                    <Col md={6} style={{paddingLeft : '1px', paddingBottom : '25px'}}>
                        <h5>Roads <small><span>|</span> 2019-2023</small></h5>
                        <div class="grid cs-style-4">
                            <img style={{width : '100%'}} src="/static/images/turaki.png" alt="img05"/>
                        </div>
                    </Col> 
                    <Col md={6} style={{paddingRight : '1px', paddingBottom : '25px'}}>
                        <h5>Government <small><span>|</span> 2015-date</small></h5>
                        <div class="grid cs-style-4">
                        <img style={{width : '100%'}} src="/static/images/turaki2.png" alt="img05"/>
                        </div>
                    </Col>
                    <Col md={6} style={{paddingLeft : '1px', paddingBottom : '25px'}}>
                        <h5>Government <small><span>|</span> 2019-2023</small></h5>
                        <div class="grid cs-style-4">
                            <img style={{width : '100%'}} src="/static/images/turaki.png" alt="img05"/>
                        </div>
                    </Col>  
                    <Col md={6} style={{paddingRight : '1px', paddingBottom : '25px'}}>
                        <h5>Housing <small><span>|</span> 2015-date</small></h5>
                        <div class="grid cs-style-4">
                        <img style={{width : '100%'}} src="/static/images/turaki2.png" alt="img05"/>
                        </div>
                    </Col>
                    <Col md={6} style={{paddingLeft : '1px', paddingBottom : '25px'}}>
                        <h5>Housing <small><span>|</span> 2019-2023</small></h5>
                        <div class="grid cs-style-4">
                            <img style={{width : '100%'}} src="/static/images/turaki.png" alt="img05"/>
                        </div>
                    </Col>  
                </Row>
            </Col>
            <Col md={4}>
                <div style={{
                    margin : '95px 0px'
                }}>
                    <img src="/static/images/sidebanner.png" style={{
                        width : '100%'
                    }} />
                </div>
            </Col>
            </Row>
        </Grid>
        <style jsx>
        {
            `
            h5
            {
                text-align : left
                
            }
            h5 small{
                font-size : 10px
            }
            h5 small span{
                color : red
                font-weight : bolder
            }
            `
        }
        </style>
      </div>
    )
  }
}
