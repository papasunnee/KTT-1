import { Component} from 'react'
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'

/*const data = [
      {name: 'No', uv: 4000, votes: 9800, amt: 2300},
      {name: 'Yes', uv: 3000, votes: 2400, amt: 2210},
      {name: 'Not Sure', uv: 2000, votes: 1398, amt: 2290},
      // {name: 'Option 4', uv: 2780, votes: 3908, amt: 2000},
];*/

class SimpleBarChart extends Component {
	render () {
    // this.props.poll
    let data = [];
    (this.props.poll.option1.text) && data.push({name: this.props.poll.option1.text,votes: this.props.poll.aVotes});
    (this.props.poll.option2.text) && data.push({name: this.props.poll.option2.text,votes: this.props.poll.aVotes});
    (this.props.poll.option3.text) && data.push({name: this.props.poll.option3.text,votes: this.props.poll.aVotes});
    (this.props.poll.option4.text) && data.push({name: this.props.poll.option4.text,votes: this.props.poll.aVotes});
    console.log(data);
  	return (
    	<BarChart width={500} height={200} data={data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="name"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Bar dataKey="votes" fill="#8884d8" />
      </BarChart>
    );
  }
}

export default SimpleBarChart
