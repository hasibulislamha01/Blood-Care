import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './ExNav.css'
import ThemeController from '../ThemeController/ThemeController';

const ExNav = () => {

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

    // let activeClass = ''
    // if(isSticky){
    //     activeClass = 
    // }


    return (
        <div className='main-container'>
            <div className={`flex items-center px-2 md:px-6 ${isSticky ? 'w-full md:w-[600px] lg:w-[1000px] stickyContainer' : 'thickContainer'}`}>

                <div className={`container mx-auto flex items-center gap-6 ${isSticky ? 'glassyNav' : 'thikNav'}`}>
                    <NavLink to={'/'} className={`mr-auto ${isSticky ? 'text-lg' : 'text-xl'}`}>Blood care</NavLink>
                    {
                        links.map(link =>
                            <NavLink
                                key={link.route}
                                to={link.route}
                                className={({ isActive }) => isActive ? isSticky ? 'text-primary' : 'text-rose-600' : 'text-gray-500'}
                            >
                                {link.title}
                            </NavLink>
                        )
                    }
                    <ThemeController/>
                </div>

            </div>
        </div>
    );
};

export default ExNav;