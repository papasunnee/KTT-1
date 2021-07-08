//import TopNav from './TopNav'

const HeroSection = (props) => {
  return (
    <section className="section-60 section-lg-143 section-lg-bottom-155 bg-image-center bg-image-home-5"
      style={{
        backgroundImage: 'url("/static/images/background.gif")',
        height: '500px'
      }}>
      <div style={{marginTop : '-40px'}}>
        <img src='/static/images/sdas.png' style={{
          width : '715px',
          height : '415px'
        }}/>
        {/* <iframe width="760" height="415" src="https://www.youtube-nocookie.com/embed/W_VQbtO3ChM?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> */}
      </div>
    </section>
  )
}
export default HeroSection
