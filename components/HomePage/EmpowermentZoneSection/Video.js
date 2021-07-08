import Head from 'next/head'
import {Component} from 'react'
import {graphql} from 'react-apollo'
import gql from 'graphql-tag'
import ModalVideo from 'react-modal-video'

class video extends Component{
  constructor (props) {
    super(props)
    this.state = {
      isOpen: false,
      MONTHS : ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"]
    }
    this.openModal = this.openModal.bind(this)
  }

  openModal () {
    this.setState({isOpen: true})
  }

  render () {
    const { currentTime } = this.props.data
    const t = new Date(currentTime);
    return (
      <div>
        <Head>
          <link rel="stylesheet" href="/static/css/modal-video.css"/>
        </Head>
        <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='L61p2uyiMSo' onClose={() => this.setState({isOpen: false})} />
        <div className="post-body" style={{width: '100%', backgroundColor: "rgba(0, 0, 0, 0.63)"}}>
          <h4 className="text-bold"><a href="#!" onClick={this.openModal}>Play video</a></h4>
          <ul className="list-inline list-inline-md">
            <li><span className="icon mdi mdi-calendar text-middle"></span>
              <time datetime="2017-04-30" className="text-middle">{this.state.MONTHS[t.getMonth()]}, {t.getDate()}</time>
            </li>
            <li><span className="icon mdi mdi-map-marker text-middle"></span><span className="text-middle">Click Here To Watch Videos on KTT Television</span></li>
          </ul>
        </div>
      </div>
    )
  }
}
// export default video
export const gqlWrapper = gql`
   query {
     currentTime
   }
 `

 export default graphql(gqlWrapper, {
   props: ({ data }) => ({
     data
   })
 })(video)
