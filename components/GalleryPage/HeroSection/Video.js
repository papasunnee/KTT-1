import Head from 'next/head'
import { Component} from 'react'
import ModalVideo from 'react-modal-video'

class video extends Component{
  constructor () {
    super()
    this.state = {
      isOpen: false
    }
    this.openModal = this.openModal.bind(this)
  }

  openModal () {
    this.setState({isOpen: true})
  }

  render () {
    return (
      <div>
        <Head>
          <link rel="stylesheet" href="/static/css/modal-video.css"/>
        </Head>
        <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='L61p2uyiMSo' onClose={() => this.setState({isOpen: false})} />
      </div>
    )
  }
}
export default video
