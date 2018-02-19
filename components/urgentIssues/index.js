import {Component} from 'react'
import Router from 'next/router'
import Head from 'next/head'
import HeroSection from './HeroSection/HeroSection'
import TextBody from './TextBody'
import {Grid, Row, Col, Breadcrumb} from 'react-bootstrap'

export default class Home extends Component {
  render(){
    return (
      <div>
        <HeroSection />
        <Grid>
          <Row style={{paddingTop: '30px', paddingBottom: '30px'}}>
            <Col md={11}>
              <Row className="Header">
                <Breadcrumb style={{maxHeight: '40px'}}>
                  <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                  <Breadcrumb.Item active>Country</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{
                  marginTop: '30px'
                }}>
                  <h1 style={{fontSize: '30px',color: '#12806B'}}>Kabiru Tanimu Turaki - KTT</h1>
                  <h6 style={{marginTop: '0', color: 'grey'}}>
                    ktt slogan ktt Slogan ktt slogan ktt slogan ktt slogan ktt slogan ktt slogan ktt slogan
                  </h6>
                  <h6 style={{textAlign: 'right'}}>
                    - KTT '19
                  </h6>
                </div>
              </Row>            
            </Col>
            <Col md={1} className="you-first-poster-img">

            </Col>
          </Row>
        </Grid>
        <TextBody />
      </div>
    )
  }
}
