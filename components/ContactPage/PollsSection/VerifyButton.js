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
    this.props.handleVerifyButton((data, onSuccess, onFail)=>{
      // console.log(data);
      this.props.verifyPollVote(data, onSuccess, onFail);
      // this.props.updatePollVote(data, onSuccess, onFail);
    })
  }

  render () {
    return (
      <a href="#!" className="btn btn-white-outline"
        onClick={this.doSubmit}
        style={{borderColor: 'white', backgroundColor: '#09123A'}}
      >Verify</a>
    )
  }
}

// export default Index
const create = gql`
  mutation VerifyVote($_id: MongoID!, $vote: EnumPollVoteVote){
    pollVoteVerify(record: {_id: $_id, vote: $vote, isVerified: true}){
      recordId
    }
  }
`

export default graphql(create, {
  props: ({ ownProps, mutate }) => ({
    verifyPollVote: ({_id, vote}, onSuccess, onFail) => {
      // console.log('asa');
      // console.log(_id);
      // console.log(vote);
      // onSuccess();
      // onFail();
      mutate({
        variables: { _id, vote }
      }).then(({ data: { pollVoteVerify: {recordId}}})=>{
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
