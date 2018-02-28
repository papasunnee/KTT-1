//import TopNav from './TopNav'

const HeroSection = (props) => {
  const imageURL = `/static/images/policy/${props.imageSrc}.png` || '/static/images/dantokpa-traffic2.png'
  return (
    <section className="section-60 section-lg-143 section-lg-bottom-155 bg-image-center bg-image-home-5"
      style={{
        backgroundImage: `url(${imageURL})`,
        height: '500px'
      }}>
    </section>
  )
}
export default HeroSection
