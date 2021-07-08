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
      ><a href={props.link || "/article"} target={props.link? "_blank" : "/article"}>{props.title ? props.title : 'Buhari does Something'}</a></p>
      <p style={{lineHeight: '14px', fontSize: '14px'}}>
        {props.brief || "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. aisa asdipa asidj"}
      </p>
      <small><a href={props.link || "/article"} target={props.link? "_blank" : "/article"}>read more</a></small>
      <hr style={{marginTop: '10px'}}/>
    </div>
  )
}

const Articles = props => {
  //console.log(props.data);
  //const {newsMany} = props.data || [];
  const articles = props.articles || [];
  //combining articles from the411ng and ktt backend
  //let allItems = [...newsMany,...articles];

  let allItems = [...articles];

  allItems.sort(function(a, b) {
    a = new Date(a.publishedDate || a.createdAt);
    b = new Date(b.publishedDate || b.createdAt);
    return a>b ? -1 : a<b ? 1 : 0;
  });
  //select the first 04 items most recent items only
  //console.log(allItems);
  //allItems = allItems.slice(0, 9);
  allItems = allItems.slice(0, 4);

  return (
    <div>
      <Article title={'You First: What it Really Means'}/>
      {allItems.map((item, index)=>(
        <Article key={index} title={item.title} link={item.link} brief={item.brief}/>
      ))}
    </div>
  )
}

//export default Articles
const gqlWrapper = gql `
query rootQuery{
  newsMany(limit: 4, sort:CREATEDAT_DESC) {
    title
    state
    createdAt
  }
}
`
export default graphql(gqlWrapper, {
  props: ({ data }) => ({
    data
  })
})(Articles)
