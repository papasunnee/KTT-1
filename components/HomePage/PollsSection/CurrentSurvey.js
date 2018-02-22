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
//import {sendCode, verifyCode} from './VerifyPhoneA'
//import {sendCode, verifyCode} from './PhoneVerifyer'

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
      verificationCode: ''
    }
  }

  handleRequestClose = () => {
    this.setState({
      open: false
    })
  }

  handleSubmitButton = () => {
    const phoneNoRegex = new RegExp("^0?(\\d{10})");
    if (this.state.phone) {
      if (phoneNoRegex.test(this.state.phone)){
        console.log('sending message');
        sendCode(this.state.phone)
        this.setState({
          open: true
        })
      } else {
        console.log('wwww');
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

  handleVerifyButton = () => {
    console.log('verify button pressed');
    verifyCode(this.state.phone, this.state.verificationCode);
  }

  handlePhoneChange = (event) => {
    const newState = {phone: event.target.value};
    if (this.state.displayError) {
      newState.displayError = false
    }
    this.setState(newState);
  };

  handleCodeChange = (event) => {
    console.log(event.target.value);
    this.setState({verificationCode: event.target.value});
  };

  render () {
    const { userAgent } = this.props

    const standardActions = (
      <FlatButton
        label='Ok'
        primary={Boolean(true)}
        onTouchTap={this.handleRequestClose}
      />
    )

    return (
      //09071816392
        <div style={styles.container}>
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
          <h3 style={{color: 'black', paddingBottom: '10px'}}>Example Survey Question</h3>
          <RadioButtonGroup style={{color: 'white'}} name="shipSpeed" defaultSelected="1">
            <RadioButton
              value="1"
              label="Option 1"
              style={styles.radioButton}
            />
            <RadioButton
              value="2"
              label="Option 2"
              style={styles.radioButton}
            />
            <RadioButton
              value="3"
              label="Option 3"
              style={styles.radioButton}
            />
            <RadioButton
              value="4"
              label="Option 4"
              style={styles.radioButton}
            />
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
