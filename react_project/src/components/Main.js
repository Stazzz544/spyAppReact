import { NavLink } from 'react-router-dom'

function Main() {
	return (
		<>
		<h1 className='main_title'>- The <span className='main_title-red'>SPY</span> app -</h1>
		<div className='main'>
			<div className='main__link-wrapper' >
				<NavLink className='main__link' to="/create">Create top secret note</NavLink>
			</div>
			<div className='main__link-wrapper' >
				<NavLink className='main__link' to="/note">Look sent note</NavLink>
			</div>
		</div>
		</>
	);
}

export default Main;
