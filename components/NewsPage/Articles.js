import {Component} from 'react'

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
      ><a href={props.link || "#"}>{props.title ? props.title : 'Buhari does Something'}</a></p>
      <p style={{lineHeight: '14px', fontSize: '14px'}}>
        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. aisa asdipa asidj
      </p>
      <small><a href={props.link || "#"}>read more</a></small>
      <hr style={{marginTop: '10px'}}/>
    </div>
  )
}

const Articles = props => {
  return (
    <div>
      <Article />
      <Article title={'You First: What it Really Means'}/>
      <Article title={'Solving the Herdsmen crisis'}/>
      <Article />
      <Article title={'You First: What it Really Means'}/>
      <Article title={'Solving the Herdsmen crisis'}/>
    </div>
  )
}
