import { Component} from 'react'
import Head from 'next/head'
import { Row, Col} from 'react-bootstrap'
import Toggle from 'material-ui/Toggle';
import {deepOrange500} from 'material-ui/styles/colors'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import CurrentSurvey from './CurrentSurvey'
import ResultChart from './ResultChart'

if (!process.tapEventInjected) {
  injectTapEventPlugin()
  process.tapEventInjected = true
}

const styles = {
  container: {
    textAlign: 'left',
    paddingTop: 20,
    paddingLeft: 20,
  }
}

const muiTheme = {
  palette: {
    accent1Color: deepOrange500,

  }
}

export default class PollsSection extends Component{
  static getInitialProps ({ req }) {
    // Ensures material-ui renders the correct css prefixes server-side
    let userAgent
    if (process.browser) {
      userAgent = navigator.userAgent
    } else {
      userAgent = req.headers['user-agent']
    }

    return { userAgent }
  }

  constructor(props) {
    super(props);
    this.state = {value: 'ss', showCharts: true};
  }

  toggleCharts(){
    this.setState((prevState)=>({showCharts: !prevState.showCharts}))
    console.log(this.state.showCharts);
  }

  render(){
    const { userAgent } = this.props

    return(
      <section style={{
        borderTop: '3px inset red',
        borderBottom: '5px inset #AB0000',
        backgroundColor : '#F6F8FA' ,
        paddingTop: '30px'
      }}>
        <Head>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"/>
        </Head>
        <MuiThemeProvider muiTheme={getMuiTheme({userAgent, ...muiTheme})}>
          <Row style={{backgroundColor: '#F6F8FA', color: 'black'}}>
            <Col md={6}>
              Poll
              <div style={{textAlign: 'left', padding: '30px',
                height: '70%',
                borderRightColor: 'red',
                borderRightWidth: '4px',
                borderRightStyle: 'inset',
                margin: 'auto',
                position: 'absolute',
                top: '0',
                left: '0',
                bottom: '0',
                right: '0'
              }}>
                <CurrentSurvey />
              </div>
            </Col>
            <Col md={6}>
              <Row>
                <Col md={8}>Results</Col>
                <Col md={2}>
                  <Toggle
                    label="Toggle"
                    onToggle={()=>this.toggleCharts()}
                    //style={styles.toggle}
                  />
                </Col>
              </Row>
              <div style={{textAlign: 'left', padding: '30px'}}>
                {this.state.showCharts ?
                  (<div>
                    <h3 style={{color: 'black', textAlign: 'center', paddingBottom: '10px'}}>Example Survey Question</h3>
                    <ResultChart />
                  </div>) : (<div>
                    <h1 style={{color: 'black', textAlign: 'center', paddingBottom: '10px'}}>100% of Nigerians believe in a better future</h1>
                  </div>)
                }
              </div>
            </Col>
          </Row>
        </MuiThemeProvider>
      </section>
    )
  }
}
