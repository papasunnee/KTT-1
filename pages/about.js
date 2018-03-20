import {Component} from 'react'
import Router from 'next/router'
import Head from 'next/head'
import {Grid, Row, Col } from 'react-bootstrap'
import withLayout from '../components/withLayout'
import PageTitle from '../components/common/PageTitle/PageTitle'
import HeroSection from '../components/AboutPage/HeroSection/HeroSection'
import Boxsection from '../components/AboutPage/Boxsection/Boxsection'

const breadcrumbs = [
  {title: 'Home', link:'/'},
  {title: 'About KTT', active: true},
]

const parameters = {
  style : {
    paddingTop: '30px',
    paddingBottom: '30px'
  },
  title : ['Kabiru Tanimu Turaki, ', 
  <small>SAN</small>,
  <br/>,
  <small style={{fontSize : '16px'}}>FCIArb, FABs, FCIDA, HCH.Hm, MPIS, MHCA (Dan Masanin Gwandu, Zarumman Kabbi)</small>],
  slogan : ['KTT advocate for the most radical, people-centric and wealth creation agenda in the history of Nigerian democracy. The ',
  <span style={{color : 'red', fontWeight : 'bolder'}}>YOU FIRST</span>,
  ' movement is unrivalled and unstoppable.'
  ],
  yearQuote : ' '
}



class AboutPage extends Component {
   
  render(){
    return (
      <div>
        <Head>
          <title>KTT4President | About KTT</title>
          <link href="/static/css/profile/component.css" />
          <script type="text/javascript" src="/static/js/profile/modernizr.custom.js"></script>
          <script type="text/javascript" src="/static/js/profile/toucheffects.js"></script>
        </Head>
        <HeroSection />
        <PageTitle breadcrumbs={breadcrumbs} slogan={parameters.slogan} title={parameters.title} yearQuote={parameters.yearQuote}/>
      <Grid>
        <Row style={parameters.style}>
            <Col md={12}>
              <Row style={{textAlign: 'left'}}>
              <h3 style={{marginBottom : '8px' }}><span style={{color : 'white' , backgroundColor : 'red', padding : '7px'}}>#</span> A STRONG AND VISIONARY LEADER</h3>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
                anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                </p>
              </Row>
            </Col>
        </Row>

        <Row style={parameters.style}>
            <Col md={12}>
              <Row style={{textAlign: 'left'}}>
              <h3 style={{marginBottom : '8px' }}><span style={{color : 'white' , backgroundColor : 'red', padding : '7px'}}>#</span> A COMPASSIONATE AND SELFLESS LEADER</h3>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
                anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                </p>
              </Row>
            </Col>
        </Row>

        <Row style={parameters.style}>
            <Col md={12}>
              <Row style={{textAlign: 'left'}}>
              <h3 style={{marginBottom : '8px' }}><span style={{color : 'white' , backgroundColor : 'red', padding : '7px'}}>#</span> A GOD FEARING AND TRUSTWORTHY LEADER</h3>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
                anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                </p>
              </Row>
            </Col>
        </Row>

        <Row style={parameters.style}>
            <Col md={12}>
              <Row style={{textAlign: 'left'}}>
              <h3 style={{marginBottom : '8px' }}><span style={{color : 'white' , backgroundColor : 'red', padding : '7px'}}>#</span> A PATRIOTIC AND LAW ABIDING LEADER</h3>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
                anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                </p>
              </Row>
            </Col>
        </Row>
      </Grid>
      <Boxsection />
      </div>
    )
  }
}

export default withLayout(AboutPage)
