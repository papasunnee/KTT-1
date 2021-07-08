import dynamic from 'next/dynamic'
const Gallery = dynamic(
  import ('./Gallery/index'),
  {ssr: false}
)

export default props => (
  <Gallery />
)
