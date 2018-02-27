import { Carousel} from 'react-bootstrap'
const policies=[
  {
    title:'1. Leadership, Governance & Anti-Corruption',
    description: '', link: '/policy/leadership',
    imageSrc : '/static/images/leadership.png'
  },{
    title:'2. Security, Law & Order',
    description: '', link: '/policy/security',
    imageSrc : '/static/images/policy/lawandorder.png'
  },{
    title:'3. Infrastructure',
    description: '', link: '/policy/infrastructure',
    imageSrc : '/static/images/policy/infra.png'
  },{
    title:'4. Education',
    description: '', link: '/policy/education',
    imageSrc : '/static/images/policy/education.png'
  },{
    title:'5. Economy',
    description: '', link: '/policy/economy',
    imageSrc : '/static/images/policy/economy.png'
  },{
    title:'6. Health & Wellbeing',
    description: '', link: '/policy/health-and-Wellbeing',
    imageSrc : '/static/images/policy/health.png'
  },{
    title:'7. Technology',
    description: '', link: '/policy/technology',
    imageSrc : '/static/images/policy/technology.png'
  },{
    title:'8. Implementation',
    description: '', link: '/policy/implementation',
    imageSrc : '/static/images/policy/implementation.png'
  },{
    title:'9. Impact, Assesment & Results',
    description: '', link: '/policy/impact',
    imageSrc : '/static/images/policy/analysis.png'
  },
]
const Policy = props => (
      <div style={{
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        textAlign: 'left',
        padding: '20px',
        width: '80%',
        marginLeft: '60px'
      }}>
        <h3 style={{color: 'white',
          fontSize: '40px',
          fontWeight: '600',
          paddingBottom: '10px'
        }}>{props.title}</h3>
        <p style={{fontWeight: '600', fontSize: '20px'}}>{props.description}</p>
        <div className="offset-top-20 offset-md-top-40"><a href={"/policy/"+props.title} className="btn btn-secondary" style={{borderColor: 'white', backgroundColor: '#09123A'}}>{props.buttonText}</a></div>
      </div>
)

const PoliciesSection = (props) => {
  return (
    <div>
      <Carousel controls={false}>
        {policies.map((policy, index)=>(
          <Carousel.Item key={index}>
            <img alt="900x500" src={policy.imageSrc || "/static/images/policy/service-bg.jpg"} />
            <Carousel.Caption style={{left: '0%'}}>
              <Policy title={policy.title} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente nulla temporibus voluptates ipsa, ducimus est, aliquid vel harum eligendi totam dignissimos suscipit obcaecati.'}
                buttonText={'Find Out How'} link={policy.link}/>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <style jsx>{`
        .carousel-indicators{
          left: 90%;
        }
      `}</style>
    </div>
  )
}
export default PoliciesSection
