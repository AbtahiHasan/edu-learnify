import React from 'react';
import TopNav from './header/TopNav';
import MainNav from './header/MainNav';

const Header = () => {
    return (
        <nav>
            <TopNav/>
            <MainNav/>
        </nav>
    );
};

export default Header;