//import { Grid, Row, Col} from 'react-bootstrap'

const GetInvolvedSection = (props) => {
  return (
    <div>
      <section style={{
        backgroundImage: "url(/static/img/get-involved.jpg)",
        backgroundPositionY: "-170px"
      }} className="bg-image bg-fixed context-dark">
        <div className="shell-fluid text-sm-left">
          <div className="range">
            <div className="cell-sm-6 cell-md-5 cell-lg-4 section-60 section-lg-155 section-lg-bottom-160 cell-lg-preffix-1">
              <div style={{
                marginRight: '-10px',
                padding: '20px',
                backgroundColor: 'rgba(0, 0, 0, 0.52)'
              }}>
                <h2 className="bigger text-bold">Get Involved</h2>
                <div className="offset-top-30">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                  </p>
                  <a href="/contact" className="btn btn-white-outline offset-top-55"
                    style={{backgroundColor: '#09123A'}}
                  >learn more</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default GetInvolvedSection
