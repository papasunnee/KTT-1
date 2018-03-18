import {Component} from 'react'
import Head from 'next/head'
import {Grid, Row, Col, Modal , OverlayTrigger,Tooltip,Button} from 'react-bootstrap'

export default class Boxsection extends Component {

    constructor(props, context) {
        super(props, context);
    
        this.handleShow1 = this.handleShow1.bind(this);
        this.handleClose1 = this.handleClose1.bind(this);
        
        this.handleShow2 = this.handleShow2.bind(this);
        this.handleClose2 = this.handleClose2.bind(this);
        
        this.handleShow3 = this.handleShow3.bind(this);
        this.handleClose3 = this.handleClose3.bind(this);
        
        this.handleShow4 = this.handleShow4.bind(this);
        this.handleClose4 = this.handleClose4.bind(this);
        
        this.handleShow5 = this.handleShow5.bind(this);
        this.handleClose5 = this.handleClose5.bind(this);
        
        this.handleShow6 = this.handleShow6.bind(this);
        this.handleClose6 = this.handleClose6.bind(this);
        
        this.handleShow7 = this.handleShow7.bind(this);
        this.handleClose7 = this.handleClose7.bind(this);
        
        this.handleShow8 = this.handleShow8.bind(this);
        this.handleClose8 = this.handleClose8.bind(this);
        
        this.handleShow9 = this.handleShow9.bind(this);
        this.handleClose9 = this.handleClose9.bind(this);
        
        this.handleShow10 = this.handleShow10.bind(this);
        this.handleClose10 = this.handleClose10.bind(this);
        
        this.handleShow11 = this.handleShow11.bind(this);
        this.handleClose11 = this.handleClose11.bind(this);
        
        this.handleShow12 = this.handleShow12.bind(this);
        this.handleClose12 = this.handleClose12.bind(this);
        
        this.state = {
          show1: false,
          show2: false,
          show3: false,
          show4: false,
          show5: false,
          show6: false,
          show7: false,
          show8: false,
          show9: false,
          show10: false,
          show11: false,
          show12: false
        };
      }
    
      handleClose1() {
        this.setState({ show1: false });
      }
    
      handleShow1() {
        this.setState({ show1: true });
      }
    
      handleClose2() {
        this.setState({ show2: false });
      }
    
      handleShow2() {
        this.setState({ show2: true });
      }
    
      handleClose3() {
        this.setState({ show3: false });
      }
    
      handleShow3() {
        this.setState({ show3: true });
      }
    
      handleClose4() {
        this.setState({ show4: false });
      }
    
      handleShow4() {
        this.setState({ show4: true });
      }
    
      handleClose5() {
        this.setState({ show5: false });
      }
    
      handleShow5() {
        this.setState({ show5: true });
      }
    
      handleClose6() {
        this.setState({ show6: false });
      }
    
      handleShow6() {
        this.setState({ show6: true });
      }
    
      handleClose7() {
        this.setState({ show7: false });
      }
    
      handleShow7() {
        this.setState({ show7: true });
      }
    
      handleClose8() {
        this.setState({ show8: false });
      }
    
      handleShow8() {
        this.setState({ show8: true });
      }
    
      handleClose9() {
        this.setState({ show9: false });
      }
    
      handleShow9() {
        this.setState({ show9: true });
      }
    
      handleClose10() {
        this.setState({ show10: false });
      }
    
      handleShow10() {
        this.setState({ show10: true });
      }
    
      handleClose11() {
        this.setState({ show11: false });
      }
    
      handleShow11() {
        this.setState({ show11: true });
      }
    
      handleClose12() {
        this.setState({ show12: false });
      }

      handleShow12() {
        this.setState({ show12: true });
      }

