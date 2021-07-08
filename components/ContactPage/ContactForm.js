import { Component } from 'react'
import {Row, Col, FormControl} from 'react-bootstrap';
import {graphql} from 'react-apollo'
import gql from 'graphql-tag'

const PHONE_REGEX = new RegExp("^[0][0-9]\\d{9}$");
const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


class ContactForm extends Component{
  constructor(props){
    super(props)
    this.state = {
      value: '',
      infoMessage: null,
      isError: false,
      phoneValid: false,
      emailValid: false,
    }
    this.doSubmit = this.doSubmit.bind(this)
  }

  doSubmit(){
    if (this.state.name && this.state.emailValid && this.state.phoneValid && this.state.message) {
      this.props.createMessage({
        name: this.state.name,
        email: this.state.email,
        phone: this.state.phone,
        message: this.state.message
      },()=>{
        //Runs on success
        this.setState({
          infoMessage: 'We have received your message',
          isError: false,
        })
      },(message)=>{
        //Runs on failure
        this.setState({
          infoMessage: 'There was an issue contacting the server please try again later',
          isError: true,
        })
      })
    } else {
      if(!this.state.name){
        this.setState({
          infoMessage: 'Input your name',
          isError: true,
        })
        return;
      }
      if(!this.state.emailValid){
        this.setState({
          infoMessage: 'Input a valid email address',
          isError: true,
        })
        return;
      }
      if(!this.state.phoneValid){
        this.setState({
          infoMessage: 'Input a valid phone number',
          isError: true,
        })
        return;
      }
      if(!this.state.message){
        this.setState({
          infoMessage: 'Your message is empty',
          isError: true,
        })
        return;
      }
    }
  }

  changeValue(field, value){
    if (field === 'phone'){
      if (PHONE_REGEX.test(value)){
        this.setState({phoneValid: true});
      } else {
        this.setState({phoneValid: false});
      }
    }
    if (field === 'email'){
      if (EMAIL_REGEX.test(value)){
        this.setState({emailValid: true});
      } else {
        this.setState({emailValid: false});
      }
    }
    this.setState({
      [field]: value,
      infoMessage: null,
      isError: false,
    })
  }

  render() {
    // console.log(this.state);
    return(
      <Row>
        <div className="input-container">
            <Col xs={12}>
                <div className="styled-input wide">
                    <input type="text" required onChange={(e)=>this.changeValue('name', e.target.value)}/>
                    <label>Name</label>
                </div>
            </Col>
            <Col xs={12}>
                <div className="styled-input wide">
                    <input type="text" required onChange={(e)=>this.changeValue('email', e.target.value)}/>
                    <label>Email</label>
                </div>
            </Col>
            <Col xs={12}>
                <div className="styled-input wide">
                    <input type="text" required onChange={(e)=>this.changeValue('phone', e.target.value)}/>
                    <label>Phone Number</label>
                </div>
            </Col>
            <Col xs={12}>
                <div className="styled-input wide">
                    <textarea required onChange={(e)=>this.changeValue('message', e.target.value)}></textarea>
                    <label>Message</label>
                </div>
            </Col>
            <Col xs={12}>
              {this.state.infoMessage && <div style={{color: this.state.isError? 'red':'green'}}>{this.state.infoMessage}</div>}
              <div className="btn-lrg submit-btn" onClick={this.doSubmit}>Send Message</div>
            </Col>
            <style jsx>{`
                    h1
                    {
                        font-family : 'Poppins', sans-serif, 'arial';
                        font-weight: 600;
                        font-size: 72px;
                        color: white;
                        text-align: center;
                    }

                    h4 {
                        font-family: 'Roboto', sans-serif, 'arial';
                        font-weight: 400;
                        font-size: 20px;
                        color: #9b9b9b;
                        line-height: 1.5;
                    }

                    input:focus ~ label, textarea:focus ~ label, input:valid ~ label, textarea:valid ~ label {
                        font-size: 0.75em;
                        color: #999;
                        top: -5px;
                        -webkit-transition: all 0.225s ease;
                        transition: all 0.225s ease;
                    }

                    .styled-input {
                        float: left;
                        width: 293px;
                        margin: 1rem 0;
                        position: relative;
                        border-radius: 4px;
                    }
                    @media only screen and (max-width: 768px){
                        .styled-input {
                            width:100%;
                        }
                    }

                    .styled-input label {
                        color: #999;
                        padding: 1.3rem 30px 1rem 30px;
                        position: absolute;
                        top: 10px;
                        left: 0;
                        -webkit-transition: all 0.25s ease;
                        transition: all 0.25s ease;
                        pointer-events: none;
                    }

                    .styled-input.wide {
                        width: 650px;
                        max-width: 100%;
                    }

                    input,
                    textarea {
                        padding: 30px;
                        border: 0;
                        width: 100%;
                        font-size: 1rem;
                        background-color: #09123A;
                        color: white;
                        border-radius: 4px;
                    }

                    input:focus,
                    textarea:focus { outline: 0; }

                    input:focus ~ span,
                    textarea:focus ~ span {
                        width: 100%;
                        -webkit-transition: all 0.075s ease;
                        transition: all 0.075s ease;
                    }

                    textarea {
                        width: 100%;
                        min-height: 15em;
                    }

                    .input-container {
                        width: 650px;
                        max-width: 100%;
                        margin: 20px auto 25px auto;
                    }

                    .submit-btn {
                        float: right;
                        padding: 7px 35px;
                        border-radius: 60px;
                        display: inline-block;
                        background-color: #4b8cfb;
                        color: white;
                        font-size: 18px;
                        cursor: pointer;
                        box-shadow: 0 2px 5px 0 rgba(0,0,0,0.06),
                                0 2px 10px 0 rgba(0,0,0,0.07);
                        -webkit-transition: all 300ms ease;
                        transition: all 300ms ease;
                    }

                    .submit-btn:hover {
                        transform: translateY(1px);
                        box-shadow: 0 1px 1px 0 rgba(0,0,0,0.10),
                                0 1px 1px 0 rgba(0,0,0,0.09);
                    }
                    @media (max-width: 768px) {
                        .submit-btn {
                            width:100%;
                            float: none;
                            text-align:center;
                        }
                    }

                    input[type=checkbox] + label {
                    color: #ccc;
                    font-style: italic;
                    }

                    input[type=checkbox]:checked + label {
                    color: #f00;
                    font-style: normal;
                    }
            `}</style>
        </div>
      </Row>
    )
  }
}

const create = gql`
mutation MessageCreate($name: String!, $email: String!, $phone: String!, $message: String!){
  messageCreate(record:{name: $name, email: $email, phone: $phone, message: $message}){
    recordId
  }
}
`

export default graphql(create, {
  props: ({ ownProps, mutate }) => ({
    createMessage: ({name, email, phone, message}, onSuccess, onFail) => {
      mutate({
        variables: {name, email, phone, message}
      }).then(()=>{
        console.log('success');
        (onSuccess) && onSuccess();
      }).catch((err)=>{
        if (err.graphQLErrors.length === 0)
          (onFail) && onFail('This phone number has already been used in this poll, see you at the next poll ');
          
        err.graphQLErrors.forEach(error=>{
          switch(error.message) {
            case `This phone number has already been used in this poll`:
            (onFail) && onFail('This phone number has already been used in this poll, see you at the next poll ');
            break;
            default:
            (onFail) && onFail('There was an issue contacting the server try again later');
          }
        })
      })
    }
  })
})(ContactForm)
