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
import SubmitButton from './SubmitButton'
import VerifyButton from './VerifyButton'

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

const phoneNoRegex = new RegExp("^[0][0-9]\\d{9}$");

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
      selectedVote: '',
      pollVoteId: null
    }

    this.changeOption = this.changeOption.bind(this)
    this.sendCode = this.sendCode.bind(this)
    this.handleRequestClose = this.handleRequestClose.bind(this)
    this.onVoteCreated = this.onVoteCreated.bind(this)
    this.onVoteFail = this.onVoteFail.bind(this)
    this.handleSubmitButton = this.handleSubmitButton.bind(this)
    this.resetStateValues = this.resetStateValues.bind(this)
    this.handleVerifyButton = this.handleVerifyButton.bind(this)
  }

  changeOption(e,value) {
    // console.log(value);
    this.setState({selectedVote: value, displayError: false})
  }

  handleRequestClose = () => {
    this.setState({
      open: false
    })
  }

  sendCode = async () => {
    // console.log('sending message');
    let res = await fetch(`/poll-verification/start?phone=${this.state.phone}`)
    //console.log(res);
    let response = await res.json()
    // console.log(response);
  }

  onVoteCreated = async (voteId) => {
    // console.log(voteId);
    await this.sendCode();
    if (voteId) {
      this.setState({ open: true, pollVoteId: voteId })
    }
  }

  onVoteFail = (message) => {
    //function runs when the api doesnt create the vote
    this.setState({ displayError: message })
  }

  handleSubmitButton = async (createPollVote) => {
    if (this.state.phone && this.state.selectedVote) {
      if (phoneNoRegex.test(this.state.phone)){
        // console.log(this.state.phone);
        // console.log(this.props.poll);
        createPollVote({
          phoneNumber: this.state.phone,
          vote: this.state.selectedVote,
          poll: this.props.poll._id
        }, this.onVoteCreated, this.onVoteFail);
      } else {
        this.setState({displayError: 'Enter a valid phone number'})
      }
    } else {
      (!this.state.phone) && this.setState({displayError: 'This field is required'});
      (!this.state.selectedVote) && this.setState({displayError: 'You must select an option'});
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

  handleVerifyButton = async (updatePollVote) => {
    // updatePollVote({_id: this.state.pollVoteId, vote: this.state.selectedVote},
    //   //onSuccess - Function runs from if database update succeeds
    //   ()=>{
    //     this.setState({isVerified: true, verificationMessage: '🎉  your answer has been submitted, see you at the next poll'})
    //     this.resetStateValues(3000);
    //   },
    //   //onFailure - Function runs from if database update fails
    //   ()=>{
    //     this.setState({isVerified: false, verificationMessage: '😞 Whoops!! there was an issue contacting the server try again later'})
    //   })
    try {
      const res = await fetch(`/poll-verification/verify?phone=${this.state.phone}&code=${this.state.verificationCode}`)
      const response = await res.json()
      if (response){
        if(response.success){
          //run verify vote mutation
          updatePollVote({_id: this.state.pollVoteId, vote: this.state.selectedVote},()=>{
            //onSuccess - Function runs from if database update succeeds
            this.setState({isVerified: true, verificationMessage: '🎉  your answer has been submitted, see you at the next poll'})
            this.resetStateValues(3000);
          },()=>{
            //onFailure - Function runs from if database update fails
            this.setState({isVerified: false, verificationMessage: '😞 Whoops!! there was an issue contacting the server try again later'})
          })
        } else {
          // console.log(response);
          this.setState({isVerified: false, verificationMessage: 'you have inputed the wrong verification code'})
        }
      } else {
        this.setState({isVerified: false, verificationMessage: 'you have inputed the wrong verification code'})
      }
    } catch (e) {
      // console.log('e');
      // console.log(e);
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
            style={{zIndex: "150000"}}
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
                  errorStyle={{color: this.state.isVerified ? 'green' : 'red'}}
                 />
              </Col>
              <Col md={6}>
                {/* <a href="#!" className="btn btn-white-outline"
                  onClick={this.handleVerifyButton}
                  style={{borderColor: 'white', backgroundColor: '#09123A'}}
                >Verify</a> */}
                <VerifyButton handleVerifyButton={this.handleVerifyButton}/>
              </Col>
            </Row>
             {/* <p style={{marginBottom: '10px',marginTop: '15px'}}>didn't receive a code?</p>
             <p style={{margintop: '0px'}}><a href="#">Resend Code</a></p> */}
             <p style={{margintop: '0px'}}><a href="#" onClick={this.handleRequestClose}>Change number</a></p>
          </Dialog>
          <h3 style={{color: 'black', paddingBottom: '10px', marginTop : '-55px'}}>{poll.title}</h3>
          <RadioButtonGroup style={{color: 'white'}} name="shipSpeed" onChange={this.changeOption}>
            {/* <RadioButton
              value="a"
              label={poll.option1.text}
              style={styles.radioButton}
            /> */}
            {OPTIONS.map(({text, value}, index)=>(
              <RadioButton
                value={value}
                label={text}
                style={styles.radioButton}
                key={index}
              />)
            )}
          </RadioButtonGroup>
          <Row style={{marginTop: '30px'}}>
            <Col md={6} xs={6} style={{paddingTop: '15px'}}>
              <TextField
                onChange={this.handlePhoneChange}
                hintText="Enter Phone Number"
                errorText={this.state.displayError}
               />
            </Col>
            <Col md={6} xs={6}>
              {/*<a href="#!" className="btn btn-white-outline" onClick={this.handleSubmitButton}
                style={{borderColor: 'white', backgroundColor: '#09123A'}}
              >Submit Answer</a>*/}
              <SubmitButton handleSubmitButton={this.handleSubmitButton} />
            </Col>
          </Row>
        </div>
    )
  }
}

export default Index
// const create = gql`
//   mutation updatePost($id: ID!, $votes: Int) {
//     updatePost(id: $id, votes: $votes) {
//       id
//       __typename
//       votes
//     }
//   }
// `
//
// export default graphql(create, {
//   props: ({ ownProps, mutate }) => ({
//     upvote: (id, votes) =>
//       mutate({
//         variables: { id, votes },
//         optimisticResponse: {
//           __typename: 'Mutation',
//           updatePost: {
//             __typename: 'Post',
//             id: ownProps.id,
//             votes: ownProps.votes + 1
//           }
//         }
//       })
//   })
// })(Index)