  render(){
      const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;
    return (
        <div>
        <Head>
          <link rel="stylesheet" href="/static/css/profile/component.css" />
          <script type="text/javascript" src="/static/js/profile/modernizr.custom.js"></script>
          <script type="text/javascript" src="/static/js/profile/toucheffects.js"></script>
        </Head>
        <Modal show={this.state.show1} onHide={this.handleClose1} bsSize="large">
          <Modal.Header closeButton>
            {/* <Modal.Title>Title</Modal.Title> */}
          </Modal.Header>
          <Modal.Body>
            <h4>KTT's EDUCATION</h4>
            <p>
                <img src="/static/images/dialogimage.png" style={{width : '100%'}} />
            </p>

            <hr />
            <p>
                  In order to equally acquire western education, he was further enrolled into the then 
                  Nasarawa Primary School, Birnin Kebbi. Kabiru Turaki exhibited clear signs of a gifted 
                  child right from his days in primary school. He distinctively excelled in his academic work. 
                  He was very hardworking, obedient, brilliant and more than all these, he was very respectful.
                   As a testimony of the commendable and sterling qualities of the young Kabiru, he was appointed
                    as the Deputy Head Boy and Time Keeper of the school.
            </p>
            <p>
                Kabiru Tanimu Turaki proceeded to the famous Barewa College, Zaria. 
                Even though the school was full of brilliant students, he proved an exceptional
                 person because he stood out in whatever he did. At Barewa College, Zaria, 
                 he was the Deputy House Captain, Suleiman Barau House and President Young Farmers 
                 Club of the school.
            </p>
            <p>
                In furtherance of his education, Kabiru went to the then College of Arts and Science, 
                Sokoto for his I.J.M.B. Again, it was another success story for Tanimu Turaki as he
                 passed all his paepers brilliantly. This earned him admission into one of Nigeria’s 
                 most respected Universities, the University of Jos, to read Law. He graduated with honour
                  and proceeded to the Nigerian Law School, Lagos where he was called to the Nigerian Bar in 1986.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose1}>Close</Button>
          </Modal.Footer>
        </Modal>

        <Modal show={this.state.show2} onHide={this.handleClose2} bsSize="large">
          <Modal.Header closeButton>
            {/* <Modal.Title>Title</Modal.Title> */}
          </Modal.Header>
          <Modal.Body>
            <h4> KTT's PROFESSION</h4>
            <p>
                <img src="/static/images/dialogimage.png" style={{width : '100%'}} />
            </p>

            <hr />
            <p>
            The Distinguished Senior Advocate of Nigeria has been a member of the 
            National Executive Committee of the Nigerian Bar Association, 
            Chairman Nigerian Bar Association Committee on the Judiciary, 
            as well as member of the Governing Board of the Nigerian Judicail Institute. 
           
            </p>
            <p>
            He was also appointed as the Chairman of the Nigerian Copyright Commission 
            by President Goodluck Ebele Jonathan, GCFR in 2012, a position he held until 
            his appointment in 2013 as a Minister in the government of the Federal Republic 
            of Nigeria, saddled with the responsibility of piloting the affairs of the newly 
            recreated Federal Ministry of Special Duties and Inter – Governmental Affairs, 
            side by side with this he was also appointed by President Goodluck Ebele Jonathan, 
            GCFR, to serve as the Honourable Supervising Minister of the Federal Ministry of
             Labour and Productivity between 2014 – 2015. As a result of his dedication and 
             team work, he was made the Chairman, White Paper Committee on the Report of the 
             Presidential Committee of Experts on Inter – Professional Relationships in the
              Public Health Sector. 
            </p>
            <p>
            President Goodluck Jonathan, GCFR, also recognized Kabiru 
              Tanimu Turaki, SAN effort and identified him worthy of bringing an end to deadly 
              security challenge in the North – East by appointing him as Chairman of the Presidential 
              Committee on Dialogue and Peaceful Resolution of Security Challenges in the North.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose2}>Close</Button>
          </Modal.Footer>
        </Modal>

        <Modal show={this.state.show3} onHide={this.handleClose3} bsSize="large">
          <Modal.Header closeButton>
            {/* <Modal.Title>Title</Modal.Title> */}
          </Modal.Header>
          <Modal.Body>
            <h4>Business</h4>
            <p>
                <img src="/static/images/dialogimage.png" style={{width : '100%'}} />
            </p>

