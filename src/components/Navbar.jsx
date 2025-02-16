import { Link } from "react-router"

const Navbar = () => {
  return (
      <nav className="navbar">
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><a href="">About</a></li>
            <li><a href="">Menu</a></li>
            <li><Link to='/booking'>Reservation</Link></li>
            <li><Link to='/confirmedbooking'>Order online</Link></li>
            <li><a href="">Login</a></li>
        </ul>
    </nav>
  )
}

export default Navbar