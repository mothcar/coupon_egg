import { Link } from 'react-router-dom';
import './NavBar.scss';
import Icon from './Icon';

export default function NavBar() {
  return (
    <div id="navbar">
      <header>
        <nav>
          <h1>Logo</h1>

          <ul>
            <li><Link to="/"><span>Home</span> <Icon name="home" /></Link></li>
            <li><Link to="/about"><span>About</span> <Icon name="about" /></Link></li>
            <li><Link to="/contact"><span>Contact</span> <Icon name="contact" /></Link></li>
            <li><Link to="/login"><span>Log in</span> <Icon name="login" /></Link></li>
          </ul>
        </nav>
      </header>
    </div>
  )
}