import { NavLink } from "react-router-dom";
import { useEffect, useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { title: 'Home', route: '/' },
        { title: 'Surf', route: '/surf' },
    ];

    return (
        <div className={`navbar-container ${isSticky ? 'stickyNav' : ''}`}>
            <div className="inner-container">
                <NavLink to='/'>
                    Blood Care
                </NavLink>
                {links.map(item => (
                    <NavLink
                        key={item.route}
                        to={item.route}
                        className={({ isActive }) => isActive ? 'active-link' : 'inactive-link'}>
                        {item.title}
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default Navbar;
