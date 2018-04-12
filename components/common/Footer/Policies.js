import { Carousel} from 'react-bootstrap'
import Link from 'next/link'
const policies=[
  {
    title:'1. Leadership, Governance & Anti-Corruption',
    description: '', link: '/policy/leadership',
    imageSrc : 'leadership'
  },{
    title:'2. Security, Law & Order',
    description: '', link: '/policy/security',
    imageSrc : 'lawandorder'
  },{
    title:'3. Infrastructure',
    description: '', link: '/policy/infrastructure',
    imageSrc : 'infra'
  },{
    title:'4. Education',
    description: '', link: '/policy/education',
    imageSrc : 'education'
  },{
    title:'5. Economy',
    description: '', link: '/policy/economy',
    imageSrc : 'economy'
  },{
    title:'6. Health & Wellbeing',
    description: '', link: '/policy/health-and-Wellbeing',
    imageSrc : 'health'
  },{
    title:'7. Technology',
    description: '', link: '/policy/technology',
    imageSrc : 'technology'
  },{
    title:'8. Implementation',
    description: '', link: '/policy/implementation',
    imageSrc : 'implementation'
  },{
    title:'9. Impact, Assesment & Results',
    description: '', link: '/policy/impact',
    imageSrc : 'analysis'
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
        <p style={{fontWeight: '600', fontSize: '17px'}}>{props.description}</p>
        <div className="offset-top-20 offset-md-top-40">
        <Link  href={"/policy/"+ props.title + "/" + props.imageSrc}>
          <a className="btn btn-secondary" style={{borderColor: 'white', backgroundColor: '#09123A'}}>{props.buttonText}</a>
        </Link>
        </div>
      </div>
)

const PoliciesSection = (props) => {
  return (
    <div>
      <Carousel /*tyle={{minHeight: '300px'}}*/ controls={false}>
        {policies.map((policy, index)=>(
          <Carousel.Item key={index} style={{minHeight: '374px', backgroundSize: 'contain', backgroundImage: `url(/static/images/policy/${policy.imageSrc}.png)`}}>
            {/* <img alt="900x500" src={`/static/images/policy/${policy.imageSrc}.png` || "/static/images/policy/service-bg.jpg"} /> */}
            <Carousel.Caption style={{left: '0%'}}>
              <Policy title={policy.title} imageSrc={policy.imageSrc} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente nulla temporibus voluptates ipsa, ducimus est, aliquid vel harum eligendi totam dignissimos suscipit obcaecati.'}
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
