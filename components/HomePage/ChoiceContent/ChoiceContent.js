//import { Grid, Row, Col} from 'react-bootstrap'

const ChoiceContent = (props) => {
  return (
    <section className="section-60 section-md-120 pre-section">
      <div className="shell-wide">
        <div className="range range-xs-center">
          <div className="cell-xs-12 cell-md-10 cell-xl-6">
            <h2 className="text-bold">{props.title || "Caption Slogan text Here"}</h2>
            <p className="offset-top-50">
              {
                props.content || "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente nulla temporibus voluptates ipsa, ducimus est, aliquid vel harum eligendi totam dignissimos suscipit obcaecati. Praesentium obcaecati ad accusamus voluptatum consequuntur, accusantium?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente nulla temporibus voluptates ipsa, ducimus est, aliquid vel harum eligendi totam dignissimos suscipit obcaecati. Praesentium obcaecati ad accusamus voluptatum consequuntur, accusantium?"
              }
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default ChoiceContent
