import { Link } from 'react-router-dom';
import './NavBar.scss';
import Icon from './Icon';

export default function NavBar() {
  return (
    <div id="navbar">
      <header>
        <nav>
          <h3>신림2동</h3>

          <ul>
            <li><Link to="/" replace><span>Home</span> <Icon name="home" /></Link></li>
            <li><Link to="/about" replace><span>About</span> <Icon name="about" /></Link></li>
            <li><Link to="/contact" replace><span>Contact</span> <Icon name="contact" /></Link></li>
            <li><Link to="/login" replace><span>Log in</span> <Icon name="login" /></Link></li>
          </ul>
        </nav>
      </header>
    </div>
  )
}