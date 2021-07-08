import {DropdownButton, MenuItem} from 'react-bootstrap'

/*import dynamic from 'next/dynamic'
const AddThisScript = dynamic(
  import ('./Scripts'),
  {ssr: false}
)*/

const iconStyles = {
  "color": "#FFFFFF"
}
const FollowButtons = (props) => {
  return (
    <div>
      <div id="addthis_inline_follow_toolbox"></div>
      {/*<AddThisScript />*/}
    </div>
  )
}
export default FollowButtons
