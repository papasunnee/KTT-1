//import { Grid, Row, Col} from 'react-bootstrap'

const ChoiceContent = (props) => {
  return (
    <section className="section-60 section-md-120 pre-section"
      style={{
//        backgroundImage: "url('/static/images/ss-news-journalism.jpg')",
        backgroundImage: "url('/static/images/fox-news-new-newsroom2.png')",
        backgroundPositionY: "-30px"
      }}
      >
      <div className="shell-wide">
        <div className="range range-xs-center">
          <div className="cell-xs-12 cell-md-10 cell-xl-6">
            <h2 className="text-bold" style={{color: '#393a3c'}}>KTT Television</h2>
            <p className="offset-top-50" style={{color: '#393a3c', fontWeight: '550'}}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente nulla temporibus voluptates ipsa, ducimus est, aliquid vel harum eligendi totam dignissimos suscipit obcaecati. Praesentium obcaecati ad accusamus voluptatum consequuntur, accusantium?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente nulla temporibus voluptates ipsa, ducimus est, aliquid vel harum eligendi totam dignissimos suscipit obcaecati. Praesentium obcaecati ad accusamus voluptatum consequuntur, accusantium?
            </p>
            <div className="offset-top-20 offset-md-top-40"><a href="/news" className="btn btn-secondary" style={{borderColor: 'white', backgroundColor: '#12806B'}}>Check it out</a></div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default ChoiceContent
