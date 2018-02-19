//import Router from 'next/router'
import styles from '../styles'

const  NavItem = (props) => {
  let color = props.active ? styles.lightTextGreen : "#393a3c"
  return (
    <li className={props.active && "active"}>
      <a href={props.link || "/"}
        //style={{'color': color}}
      >
        <span>{props.children}</span>
      </a>
    </li>
  )
}
/*
const  NavDropdownItem = (props) => {
  let color = props.active ? styles.lightTextGreen : "black"//styles.textGreen
  //console.log(color);
  return (
    <li><a href={props.link || "/"}><span>Mission</span></a>
      <ul className="rd-navbar-dropdown">
        {props.sublink.map((sublink)=>{
          <li><a href={sublink.href || ""}><span className="text-middle">{sublink.text}</span></a>
          </li>
        })}
      </ul>
    </li>
  )
}*/

const Navbar = (props) => {
  return (
    <ul className="rd-navbar-nav">
      <NavItem active={props.active === 'home'}>Home</NavItem>
      <li><a href="#"><span>Mission</span></a>
        <ul className="rd-navbar-dropdown">
          <li><a href="/about"><span className="text-middle">Urgent Issues</span></a>
          </li>
          <li><a href="/about"><span className="text-middle">First 30 Days</span></a>
          </li>
          <li><a href="/about"><span className="text-middle">Our Manifesto</span></a>
          </li>
          <li><a href="/about"><span className="text-middle">About KTT</span></a>
          </li>
        </ul>
      </li>
      <NavItem link="/country" active={props.active === 'states'}>States</NavItem>
      <li><a href="#"><span>News</span></a>
        <ul className="rd-navbar-dropdown">
          <li><a href="/news"><span className="text-middle">KTT Television</span></a>
          </li>
          <li><a href="/news"><span className="text-middle">Gallery</span></a>
          </li>
        </ul>
      </li>
      <li>
        <a href="/Turaki Empowerment Zone" style={{color: '#393a3c'}}>
          <span style={{
            padding: '12px',
            backgroundColor: '#12806B',
            color: 'white'
          }}> Empowerment Zone</span>
        </a>
      </li>
    </ul>
  )
}
export default Navbar
