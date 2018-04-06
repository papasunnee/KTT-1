import React, {Component} from 'react'
import Dialog from 'material-ui/Dialog'
import {deepOrange500} from 'material-ui/styles/colors'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton'
import {Row, Col} from 'react-bootstrap'
import 'isomorphic-fetch'

// Make sure react-tap-event-plugin only gets injected once
// Needed for material-ui
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

class Index extends Component {
  constructor (props, context) {
    super(props, context)

    this.state = {
      open: false,
      displayError: '',
      phone: '',
      verificationCode: '',
      isVerified: false,
      verificationMessage: '',
    }
  }

  handleRequestClose = () => {
    this.setState({
      open: false
    })
  }

  sendCode = async () => {
    console.log('sending message');
    let res = await fetch(`/poll-verification/start?phone=${this.state.phone}`)
    //console.log(res);
    let response = await res.json()
    console.log(response);
  }

  handleSubmitButton = async () => {
    //var phoneNoRegex1 = new RegExp("^[0][0-9]\\d{9}$|^\\+234[0-9]\\d{9}$|^\\+234[0][0-9]\\d{9}$");
    /*const phoneNoRegex = new RegExp("^0?(\\d{10})");
    const phoneNoRegex = new RegExp("^0?(\\d{10})");*/
    const phoneNoRegex = new RegExp("^[0][0-9]\\d{9}$");
    if (this.state.phone) {
      if (phoneNoRegex.test(this.state.phone)){
        await this.sendCode();
        this.setState({
          open: true
        })
      } else {
        this.setState({
          displayError: 'Enter a valid phone number'
        })
      }
    } else {
      this.setState({
        displayError: 'This field is required'
      })
    }

  }

  resetStateValues = (time) => {
    setTimeout(()=>{this.setState({
      open: false,
      displayError: '',
      verificationCode: '',
      isVerified: false,
      verificationMessage: ''
    })}, time)

  }

  handleVerifyButton = async () => {
    console.log('verify button pressed');
    let res = await fetch(`/poll-verification/verify?phone=${this.state.phone}&code=${this.state.verificationCode}`)
    // console.log('res');
    // console.log(res);
    // console.log('-----------res-----------');
    try {
      let response = await res.json()
      if (response.success){
        this.setState({isVerified: true, verificationMessage: 'your answer has been submitted'})
        this.resetStateValues(3000);
      } else {
        this.setState({isVerified: false, verificationMessage: 'you have inputed the wrong verification code'})
      }
    } catch (e) {
        this.setState({isVerified: false, verificationMessage: 'there was an issue verifying your phone'})
    }
  }

  handlePhoneChange = (event) => {
    const newState = {phone: event.target.value};
    if (this.state.displayError) {
      newState.displayError = false
    }
    this.setState(newState);
  };

  handleCodeChange = (event) => {
    this.setState({verificationCode: event.target.value});
  };

  render () {
    // const { userAgent } = this.props

    const standardActions = (
      <FlatButton
        label='Ok'
        primary={Boolean(true)}
        onTouchTap={this.handleRequestClose}
      />
    )
    const OPTIONS = [];
    const { poll } = this.props;

    if (poll) {
      (poll.option1.text) && OPTIONS.push({text: poll.option1.text, value: 'a'});
      (poll.option2.text) && OPTIONS.push({text: poll.option2.text, value: 'b'});
      (poll.option3.text) && OPTIONS.push({text: poll.option3.text, value: 'c'});
      (poll.option4.text) && OPTIONS.push({text: poll.option4.text, value: 'd'});
    }


    return (
      //09071816392
        <div style={styles.container} className="align-middle">
          <Dialog
            open={this.state.open}
            title={'Please enter the verification code we sent to <'+this.state.phone+'>'}
            /*actions={standardActions}*/
            onRequestClose={this.handleRequestClose}
            /*style={{width: '50px'}}*/
          >
            <Row>
              <Col md={6} style={{paddingTop: '15px'}}>
                <TextField
                  onChange={this.handleCodeChange}
                  //errorText={this.state.displayError}
                  hintText="Input verification code"
                  errorText={this.state.verificationMessage}
                  errorStyle={this.state.isVerified && {color: 'green'}}
                 />
              </Col>
              <Col md={6}>
                <a href="#!" className="btn btn-white-outline"
                  onClick={this.handleVerifyButton}
                  style={{borderColor: 'white', backgroundColor: '#09123A'}}
                >Verify</a>
              </Col>
            </Row>
             <p style={{marginBottom: '10px',marginTop: '15px'}}>didn't receive a code?</p>
             <p style={{margintop: '0px'}}><a href="#">Resend Code</a></p>
             <p style={{margintop: '0px'}}><a href="#">Change number or verification method</a></p>
          </Dialog>
          <h3 style={{color: 'black', paddingBottom: '10px', marginTop : '-55px'}}>{poll.title}</h3>
          <RadioButtonGroup style={{color: 'white'}} name="shipSpeed" >
            {/* <RadioButton
              value="a"
              label={poll.option1.text}
              style={styles.radioButton}
            /> */}
            {OPTIONS.map(({text, value})=>(
              <RadioButton
                value={value}
                label={text}
                style={styles.radioButton}
              />)
            )}
          </RadioButtonGroup>
          <Row style={{marginTop: '30px'}}>
            <Col md={6} style={{paddingTop: '15px'}}>
              <TextField
                onChange={this.handlePhoneChange}
                hintText="Enter Phone Number"
                errorText={this.state.displayError}
               />
            </Col>
            <Col md={6}>
              <a href="#!" className="btn btn-white-outline" onClick={this.handleSubmitButton}
                style={{borderColor: 'white', backgroundColor: '#09123A'}}
              >Submit Answer</a>
            </Col>
          </Row>
        </div>
    )
  }
}

export default Index
