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
  /*if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {*/
    // Render a countdown
    return <div>
        <div style={style}>{days}
            <p style={style2}>days</p>
        </div>
        <div style={style}>{hours}
            <p style={style2}>hours</p>
        </div>
        <div style={style}>{minutes}
            <p style={style2}>minutes</p>
        </div>
        <div style={style}>{seconds}
            <p style={style2}>seconds</p>
        </div>
    </div>
  // }
};


class Page extends Component{
    render(){
      console.log(this.props);
      let date, now;
      if (!this.props.isZero) {
        date = new Date(this.props.nextEvent.date).getTime();
        now = (new Date(this.props.currentTime)).getTime();
        console.log(date);
        console.log(now);
      }
      else{
        date = Date.now();
        now = Date.now();
      }
        return(
    <Countdown
        date={date}
        //now={()=>now}
        renderer={renderer}
    />
    )}
}

export default Page
