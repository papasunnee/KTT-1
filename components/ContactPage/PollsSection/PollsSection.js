import { Component} from 'react'
import Head from 'next/head'
import {graphql} from 'react-apollo'
import gql from 'graphql-tag'

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

class PollsSection extends Component{
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
    const { loading, error, lastPolls } = this.props.data;
  	if (loading) {
  		return (<div>Loading...</div>)
  	}
  	if (error) {
  		return (<div>There was an issue while fetching Polls try again later</div>)
  	}

    if(lastPolls.length===0){
      return (<div>There are no currently available polls check again later</div>)
    }
    // console.log(lastPolls);
    return(
      <section style={{
        borderTop: '1px inset red',
        borderBottom: '5px inset #AB0000',
        backgroundColor : '#F6F8FA' ,
        paddingTop: '30px'
      }}>
        <Head>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"/>
        </Head>
        <Row>
            <h2 style={{margin : 'auto'}}>Online Polls</h2>
        </Row>
          <Row style={{backgroundColor: '#F6F8FA', color: 'black'}}>
            {(lastPolls[0])&&(
              <Col md={6} style={{paddingTop: '10%'}}>
                {/* Poll */}
                <div style={{textAlign: 'left',
                  height: '70%',
                  borderRightColor: 'red',
                  borderRightWidth: '4px',
                  borderRightStyle: 'inset',
                  margin: 'auto',
                  // position: 'absolute',
                  // top: '0',
                  // left: '0',
                  // bottom: '0',
                  // right: '0'
                }}>
                <MuiThemeProvider muiTheme={getMuiTheme({userAgent, ...muiTheme})}>
                  <CurrentSurvey poll={lastPolls[0]}/>
                </MuiThemeProvider>
              </div>
            </Col>
            )}
            {(lastPolls[1])&&(
              <Col md={6}style={{paddingTop: '5%'}}>
                <Row>
                  <Col md={7}> <h4>Last weeks results</h4></Col>
                  <Col md={4}>
                    <MuiThemeProvider muiTheme={getMuiTheme({userAgent, ...muiTheme})}>
                      <Toggle
                        label="Toggle charts"
                        onToggle={()=>this.toggleCharts()}
                        //style={styles.toggle}
                      />
                    </MuiThemeProvider>
                  </Col>
                </Row>
                <div style={{textAlign: 'left', padding: '30px'}}>
                  {this.state.showCharts ?
                    (<div>
                      <h3 style={{color: 'black', textAlign: 'center', paddingBottom: '10px'}}>{lastPolls[1].title}</h3>
                      <ResultChart poll={lastPolls[1]}/>
                    </div>) : (<div style={{marginBottom : '40px'}}>
                      <h2 style={{color: 'black', textAlign: 'center', paddingBottom: '10px'}}>98% of respondents {lastPolls[1].tagLine}</h2>
                    </div>)
                  }
                </div>
              </Col>
            )}
          </Row>

      </section>
    )
  }
}

const gqlWrapper = gql `
query LastPolls{
  lastPolls {
    _id
    title
    tagLine
    totalVotes
    aVotes
    bVotes
    cVotes
    dVotes
    option1{
      text
    }
    option2{
      text
    }
    option3{
      text
    }
    option4{
      text
    }
  }
}
`
export default graphql(gqlWrapper, {
  props: ({ data }) => ({
    data
  })
})(PollsSection)
