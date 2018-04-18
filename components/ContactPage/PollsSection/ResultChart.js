import { Component} from 'react'
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts'

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
    // (this.props.poll.option1.text) && data.push({name: this.props.poll.option1.text,votes: this.props.poll.aVotes});
    // (this.props.poll.option2.text) && data.push({name: this.props.poll.option2.text,votes: this.props.poll.bVotes});
    // (this.props.poll.option3.text) && data.push({name: this.props.poll.option3.text,votes: this.props.poll.cVotes});
    // (this.props.poll.option4.text) && data.push({name: this.props.poll.option4.text,votes: this.props.poll.dVotes});
		let chartData = { name: "Votes" };

		if (this.props.poll.option1.text)
		 chartData[this.props.poll.option1.text] = this.props.poll.aVotes;
		if (this.props.poll.option2.text)
			chartData[this.props.poll.option2.text] = this.props.poll.bVotes;
		if (this.props.poll.option3.text)
			chartData[this.props.poll.option3.text] = this.props.poll.cVotes;
		if (this.props.poll.option4.text)
			chartData[this.props.poll.option4.text] = this.props.poll.dVotes;

		data.push(chartData);
    // console.log(data);
  	return (
			<ResponsiveContainer>
				<BarChart width={400} height={300} data={data}
					margin={{top: 5, right: 15, left: 15, bottom: 15}}>
					<XAxis dataKey="name"/>
					<YAxis/>
					<CartesianGrid strokeDasharray="3 3"/>
					<Tooltip/>
					<Legend />
					{(this.props.poll.option1.text) && <Bar dataKey={this.props.poll.option1.text} fill="#8884d8" />}
					{(this.props.poll.option2.text) && <Bar dataKey={this.props.poll.option2.text} fill="#82ca9d" />}
					{(this.props.poll.option3.text) && <Bar dataKey={this.props.poll.option3.text} fill="#1f77b4" />}
					{(this.props.poll.option4.text) && <Bar dataKey={this.props.poll.option4.text} fill="#d62728" />}
				</BarChart>
			</ResponsiveContainer>
    );
  }
}

export default SimpleBarChart