            <hr />
            <p>
            On graduation from the Nigerian Law School, Kabiru Tanimu Turaki opted to be a private legal
             practitioner. Unlike other lawyers who would remain permanent at home. 
             Barrister Kabiru Tanimu Turaki went to Kano where he became a senior counsul with 
             Alhaji Tijjani Abdullahi and Company (Solicitors and Advocates) in 1987. 
             Kabiru Tanimu Turaki needed only two years to established himself as a force to be reckoned
              with in the legal forestry of Kano and its environs. 
              This solid resolution gave birth to K. T. Turaki and Co. In 1989.
            </p>
            <p>
            As a lawyer, Kabiru Tanimu Turaki has practiced in virtually every court and tribunal 
            in the country. From the Magistrate Court, High Court, the Court of Appeal, 
            Armed Robbery Tribual, Miscellaneous Offences Tribunal, Election Petition Tribunals
             and even to the Apex Court, the Supreme Court of Nigeria. 
            </p>
            <p>
            In all these, he has recorded successes that are certainly beyond the ordinary.
              He has held professional responsibilities that are too numerous to mentioned. 
              However, it is worthy to note that Kabiru Tanimu Turaki is a retained external 
              solicitor and legal adviser to many organizations throughout Nigeria.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose3}>Close</Button>
          </Modal.Footer>
        </Modal>

        <Modal show={this.state.show4} onHide={this.handleClose4} bsSize="large">
          <Modal.Header closeButton>
            {/* <Modal.Title>Title</Modal.Title> */}
          </Modal.Header>
          <Modal.Body>
            <h4>Politics</h4>
            <p>
                {/* <img src="/static/images/dialogimage.png" style={{width : '100%'}} /> */}
            </p>

            <hr />
            <p>
            His political career began during school time. As a student, Barrister Kabiru Tanimu Turaki 
            was Chairman of Caretaker Committee of the Students’ Uion of SCAS, Sokoto. While at University
             of Jos, he was a member of the Senate of the National Association of Nigerian Students (NANS).
              This was in addition to being a member of the Students’ Representative Assembly of the
               University and President of the Federated Organisation of Sokoto State Students and President
                of Birnin Kebbi Youth Association (BIKEDA).
            </p>
            <p>
            When he came out to the larger world, Kabiru did not relent but continued participating 
            in politics. He was Secretary, Youth Wing, of National Party of Nigeria (NPN) in 1981.
             He joined United Nigeria Congress Party (UNCP) in 1996 where he stood as Kebbi State 
             Gubernatorial aspirant for the party in 1998, Kabiru Tanimu Turaki joined All Peoples’ 
             Party where he was member of its National Executive Committee and in year 2000 he was elevated
              to member of its Board of Trustees (BOT).
            </p>
            <p>
            However, as paradigm of the political arena in the country shifted, Kabiru decamped to United
             Nigerian Peoples’ Party and contested for the seat of Kebbi State Governor in 2003. 
             After the 2003 elections, he later decamped to PDP the same year and was the Party’s 
             Kebbi State Gubernatorial Aspirant in 2007. Following series of betrayals and numerous 
             controversies, Kabiru decided to Join ACN in 2011. This, however, did not last as he later 
             returned to PDP the same year. In 2014/15, looking at his tremendous achievements and wealth 
             of experience, Kabiru was appointed Deputy Director General (North) of PDP Presidential 
             Campaign Organization.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose4}>Close</Button>
          </Modal.Footer>
        </Modal>

        <Modal show={this.state.show5} onHide={this.handleClose5} bsSize="large">
          <Modal.Header closeButton>
            {/* <Modal.Title>Title</Modal.Title> */}
          </Modal.Header>
          <Modal.Body>
            <h4>Family</h4>
            <p>
                <img src="/static/images/dialogimage.png" style={{width : '100%'}} />
            </p>

            <hr />
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </p>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur
              et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
              auctor.
            </p>
            <p>
              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
              cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
              dui. Donec ullamcorper nulla non metus auctor fringilla.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose5}>Close</Button>
          </Modal.Footer>
        </Modal>

        <Modal show={this.state.show6} onHide={this.handleClose6} bsSize="large">
          <Modal.Header closeButton>
            {/* <Modal.Title>Title</Modal.Title> */}
          </Modal.Header>
          <Modal.Body>
            <h4>Descriptive Text</h4>
            <p>
                <img src="/static/images/dialogimage.png" style={{width : '100%'}} />
            </p>

            <hr />
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </p>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur
              et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
              auctor.
            </p>
            <p>
              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
              cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
              dui. Donec ullamcorper nulla non metus auctor fringilla.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose6}>Close</Button>
          </Modal.Footer>
        </Modal>

        <Modal show={this.state.show7} onHide={this.handleClose7} bsSize="large">
          <Modal.Header closeButton>
            {/* <Modal.Title>Title</Modal.Title> */}
          </Modal.Header>
          <Modal.Body>
            <h4>Hobbies & Travel</h4>
            <p>
                <img src="/static/images/dialogimage.png" style={{width : '100%'}} />
            </p>

            <hr />
            <p>
                Kabiru Tanimu Turaki loves reading, trevelling and sports
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose7}>Close</Button>
          </Modal.Footer>
        </Modal>

        <Modal show={this.state.show8} onHide={this.handleClose8} bsSize="large">
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
            <h4>PUBLIC SERVICE</h4>
            
            <h6>Ministerial Appointments</h6>
            <p>            
                In 2013, the Danmasanin Gwandu was chosen meritoriously by President 
                Goodluck E. Jonathan, GCFR and saddled with the responsibility for rebirthing
                 Ministry of Special Duties and Inter – Governmental Affairs, a position 
                 he served assiduously. Looking closely at his immense contribution to the 
                 Federal Executive Council, the President added the responsibility of 
                 Supervising Ministry of Labour and Productivity in 2014. 
                 Kabiru Tanimu Turaki managed the two Ministries till 2015
            </p>
            <h6>Security Challenges</h6>
            <p>            
            When the need arose to open up dialogue with the Boko Haram insurgents, 
            Danmasanin Gwandu was the National choice of the Federal Government of Nigeria.
            He was thus appointed as the Chairman of the Presidential Committee for Dialogue
            and Peaceful Resolution of Security Challenges in the North. A Committee which
            for more than two years engaged the insurgents in fruitful discussion that saw 
            many key leaders of Boko Haram accepting the Dialogue option as a means of resolving
                the insecurity situation in the North East geo-political zone of Nigeria.
            </p>

            <h6>Other Contributions</h6>
            <p>            
                As part of his remarkable leadership qualities, he was several times chosen, 
                among his colleagues at the Federal Executive Council, to lead Federal Government
                Delegation to Niger, Senegal, as well as Republic of Belarus.
            </p>
            <p>
            He was in 2014 chosen by President Goodluck E. Jonathan, to serve as the Deputy 
            Director General of his Campaign, and subsequently appointed as a member of the 
            Board of Trustees of the Peoples’ Democratic Party (PDP)
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose8}>Close</Button>
          </Modal.Footer>
        </Modal>

        <Modal show={this.state.show9} onHide={this.handleClose9} bsSize="large">
          <Modal.Header closeButton>
            {/* <Modal.Title>Title</Modal.Title> */}
          </Modal.Header>
          <Modal.Body>
            <h4>Descriptive Text</h4>
            <p>
                <img src="/static/images/dialogimage.png" style={{width : '100%'}} />
            </p>

            <hr />
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </p>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur
              et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
              auctor.
            </p>
            <p>
              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
              cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
              dui. Donec ullamcorper nulla non metus auctor fringilla.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose9}>Close</Button>
          </Modal.Footer>
        </Modal>

        <Modal show={this.state.show10} onHide={this.handleClose10} bsSize="large">
          <Modal.Header closeButton>
            {/* <Modal.Title>Title</Modal.Title> */}
          </Modal.Header>
          <Modal.Body>
            <h4>Descriptive Text</h4>
            <p>
                <img src="/static/images/dialogimage.png" style={{width : '100%'}} />
            </p>

            <hr />
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </p>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur
              et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
              auctor.
            </p>
            <p>
              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
              cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
              dui. Donec ullamcorper nulla non metus auctor fringilla.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose10}>Close</Button>
          </Modal.Footer>
        </Modal>

        <Modal show={this.state.show11} onHide={this.handleClose11} bsSize="large">
          <Modal.Header closeButton>
            {/* <Modal.Title>Title</Modal.Title> */}
          </Modal.Header>
          <Modal.Body>
            <h4>Honours & Awards</h4>
            
            <p>
            In recognition of his contribution to the development of Nigeria and humanity, Kabiru Tanimu Turaki has been honoured throughout Nigeria and outside the country. Among his honours and awards are:
            <ul>
                <li>a.	Honorary Life Member, Law Student Society, Bayaro University, Kano</li>
                <li>b.	Patron, Law Students Society, University of Jos</li>
                <li>c.	Patron, Kebbi State Student Association</li>
                <li>d.	Patron, “Tashi Mana” Theatre, Literacy and Debate Club, Waziri Umaru Federal Polytechnic, Birnin Kebbi</li>
                <li>e.	Patron, Association of Deaf and Dumb, Kano State Branch</li>
                <li>f.	Patron, Gwandu Emirate Student Association</li>
                <li>g.	Life Patron, National Association of Nigerian Students (NANS)</li>
                <li>h.	Recipient of Sheikh Abdullahi Fodio Award</li>
                <li>i.	Recipient of National Association of Mathematical Science Student of Nigeria (NAMSSN) Award of Excellence</li>
                <li>j.	Recipient of National Association of Kebbi State Students (NUKESS) Star Award</li>
                <li>k.	Recipient of Distinguished Alumnus of the Year Award by SUG, University of Jos</li>
                <li>l.	Recipient of Distinguished Personality of the Year Award by Law Students, University of Jos</li>
                <li>m.	Recipient of African Meritorious Service Award for Good Leadership</li>
                <li>n.	Recipient of Nigerian Youth Ambassador Award</li>
                <li>o.	Recipient of Arewa Publishers Union Distinguished Merit Award</li>
                <li>p.	Recipient of BEEMA Communications Ltd. Golden Star Award</li>
                <li>q.	Recipient of Barewa Old Boys Association Merit Award</li>
                <li>r.	Recipient of Zenith International Award for Excellence</li>
                <li>s.	Recipient of Icon of Hope Award by National Association of Polytechnic Students (NAPS)</li>
                <li>t.	Recipient of Nigerian Bar Association, Kano Branch, Merit Award</li>
                <li>u.	Recipient of Nigerian Students Merit Award</li>
                <li>v.	Recipient of Glibalink International Leadership Gold Award</li>
                <li>w.	Recipient of NYLF Eceptional Leadership Award</li>
                <li>x.	Recipient of LAWSAN Merit Award</li>
                <li>y.	Recipient of 2009 Kwame Nkrumah Distinguished Leadership Award</li>
                <li>z.	Recipient of AIDO Communication African Outstanding Leader and Philanthropist Award, (Ghana)</li>
                <li>aa.	Recipient of African Role Model Leadership Gold Award for Excellence</li>
                <li>bb.	Recipient of African Credibility Award (ACA)</li>
                <li>cc.	Recipient of Association of Zamfara, Kebbi and Sokoto States Student (AZAKSS) Merit Award</li>
                <li>dd.	Recipient of Fellow of the Chartered Institute of Loan and Risk Management of Nigeria Award</li>
                <li>ee.	Recipient of Fellow of the Civilian Institute of Democratic Administration Award</li>
                <li>ff.	Recipient of a distinguished Award by Body of Senior Advocate of Nigeria (BOSAN) Abuja Branch</li>
                <li>gg.	Recipient of Nigeria Union of Local Government (NULGE) Award</li>
                <li>hh.	Recipient of Special Award by Belarusian Security Organization (KGB)</li>
                <li>ii.	Recipient of Special Recognition Award by BAREWA Old Boys Association (BOBA) National Secretariat</li>
                <li>jj.	Recipient of Special Letter of Commendation for National Service by President Goodluck Ebele Jonathan, GCFR</li>
            </ul>
            </p>
            
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose11}>Close</Button>
          </Modal.Footer>
        </Modal>

        <Modal show={this.state.show12} onHide={this.handleClose12} bsSize="large">
          <Modal.Header closeButton>
            {/* <Modal.Title>Title</Modal.Title> */}
          </Modal.Header>
          <Modal.Body>
            <h4>Tribe, Town & State</h4>
            <p>
                <img src="/static/images/dialogimage.png" style={{width : '100%'}} />
            </p>

            <hr />
            <p>
            Kabiru was born at the Nasarawa area of Kebbi, Kebbi state to the family of Alhaji Tanimu.
             Like other children of his age and in accordance with the great custom of the wonderful people
              of Gwandu Emirate, Kabiru Tanimu was sent to the Qur'anic school, a step which was to later
               mould his character and prepare him for the numerous challenges of life. 
            </p>
            
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose12}>Close</Button>
          </Modal.Footer>
        </Modal>

        <Grid>
            <Row>
            <Col md={8}>
                <h3 className="text-bold" style={{textAlign: 'left'}}>Profile</h3>
                <hr className="divider divider-iron"/>
                <Row>
                
                    <Col md={6}>
                        <div class="grid cs-style-4">
                            <figure>
                                <div><img src="/static/images/profile/pro.png" alt="img05"/></div>
                                <figcaption>
                                    <h3>Education</h3>
                                    <span>KTT -19</span>
                                    <Button className="anchor" bsStyle="link" onClick={this.handleShow1}>Take a Look</Button>
                                </figcaption>
                            </figure>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div class="grid cs-style-4">
                            <figure>
                                <div><img src="/static/images/profile/pro.png" alt="img06"/></div>
                                <figcaption>
                                    <h3>Profession</h3>
                                    <span>KTT -19</span>
                                    <Button className="anchor" bsStyle="link" onClick={this.handleShow2}>Take a Look</Button>
                                </figcaption>
                            </figure>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div class="grid cs-style-4">
                            <figure>
                                <div><img src="/static/images/profile/pro.png" alt="img05"/></div>
                                <figcaption>
                                    <h3>Business</h3>
                                    <span>KTT -19</span>
                                    <Button className="anchor" bsStyle="link" onClick={this.handleShow3}>Take a Look</Button>
                                </figcaption>
                            </figure>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div class="grid cs-style-4">
                            <figure>
                                <div><img src="/static/images/profile/pro.png" alt="img02"/></div>
                                <figcaption>
                                    <h3>Politics</h3>
                                    <span>KTT -19</span>
                                    <Button className="anchor" bsStyle="link" onClick={this.handleShow4}>Take a Look</Button>
                                </figcaption>
                            </figure>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div class="grid cs-style-4">
                            <figure>
                                <div><img src="/static/images/profile/pro.png" alt="img04"/></div>
                                <figcaption>
                                    <h3>Family</h3>
                                    <span>KTT -19</span>
                                    <Button className="anchor" bsStyle="link" onClick={this.handleShow5}>Take a Look</Button>
                                </figcaption>
                            </figure>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div class="grid cs-style-4">
                            <figure>
                                <div><img src="/static/images/profile/pro.png" alt="img04"/></div>
                                <figcaption>
                                    <h3>Philantrophy</h3>
                                    <span>KTT -19</span>
                                    <Button className="anchor" bsStyle="link" onClick={this.handleShow6}>Take a Look</Button>
                                </figcaption>
                            </figure>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div class="grid cs-style-4">
                            <figure>
                                <div><img src="/static/images/profile/pro.png" alt="img01"/></div>
                                <figcaption>
                                    <h3>Hobbies & Travel</h3>
                                    <span>KTT -19</span>
                                    <Button className="anchor" bsStyle="link" onClick={this.handleShow7}>Take a Look</Button>
                                </figcaption>
                            </figure>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div class="grid cs-style-4">
                            <figure>
                                <div><img src="/static/images/profile/pro.png" alt="img03"/></div>
                                <figcaption>
                                    <h3>Public Service</h3>
                                    <span>KTT -19</span>
                                    <Button className="anchor" bsStyle="link" onClick={this.handleShow8}>Take a Look</Button>
                                </figcaption>
                            </figure>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div class="grid cs-style-4">
                            <figure>
                                <div><img src="/static/images/profile/pro.png" alt="img03"/></div>
                                <figcaption>
                                    <h3>Religion</h3>
                                    <span>KTT -19</span>
                                    <Button className="anchor" bsStyle="link" onClick={this.handleShow9}>Take a Look</Button>
                                </figcaption>
                            </figure>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div class="grid cs-style-4">
                            <figure>
                                <div><img src="/static/images/profile/pro.png" alt="img05"/></div>
                                <figcaption>
                                    <h3>Chieftancy Titles</h3>
                                    <span>KTT -19</span>
                                    <Button className="anchor" bsStyle="link" onClick={this.handleShow10}>Take a Look</Button>
                                </figcaption>
                            </figure>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div class="grid cs-style-4">
                            <figure>
                                <div><img src="/static/images/profile/pro.png" alt="img06"/></div>
                                <figcaption>
                                    <h3>Honour & Awards</h3>
                                    <span>KTT -19</span>
                                    <Button className="anchor" bsStyle="link" onClick={this.handleShow11}>Take a Look</Button>
                                </figcaption>
                            </figure>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div class="grid cs-style-4">
                            <figure>
                                <div><img src="/static/images/profile/pro.png" alt="img05"/></div>
                                <figcaption>
                                    <h3>Tribe, Town & State</h3>
                                    <span>KTT -19</span>
                                    <Button className="anchor" bsStyle="link" onClick={this.handleShow12}>Take a Look</Button>
                                </figcaption>
                            </figure>
                        </div>
                    </Col>     
                </Row>
            </Col>
            <Col md={4}>
                <div style={{
                    margin : '65px 0px'
                }}>
                    <img src="/static/images/sidebanner.png" style={{
                        width : '100%'
                    }} />
                </div>

                <div style={{
                    margin : '90px 0px'
                }}>
                    <img src="/static/images/turakigray.png" style={{
                        width : '100%'
                    }} />
                </div>
            </Col>
            </Row>
        </Grid>
      </div>
    )
  }
}
