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
    this.state = {showCharts: false};
  }

  isBottom(el) {
    // console.log(el);
    return el.getBoundingClientRect().bottom <= window.innerHeight;
  }

  trackScrolling = () => {
    const wrappedElement = document.getElementById('tagline');
    if (this.isBottom(wrappedElement)) {
      // console.log('tagline bottom reached');
      setTimeout(()=>{this.setState({showCharts: true})}, 1700)
      document.removeEventListener('scroll', this.trackScrolling);
    }
  };
  componentDidMount(){
    document.addEventListener('scroll', this.trackScrolling);
  }

  toggleCharts(){
    this.setState((prevState)=>({showCharts: !prevState.showCharts}))
    // console.log(this.state.showCharts);
  }

  render(){
    // console.log(this.state);
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

    const getFUllTagline = (poll)=>{
      const mostVotes = Math.max(poll.aVotes, poll.bVotes, poll.cVotes, poll.dVotes);
      const percent = (Math.floor((mostVotes / poll.totalVotes) * 100))
      const tagLine = getTagline(poll, mostVotes);
      // console.log('tagLine');
      // console.log(tagLine);
      return tagLine ? `${percent}% of respondents ${tagLine}` : poll.title
    }

    const getTagline = (poll, mostVotes)=>{
      if (poll.aVotes === mostVotes)
        return poll.option1.tagLine;
      if (poll.bVotes === mostVotes)
        return poll.option2.tagLine;
      if (poll.cVotes === mostVotes)
        return poll.option3.tagLine;
      if (poll.dVotes === mostVotes)
        return poll.option4.tagLine;
    }
    // console.log(lastPolls);
    return(
      <section style={{
        borderTop: '1px inset red',
        borderBottom: '5px inset #AB0000',
        // backgroundColor : '#F6F8FA' ,
        paddingTop: '30px'
      }}>
        <Head>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"/>
        </Head>
        <Row id="PollsTitle">
            <h2 style={{margin : 'auto'}}>Online Polls</h2>
        </Row>
        <Row style={{/*backgroundColor: '#F6F8FA',*/ color: 'black', paddingBottom: '15px'}}>
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
                <Col md={7} xs={12}> <h4>Last weeks results</h4></Col>
                <Col md={3} xs={4} xsOffset={8}>
                  <MuiThemeProvider muiTheme={getMuiTheme({userAgent, ...muiTheme})}>
                    <Toggle
                      label="tap here to toggle charts"
                      labelStyle={{fontSize: '12px', color: '#09123a', lineHeight: '13px'}}
                      toggled={this.state.showCharts}
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
                  </div>) : (<div style={{marginBottom : '40px'}} id="tagline">
                    <h2 style={{color: 'black', textAlign: 'center', paddingBottom: '10px'}}>{getFUllTagline(lastPolls[1])}</h2>
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
      tagLine
    }
    option2{
      text
      tagLine
    }
    option3{
      text
      tagLine
    }
    option4{
      text
      tagLine
    }
  }
}
`
export default graphql(gqlWrapper, {
  props: ({ data }) => ({
    data
  })
})(PollsSection)
