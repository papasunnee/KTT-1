import { Component} from 'react'
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'

const data = [
      {name: 'Option 1', uv: 4000, votes: 2400, amt: 2300},
      {name: 'Option 2', uv: 3000, votes: 1398, amt: 2210},
      {name: 'Option 3', uv: 2000, votes: 9800, amt: 2290},
      {name: 'Option 4', uv: 2780, votes: 3908, amt: 2000},
];

class SimpleBarChart extends Component {
	render () {
  	return (
    	<BarChart width={600} height={300} data={data}
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
