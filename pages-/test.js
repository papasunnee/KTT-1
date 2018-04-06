import { Component } from 'react';
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown-now';
 
// Random component
const Completionist = () => <span>You are good to go!</span>;
const style = {
    border : '1px solid #FFF',
    padding : '20px',
    borderRadius : '4px',
    background: 'linear-gradient(to bottom right,#4E707C, #000)',
    width : '100px'
}
 
// Renderer callback with condition
const renderer = ({days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return <span style={{ 
        color : '#F2F2F2',
        fontSize : '50px',
        fontWeight : 'bolder',
    }}>
    <span style={style}>{days}</span>
    <span style={style}>{hours}</span>
    <span style={style}>{minutes}</span>
    <span style={style}>{seconds}</span>
    </span>
  }
};
 

class Page extends Component{
    render(){
        return(
    <Countdown
        date={new Date("Aug 15, 2018 15:37:25").getTime()}
        renderer={renderer}
    />
    )}
}

export default Page