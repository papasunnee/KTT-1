import {Component} from 'react'
import Articles from './Articles'

const ArticlesList = props => {
  return (
    <div>
      <div style={{padding: '0px 15px 15px'}}>
        <h6 className="text-bold" style={{textAlign: 'left'}}>{props.title || "Articles"}</h6>
        <hr className="divider divider-iron"/>
      </div>
      <Articles />      
    </div>
  )
}

export default ArticlesList