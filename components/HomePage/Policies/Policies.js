import { Carousel} from 'react-bootstrap'
const policies=[
  {
    title:'Leadership, Governance & Anti-Corruption',
    description: ''
  },{
    title:'Security, Law & Order',
    description: ''
  },{
    title:'Infrastructure',
    description: ''
  },{
    title:'Education',
    description: ''
  },{
    title:'Economy',
    description: ''
  },{
    title:'Health & Wellbeing',
    description: ''
  },{
    title:'Technology',
    description: ''
  },{
    title:'Implementation',
    description: ''
  },{
    title:'Impact, Assesment & Results',
    description: ''
  },
]
const Policy = props => (
      <div style={{
        backgroundColor: '#0000007d',
        textAlign: 'left',
        padding: '20px',
        width: '60%',
        marginLeft: '60px'
      }}>
        <h3 style={{color: 'white', fontSize: '40px', fontWeight: '600', paddingBottom: '10px'}}>{props.title}</h3>
        <p style={{fontWeight: '600', fontSize: '20px'}}>{props.description}</p>
        <div className="offset-top-20 offset-md-top-40"><a href={props.link} className="btn btn-secondary" style={{borderColor: 'white', backgroundColor: '#09123A'}}>{props.buttonText}</a></div>
      </div>
)

const PoliciesSection = (props) => {
  return (
    <div>
      <Carousel controls={false}>
        {policies.map((policy, index)=>(
          <Carousel.Item key={index}>
            <img alt="900x500" src={props.imageSrc || "/static/images/service-bg.jpg"} />
            <Carousel.Caption style={{left: '0%'}}>
              <Policy title={policy.title} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente nulla temporibus voluptates ipsa, ducimus est, aliquid vel harum eligendi totam dignissimos suscipit obcaecati.'}
                buttonText={'Find Out How'} link={'/policy'}/>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  )
}
export default PoliciesSection
