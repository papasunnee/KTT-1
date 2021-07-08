import {Component} from 'react'
import {graphql} from 'react-apollo'
import gql from 'graphql-tag'

import {Grid, Row, Col } from 'react-bootstrap'
import VideoItem from './VideoItem'
import ModalVideo from 'react-modal-video'

class VideoList extends Component {
  constructor () {
    super()
    this.state = {
      isOpen: false,
      nowPlaying: '',
      page: 1
    }
    this.playVideo = this.playVideo.bind(this)
    this.loadMore = this.loadMore.bind(this)
  }

  playVideo (id) {
    this.setState({nowPlaying: id, isOpen: true})
    console.log(id);
  }

  loadMore(){
    this.props.loadMoreVideos();
  }

  render(){
    // console.log(this.props);
    const { loading, KttvPagination, error } = this.props.data;
    if (loading) {
      return (<div>Loading...</div>)
    }
    if (error) {
      return (<div>There was an issue while fetching Videos</div>)
    }

    let videos = [...KttvPagination.items];
    //if (KttvPagination.pageInfo.currentPage==1){
    //}
    //videos = videos.splice(4);
    const videos1 = [], videos2 = [];
    for (var i = 0; i < videos.length; i++) {
      ((i+1)%2!==0) && videos1.push(videos[i]);
      ((i+1)%2===0) && videos2.push(videos[i]);
    }
    return (
      <div>
        <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId={this.state.nowPlaying} onClose={() => this.setState({isOpen: false})} />
        <h6 className="text-bold" style={{textAlign: 'left'}}>More Videos</h6>
        <hr className="divider divider-iron"/>
        <Row style={{marginTop: '15px'}}>
          <Col md={6}>
            {videos1.map((video)=>(
              <VideoItem video={video} playVideo={this.playVideo}/>
            ))}
          </Col>
          <Col md={6}>
            {videos2.map((video)=>(
              <VideoItem video={video} playVideo={this.playVideo}/>
            ))}
          </Col>
          {(KttvPagination.pageInfo.hasNextPage) && (
            <div style={{width: '100%', paddingBottom: '20px'}}>
              <div className="btn-lrg submit-btn" onClick={this.loadMore}>More Videos</div>
            </div>
          )}
        </Row>
        <style jsx>{`
                .submit-btn {
                    float: center;
                    padding: 7px 35px;
                    border-radius: 60px;
                    display: inline-block;
                    background-color: #4b8cfb;
                    color: white;
                    font-size: 18px;
                    cursor: pointer;
                    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.06),
                            0 2px 10px 0 rgba(0,0,0,0.07);
                    -webkit-transition: all 300ms ease;
                    transition: all 300ms ease;
                }

                .submit-btn:hover {
                    transform: translateY(1px);
                    box-shadow: 0 1px 1px 0 rgba(0,0,0,0.10),
                            0 1px 1px 0 rgba(0,0,0,0.09);
                }
                @media (max-width: 768px) {
                    .submit-btn {
                        float: center;
                        text-align:center;
                    }
                }
        `}</style>
      </div>
    )
  }
}

const gqlWrapper = gql `
query KttvVideos($page: Int){
  KttvPagination(page: $page, perPage: 8, sort: PUBLISHEDAT_DESC) {
    items {
      title
      youtubeId
      thumbnailUrl
    }
    pageInfo {
      currentPage
      hasNextPage
    }
  }
}
`
export default graphql(gqlWrapper, {
  options: {
    variables: { page : 1 }
  },
  props: ({ data }) => ({
    data,
    loadMoreVideos: () => {
      // console.log(data);
      // console.log('data');
      return data.fetchMore({
        variables: {
          page: data.KttvPagination.pageInfo.currentPage + 1
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          if (!fetchMoreResult) {
            return previousResult
          }
          // console.log(KttvPagination);
          // console.log(previousResult);
          // console.log('previousResult');
          // console.log(fetchMoreResult);
          // console.log('fetchMoreResult');
          return Object.assign({}, previousResult, {
            // Append the new posts results to the old one
            KttvPagination: {
              ...fetchMoreResult.KttvPagination,
              items: [...previousResult.KttvPagination.items, ...fetchMoreResult.KttvPagination.items]
            }
          })
        }
      })
    }
  })
})(VideoList)
