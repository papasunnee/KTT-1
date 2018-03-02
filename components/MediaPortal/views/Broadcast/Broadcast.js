import { Component} from 'react'
import Articles from './Articles/Articles'
import Videos from './Videos/Videos'
import Images from './Images/Images'

import {
  Badge,
  Row,
  Col,
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  Label,
  Input,
  Form,
  FormText,
  FormGroup,
  Collapse,
  Button,
  Nav, NavItem, NavLink, TabContent, TabPane
} from 'reactstrap';
import classnames from 'classnames';
//    border-bottom: 1px solid #a4b7c1;
export default class NewMessage extends Component {
  constructor(props){
    super(props)
    this.toggle = this.toggle.bind(this);
    this.toggleTab = this.toggleTab.bind(this);

    this.state = {
      collapse: true,
      activeTab: '1'
    }
  }

  toggleTab(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  toggle() {
    this.setState({collapse: !this.state.collapse});
  }

  render(){
    return (
      <Row>
        <Col xs="12" sm="12" md="12">
          <Card className="card-accent-success">
            <CardHeader>
              <i className="icon-feed"></i><strong>Latest Broadcast</strong>
              <Label className="switch switch-lg switch-text switch-info float-right mb-0">
                <Input type="checkbox" className="switch-input" onClick={this.toggle}/>
                <span className="switch-label" data-on="On" data-off="Off"></span>
                <span className="switch-handle"></span>
              </Label>
            </CardHeader>
            <Collapse isOpen={this.state.collapse}>
              <CardBody>
                <Row style={{padding: '30px'}}>
                  <Col xs="12" md="12" className="mb-4">
                  <div className="h5 title" style={{fontWeight: '700', padding: '1rem 0', borderBottom: '1px solid #a4b7c1', width: '100%'}}>
                    Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
                  </div>
                    <Nav tabs style={{paddingTop: '10px'}}>
                      <NavItem>
                        <NavLink
                          className={classnames({ active: this.state.activeTab === '1' })}
                          onClick={() => { this.toggleTab('1'); }}
                        >
                          <i className="icon-docs"></i> <span> Articles</span>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({ active: this.state.activeTab === '2' })}
                          onClick={() => { this.toggleTab('2'); }}
                        >
                          <i className="icon-control-play"></i> <span> Videos</span>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({ active: this.state.activeTab === '3' })}
                          onClick={() => { this.toggleTab('3'); }}
                        >
                          <i className="icon-eye"></i> <span> Banners / Logos</span>
                        </NavLink>
                      </NavItem>
                    </Nav>
                    <TabContent activeTab={this.state.activeTab}>
                      <TabPane tabId="1">
                        <Articles />
                      </TabPane>
                      <TabPane tabId="2">
                        <Videos />
                      </TabPane>
                      <TabPane tabId="3">
                        <Images />
                      </TabPane>
                    </TabContent>
                  </Col>
                </Row>
              </CardBody>
            </Collapse>
          </Card>
        </Col>
      </Row>
    )
  }
}
