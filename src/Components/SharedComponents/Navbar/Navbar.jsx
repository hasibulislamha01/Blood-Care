import { NavLink } from "react-router-dom";
import './Navbar.css'


const Navbar = () => {

    window.addEventListener('scroll', function () {
        const header = document.querySelector('.navbar-container')
        header.classList.toggle('stickyNav', window.scrollY > 0)
    })


    const navItems =
        <>
            <NavLink to='/' end className={({ isActive }) => isActive ? 'text-black border-b-2 border-black' : 'text-gray-500 border-gray-500'}>Home</NavLink>

            <NavLink to='/blogs' end className={({ isActive }) => isActive ? 'text-black border-b-2 border-black' : 'text-gray-500 border-gray-500'}>Blogs</NavLink>


        </>
    return (
        <div className="navbar-container z-50 w-full flex items-center justify-center">
            <div className=" navbar container mx-auto min-w-12  flex justify-center">

                <div className="navbar-start">
                    <a className="font-semibold text-xl">Blood Care</a>
                </div>

                <div className="navbar-end items-center gap-4 hidden lg:inline-flex font-medium">
                    {navItems}

                </div>
            </div>
        </div>
    );
};

export default Navbar;