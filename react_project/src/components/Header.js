import {NavLink} from 'react-router-dom';

function Header() {
	return (
	  <header className='header'>
		  <nav className='menu'>
			  <ul className='menu__item-wrapper'>
				  <li className='menu__item' >
					  <NavLink exact to="/" className="menu__item-link">Home</NavLink>
				  </li>
				  <li>
						<NavLink exact to="/note" className="menu__item-link">Note</NavLink>
				  </li>
				  <li>
						<NavLink exact to="/create" className="menu__item-link">Create</NavLink>
				  </li>
				  <li>
						<NavLink exact to="/about" className="menu__item-link">About</NavLink>
				  </li>
			  </ul>
		  </nav>
	  </header>
	);
 }
 
 export default Header;
 