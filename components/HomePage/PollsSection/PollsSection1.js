import { Component} from 'react'
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import green from 'material-ui/colors/green';
import Radio from 'material-ui/Radio';

const styles = {
  checked: {
    color: green[500],
  },
};

class RadioButtons extends React.Component {
  state = {
    selectedValue: 'a',
  };

  handleChange = event => {
    this.setState({ selectedValue: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Radio
          checked={this.state.selectedValue === 'a'}
          onChange={this.handleChange}
          value="a"
          name="radio-button-demo"
          aria-label="A"
        />
        <Radio
          checked={this.state.selectedValue === 'b'}
          onChange={this.handleChange}
          value="b"
          name="radio-button-demo"
          aria-label="B"
        />
        <Radio
          checked={this.state.selectedValue === 'c'}
          onChange={this.handleChange}
          value="c"
          name="radio-button-demo"
          aria-label="C"
          classes={{
            checked: classes.checked,
          }}
        />
      </div>
    );
  }
}

RadioButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

const Rad = withStyles(styles)(RadioButtons);

import { Row, Col, FormGroup, FormControl, ControlLabel, } from 'react-bootstrap'

export default class PollsSection extends Component{
  constructor(props) {
    super(props);
    this.state = {value: 'ss'};
  }

  render(){
    return(
      <section>
        <Row style={{backgroundColor: '#2bbfd9', color: 'white'}}>
          <Col md={6}>
            Poll
            <div style={{textAlign: 'left'}}>
              <form>
                <FormGroup>
                  <ControlLabel>This is a Survey Question</ControlLabel>
                  {/*<Radio name="radioGroup">
                    Option 1
                  </Radio>
                  <Radio name="radioGroup">
                    Option 2
                  </Radio>
                  <Radio name="radioGroup">
                    Option 3
                  </Radio>*/}
                  <Rad/>
                </FormGroup>
              </form>
            </div>
          </Col>
          <Col md={6}>
            Results
          </Col>
        </Row>
      </section>
    )
  }
}
