import React, {Component} from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class Index extends Component {
  constructor (props, context) {
    super(props, context)

    this.doSubmit = this.doSubmit.bind(this);
  }

  doSubmit = async () => {
    // console.log('clicked');
    this.props.handleSubmitButton((data, onSuccess, onFail)=>{
      // console.log(data);
      this.props.createPollVote(data, onSuccess, onFail);
    })
  }

  render () {
    return (
      <a href="#!" className="btn btn-white-outline" onClick={this.doSubmit}
        style={{borderColor: 'white', backgroundColor: '#09123A'}}
      >Submit Answer</a>
    )
  }
}

// export default Index
const create = gql`
  mutation CreateVote($phoneNumber: String, $vote: EnumPollVoteVote, $poll: MongoID) {
    pollVoteCreate(record: {phoneNumber: $phoneNumber, vote: $vote, poll: $poll}){
      recordId
    }
  }
`

export default graphql(create, {
  props: ({ ownProps, mutate }) => ({
    createPollVote: ({phoneNumber, vote, poll}, onSuccess, onFail) => {
      // console.log('asa');
      // console.log(phoneNumber);
      // console.log(vote);
      // console.log(poll);
      // onSuccess("1111112111111111");
      mutate({
        variables: { phoneNumber, vote, poll }
      }).then(({ data: { pollVoteCreate: {recordId}}})=>{
        // console.log(recordId);
        (onSuccess) && onSuccess(recordId);
      }).catch((err)=>{
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
})(Index)
