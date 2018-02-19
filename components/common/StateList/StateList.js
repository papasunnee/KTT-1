import {graphql} from 'react-apollo'
import gql from 'graphql-tag'
import {Row, Col} from 'react-bootstrap'

const StateList = props => {
  const {stateMany} = props.data;
  const states1 = [], states2 = [] ;
  for (var i = 0; i < stateMany.length; i++) {
    ((i+1)%2!==0) && states1.push(stateMany[i]);
    ((i+1)%2===0) && states2.push(stateMany[i]);
  }
  console.log(states1);
  /*console.log('stateprops');
  console.log(stateMany);*/
  return (
  <div>
    <h6 className="text-bold" style={{textAlign: 'left'}}>States in Nigeria</h6>
    <hr className="divider divider-iron"/>
    <div>
      <Row style={{textAlign: 'left'}}>
        <Col xs={6} md={6}>
          <ul className="list list-marked">
            {states1.map((state, i)=>(
              <li key={i}><a href="/state" className="text-primary">{state.name}</a></li>
            ))}
          </ul>
        </Col>
        <Col xs={6} md={6}>
          <ul className="list list-marked">
            {states2.map((state, i)=>(
              <li key={i}><a href="/state" className="text-primary">{state.name}</a></li>
            ))}
          </ul>
        </Col>
      </Row>
    </div>
  </div>
  )
}

const gqlWrapper = gql `
query rootQuery{
  stateMany {
    name
  }
}
`
export default graphql(gqlWrapper, {
  props: ({ data }) => ({
    data
  })
})(StateList)
