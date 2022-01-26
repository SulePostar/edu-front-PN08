import { NavLink } from 'react-router-dom';

const Navigator = () => {
  return (
    <ul className='navigator'>
      <li><NavLink to='/home' activeClassName='active'>Home</NavLink></li>
      <li><NavLink to='/team' activeClassName='active'>Team</NavLink></li>
      <li><NavLink to='/contact' activeClassName='active'>Contact</NavLink></li>
      <li><NavLink to='/dashboard' activeClassName='active'>Dashboard</NavLink></li>
      <li><NavLink to='/mentors' activeClassName='active'>Mentors</NavLink></li>
      <li><NavLink to='/students' activeClassName='active'>Students</NavLink></li>
      <li><NavLink to='/projects' activeClassName='active'>Projects</NavLink></li>
    </ul>
  );
}

export default Navigator;