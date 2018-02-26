import { Carousel} from 'react-bootstrap'
const policies=[
  {
    title:'Leadership, Governance & Anti-Corruption',
    description: '', link: '/policy/leadership'
  },{
    title:'Security, Law & Order',
    description: '', link: '/policy/security'
  },{
    title:'Infrastructure',
    description: '', link: '/policy/infrastructure'
  },{
    title:'Education',
    description: '', link: '/policy/education'
  },{
    title:'Economy',
    description: '', link: '/policy/economy'
  },{
    title:'Health & Wellbeing',
    description: '', link: '/policy/health-and-Wellbeing'
  },{
    title:'Technology',
    description: '', link: '/policy/technology'
  },{
    title:'Implementation',
    description: '', link: '/policy/implementation'
  },{
    title:'Impact, Assesment & Results',
    description: '', link: '/policy/impact'
  },
]
const Policy = props => (
      <div style={{
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        textAlign: 'left',
        padding: '20px',
        width: '60%',
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
            <img alt="900x500" src={props.imageSrc || "/static/images/service-bg.jpg"} />
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
