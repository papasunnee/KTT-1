//import { Grid, Row, Col} from 'react-bootstrap'

const ChoiceContent = (props) => {
  return (
    <section className="section-60 section-md-120 pre-section"
      style={{
//      backgroundImage: "url('/static/images/ss-news-journalism.jpg')",
//        backgroundImage: "url('/static/images/fox-news-new-newsroom2.png')",
//        backgroundPositionY: "-40px",
//        backgroundSize: "cover"
      }}
      >
      <div className="shell-wide">
        <div className="range range-xs-center">
        <h2 className="text-bold">PROSPERITY FOR ALL NIGERIANS</h2>
        <h5 style={{marginBottom : '40px'}}>A RADICAL, AMBITIOUS & JOB-CENTRIC AGENDA TO SECURE THE WELLBEING AND FUTURE OF NIGERIA.</h5>

        <div className="cell-xs-12 cell-md-6 cell-xl-6">
          <img src="/static/img/ktttv.png" style={{ width : '100%'}} />
        </div>
        <div className="cell-xs-12 cell-md-6 cell-xl-6">
          <p style={{color: '#393a3c', fontWeight: '200', fontStyle : 'oblique', textAlign : 'justify' , fontSize: '22px'  }}>
          Nigeria is on the verge of a rebirth and reconstruction into <span className="text-success">A NEW NIGERIA</span>,
          where the economy works for everyone, not just the privileged and powerful
          few; where inequality and social injustice is eradicated, where everyone has a
          fair chance to succeed in life, where quality education and healthcare is a
          priority and affordable to the ordinary citizen, where our youth full of energy
          and talents are able to rightly pursue their dreams, where everyone will feel
          safe in their own homes and communities without the risk or threat of being
          slaughtered.<br/> <span className="text-success">A NEW NIGERIA</span>, where our leaders and government at all levels
          can be trusted to rightly manage the resources of the nation without the fear of
          looting being the order of the day. <span className="text-success">A NEW NIGERIA</span>, where no one is above the
          law, not even the President of the Federal Republic of Nigeria and his closest
          associates and family. <span className="text-success">A NEW NIGERIA</span>, strong, united at home and respected
          abroad.<br /> We dare to dream because Nigerians deserves better and there must
          be a departure from the past and the current, in order to secure our future
          existence as a prosperous and successful country. You have the power to make
          Nigeria great and this election is your opportunity to make it happen sooner
          rather than later. I seek your vote and support and together, we will realise the
          full potential of this country.
          </p>
          <div className="offset-top-20 offset-md-top-40" style={{ fontFamily: 'Mrs Saint Delafield, cursive', fontSize : '40px', fontColor:'pink', fontWeight : 'bolder', textAlign: 'right' }}>Kabiru Tanumi Turaki</div>
    {/*<div className="offset-top-20 offset-md-top-40"><a href="/news" className="btn btn-secondary" style={{borderColor: 'white', backgroundColor: '#09123A'}}>Check it out</a></div>*/}
        </div>
        </div>
      </div>
    </section>
  )
}
export default ChoiceContent
