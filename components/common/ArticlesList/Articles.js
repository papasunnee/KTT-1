import {Component} from 'react'
import {graphql} from 'react-apollo'
import gql from 'graphql-tag'

const Article = props => {
  return (
    <div
      style={{
        color:'grey',
        width: '100%',
        textAlign: 'left',
        position: 'relative',
        display: 'block',
        padding: '15px'
      }}
      >
      <p style={{
          fontWeight: '700',
          fontSize: '27px',
          lineHeight: '27px'
        }}
      ><a href={props.link || "/article"}>{props.title ? props.title : 'Buhari does Something'}</a></p>
      <p style={{lineHeight: '14px', fontSize: '14px'}}>
        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. aisa asdipa asidj
      </p>
      <small><a href={props.link || "/article"}>read more</a></small>
      <hr style={{marginTop: '10px'}}/>
    </div>
  )
}

const Articles = props => {
  const {newsMany} = props.data || [];
  return (
    <div>
      <Article title={'You First: What it Really Means'}/>
      {newsMany.map((news, index)=>(
        <Article key={index} title={news.title}/>
      ))}
      <Article />      
      <Article title={'Solving the Herdsmen crisis'}/>           
    </div>
  )
}

//export default Articles

const gqlWrapper = gql `
query rootQuery{
  newsMany(limit: 4, sort:CREATEDAT_DESC) {
    title
    state
  }
}
`
export default graphql(gqlWrapper, {
  props: ({ data }) => ({
    data
  })
})(Articles)