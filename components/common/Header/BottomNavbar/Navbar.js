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
      <NavItem link="/about" active={props.active === 'about'}>About KTT</NavItem>
      <NavItem link="/gallery" active={props.active === 'gallery'}>Gallery</NavItem>
      <NavItem link="/news" active={props.active === 'tv'}>KTT.TV</NavItem>
      {/*<NavItem link="/country" active={props.active === 'states'}>States</NavItem>*/}
      <NavItem link="/contact" active={props.active === 'states'}>Contact</NavItem>
      <li>
        <a href="/Turaki Empowerment Zone" style={{color: '#393a3c'}}>
          <span style={{
            padding: '12px',
            backgroundColor: '#09123A',
            color: 'white'
          }}> Empowerment Zone</span>
        </a>
      </li>
    </ul>
  )
}
export default Navbar
