import { Component } from 'react';
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown-now';

// Random component
const Completionist = () => <span>You are good to go!</span>;
/*const styles = {
  li: {
    display: 'inline-block',
    fontSize: '1em',
    listStyleType: 'none',
    padding: '1em',
    textTransform: 'uppercase',
  },
  span: {
    display: 'block',
    fontSize: '4rem'
  }
}*/

const style = {
    border : '1px solid #FFF',
    padding : '20px',
    margin : '2px',
    borderRadius : '4px',
    background: 'linear-gradient(to bottom right,#4E707C, #000)',
    width : '120px',
    display: 'inline-block',
    // float : 'left',
    color : '#F2F2F2',
    fontSize : '4rem',
    // fontWeight : 'bolder',
    // margin : 'auto'
}

const style2 = {
    fontSize : '0.3em',
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
    return <div className="timer" >
      <div className="half-time">
        <div style={style}>{days}
          <p style={style2}>days</p>
        </div>
        <div style={style}>{hours}
          <p style={style2}>hours</p>
        </div>
      </div>
      <div className="half-time">
        <div style={style}>{minutes}
          <p style={style2}>minutes</p>
        </div>
        <div style={style}>{seconds}
          <p style={style2}>seconds</p>
        </div>
      </div>
      <style jsx>{`
        @media (min-width: 992px){
          .half-time {
            width: 50%;
          }
          .timer{
            display: inline-flex;
          }
        }
      `}</style>
    </div>
    // return <ul>
    //   <li style={styles.li}><span style={styles.span} id="days">{days}</span>days</li>
    //   <li style={styles.li}><span style={styles.span} id="hours">{hours}</span>Hours</li>
    //   <li style={styles.li}><span style={styles.span} id="minutes">{minutes}</span>Minutes</li>
    //   <li style={styles.li}><span style={styles.span} id="seconds">{seconds}</span>Seconds</li>
    // </ul>
  // }
};


class Page extends Component{
    render(){
      // console.log(this.props);
      let date, now;
      if (!this.props.isZero) {
        date = new Date(this.props.nextEvent.date).getTime();
        now = (new Date(this.props.currentTime)).getTime();
        // console.log(date);
        // console.log(now);
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
