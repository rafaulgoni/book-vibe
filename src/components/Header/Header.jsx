import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink to="/" className={({ isActive }) => isActive ? ' font-bold text-[#23BE0A] border-2 p-2 rounded-xl border-[#23BE0A]' : 'font-family'}>Home</NavLink></li>
                        <li><NavLink to="/books" className={({ isActive }) => isActive ? ' font-bold text-[#23BE0A] border-2 p-2 rounded-xl border-[#23BE0A]' : 'font-family'}>Listed Books</NavLink></li>
                        <li><NavLink to="/pages" className={({ isActive }) => isActive ? ' font-bold text-[#23BE0A] border-2 p-2 rounded-2xl border-[#23BE0A]' : 'font-family'}>Pages to Read</NavLink></li>
                        <li><NavLink to="/registration" className={({ isActive }) => isActive ? ' font-bold text-[#23BE0A] border-2 p-2 rounded-2xl border-[#23BE0A]' : 'font-family'}>Registration</NavLink></li>
                        <li><NavLink to="/updates" className={({ isActive }) => isActive ? ' font-bold text-[#23BE0A] border-2 p-2 rounded-2xl border-[#23BE0A]' : 'font-family'}>Update News</NavLink></li>
                    </ul>
                </div>
                <a className="text-2xl font-bold font-family">Book Vibe</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className=" flex space-x-4 px-1">
                    <li><NavLink to="/" className={({ isActive }) => isActive ? ' font-bold text-[#23BE0A] border-2 p-2 rounded-xl border-[#23BE0A]' : 'font-family'}>Home</NavLink></li>
                    <li><NavLink to="/books" className={({ isActive }) => isActive ? ' font-bold text-[#23BE0A] border-2 p-2 rounded-xl border-[#23BE0A]' : 'font-family'}>Listed Books</NavLink></li>
                    <li><NavLink to="/pages" className={({ isActive }) => isActive ? ' font-bold text-[#23BE0A] border-2 p-2 rounded-2xl border-[#23BE0A]' : 'font-family'}>Pages to Read</NavLink></li>
                    <li><NavLink to="/registration" className={({ isActive }) => isActive ? ' font-bold text-[#23BE0A] border-2 p-2 rounded-2xl border-[#23BE0A]' : 'font-family'}>Registration</NavLink></li>
                    <li><NavLink to="/updates" className={({ isActive }) => isActive ? ' font-bold text-[#23BE0A] border-2 p-2 rounded-2xl border-[#23BE0A]' : 'font-family'}>Update News</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end space-x-2">
                <a className="btn text-white bg-[#23BE0A]">Sign In</a>
                <a className="btn text-white bg-[#59C6D2]">Sign Up</a>
            </div>
        </div>
    );
};

export default Header;