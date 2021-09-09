import { NavLink } from 'react-router-dom'

function Main() {
	return (
		<div className='main'>
			<div className='main__link-wrapper' >
				<NavLink className='main__link' to="/create">Create top secret note</NavLink>
			</div>
			<div className='main__link-wrapper' >
				<NavLink className='main__link' to="/note">Look sent note</NavLink>
			</div>
		</div>
	);
}

export default Main;
