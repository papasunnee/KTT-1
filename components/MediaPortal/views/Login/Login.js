import React, {Component} from 'react';
import { graphql, withApollo, compose } from 'react-apollo'
import cookie from 'cookie'
import Link from 'next/link'
import gql from 'graphql-tag'

import redirect from '../../../../lib/auth/redirect'

import {Container, Row, Col, CardGroup, Card, CardBody, Button, Input, InputGroup, InputGroupAddon, InputGroupText} from 'reactstrap';


class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: '',
      displayError: '',
      errorMessage: ''
    }
  }

  handleEmailChange = (event) => {
    const newState = {email: event.target.value};
    if (this.state.displayError) {
      newState.displayError = false
    }
    this.setState(newState);
  };

  handlePasswordChange = (event) => {
    const newState = {password: event.target.value};
    if (this.state.displayError) {
      newState.displayError = false
    }
    this.setState(newState);
  };

  render() {
    const doLogin = (e) => {
      /*console.log('this.props');
      console.log(e);*/
      console.log('logging in');
      console.log(this.state);
      e.preventDefault()
      e.stopPropagation()

      this.props.login({
        email: this.state.email, //vanguard@ktt4president
        password: this.state.password //a
      })
    }
    //console.log(this.props);
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input onChange={this.handleEmailChange} name="email" type="text" placeholder="email"/>
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input onChange={this.handlePasswordChange} name="password" type="password" placeholder="Password"/>
                    </InputGroup>
                    <Row>
                      <Col xs="6">
                        <Button onClick={doLogin} color="primary" className="px-4">Login</Button>
                      </Col>
                      <Col xs="6" className="text-right">
                        <Button color="link" className="px-0">Forgot password?</Button>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

// The `signinUser` mutation
/*const gqlWrapper = gql `
mutation Login($email: String, $password: String) {
  login ( email: $email, password: $password ) {
    jwt
  }
}
`*/

export default Login;
/*export default compose(
  // withApollo exposes `this.props.client` used when logging out
  withApollo
)(graphql(
    gqlWrapper,
    {
      // Use an unambiguous name for use in the `props` section below
      name: 'loginWithEmail',
      // Apollo's way of injecting new props which are passed to the component
      props: ({
        loginWithEmail,
        // `client` is provided by the `withApollo` HOC
        ownProps: { client }
      }) => ({
        // `login` is the name of the prop passed to the component
        login: ({email, password}) => {

          loginWithEmail({
            variables: {
              email: email,
              password: password
            }
          }).then(({ data }) => {
            console.log('data');
            // Store the token in cookie
            const {jwt} = data.login
            document.cookie = cookie.serialize('token', jwt, {
              maxAge: 3 * 24 * 60 * 60 // 3 days
            })

            //console.log(ownProps);
            // Force a reload of all the current queries now that the user is
            // logged in
            client.resetStore().then(() => {
              // Now redirect to the homepage
              redirect({}, '/media-portal')
            })
          }).catch((error) => {
            // Something went wrong, such as incorrect password, or no network
            // available, etc.
            console.error(error)
          })
        }
      })
    }
  )(Login))*/
