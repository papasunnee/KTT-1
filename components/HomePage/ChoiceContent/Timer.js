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
    width : '100px',
    float : 'left',
    color : '#F2F2F2',
    fontSize : '30px',
    fontWeight : 'bolder',
    margin : 'auto'
}

const style2 = {
    fontSize : '11px',
    margin : 'auto',
    color : '#FFF',
    fontWeight : '100',
}
 
// Renderer callback with condition
const renderer = ({days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return <div>
        <p style={style}>{days}
            <p style={style2}>days</p>
        </p>
        <p style={style}>{hours}
            <p style={style2}>hours</p>
        </p>
        <p style={style}>{minutes}
            <p style={style2}>minutes</p>
        </p>
        <p style={style}>{seconds}
            <p style={style2}>seconds</p>
        </p>
    </div>
  }
};
 

class Page extends Component{
    render(){
        return(
    <Countdown
        date={new Date("Aug 18, 2018 00:00:00").getTime()}
        renderer={renderer}
    />
    )}
}

export default Page