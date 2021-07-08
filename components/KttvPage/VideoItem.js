export default props => {
  return (
    <div
      style={{
        color:'white',
        minHeight:'270px',
        width: '100%',
        textAlign: 'left',
        backgroundImage: `url(${props.video.thumbnailUrl})` || 'url("/static/images/smallvideobg.png")',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'auto',
        marginBottom: '20px',
        marginTop: '20px'
      }}>
      <div style={{
        position: 'relative',
        /*marginLeft: '15px',
        marginRight: '15px',*/
        background: 'linear-gradient(rgba(255,0,0,0), rgba(0, 0, 0, 0.9))',
        fontFamily: "'Montserrat', sans-serif",
        minHeight: 'inherit',
        maxHeight: 'inherit',
        zIndex: '2'
      }}>
        <div style={{
          padding: '20px 12px 10px',
          position: 'absolute',
          bottom: '0'
        }}>
          {/* <p style={{
              fontWeight: '700',
              fontSize: '30px',
              lineHeight: '18px',
            }}
          ><a style={{color: 'white'}} href="#!" onClick={()=>props.playVideo(props.video.youtubeId)}>{props.video.title || "News Title"}</a></p> */}
          <p style={{lineHeight: '13px', fontSize: '12px'}}>
            <a style={{color: 'white'}} href="#!" onClick={()=>props.playVideo(props.video.youtubeId)}>{props.video.title || "News Title"}</a>
            {/* {props.video.description || "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."} */}
          </p>
          <small><a href="#!" onClick={()=>props.playVideo(props.video.youtubeId)}>▶️ Watch now</a></small>
        </div>
      </div>
    </div>
  )
}
