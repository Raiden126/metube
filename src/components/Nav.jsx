import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
    const [search, setSearch] = useState('');
    const [showAuth, setShowAuth] = useState(false);
    const [background, setBackground] = useState('rounded-br-lg rounded-bl-lg')

    const handleShowAuth = () => {
        setShowAuth(!showAuth);
        setBackground(!showAuth && 'rounded-br-none rounded-bl-none')
    };

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    return (
        <nav className='md:w-full md:h-14 md:bg-white md:flex md:items-center md:justify-evenly border-b-2 shadow-lg border-solid'>
            <label className='md:w-2/3 md:relative'>
                <FontAwesomeIcon icon={faMagnifyingGlass} className='md:absolute md:top-2 md:left-2 md:text-gray-500' />
                <input
                    type='search'
                    placeholder='Search'
                    value={search}
                    onChange={handleSearch}
                    className='md:w-full md:bg-gray-300 md:text-gray-800 md:h-8 md:pl-8 md:rounded-xl border-none focus:outline-none focus:bg-gray-200'
                />
            </label>
            <div className={` md:relative md:w-20 border border-solid border-gray-200 rounded-lg shadow-md flex justify-center items-center bg-gray-100 ${background} hover:bg-gray-50`}>
                <label className='md:h-8 md:w-8 md:border md:border-solid md:border-gray-50 md:rounded-full md:bg-gradient-to-r md:from-gray-400 md:to-white md:flex md:items-center md:justify-center'
                    onClick={handleShowAuth}>
                    <button className='md:h-full md:w-full md:flex md:items-center md:justify-center'>
                        <FontAwesomeIcon icon={faUser} className='md:text-gray-600' />
                    </button>
                </label>
                {showAuth && (
                    <div className='z-20 md:absolute md:top-8 md:left-0 md:flex md:flex-col md:items-center md:w-20 border border-solid border-gray-200 bg-gray-100 rounded-lg rounded-tr-none rounded-tl-none shadow-md border-t-0'>
                        <label className='md:mt-2 md:h-8 md:w-16 text-xs font-normal md:border md:border-solid md:border-gray-50 md:bg-gray-200 md:rounded-md md:flex md:items-center md:justify-center'>
                            <button className='md:h-full md:w-full md:flex md:items-center md:justify-center'>
                                <FontAwesomeIcon icon={faUser} className='md:text-gray-600 text-xs font-normal' /> Sign Up
                            </button>
                        </label>
                        <label className='md:mt-2 md:h-8 md:w-16 text-xs font-normal md:border md:border-solid md:border-gray-50 md:bg-gray-200 md:rounded-md md:flex md:items-center md:justify-center md:mb-2'>
                            <button className='md:h-full md:w-full md:flex md:items-center md:justify-center'>
                                <FontAwesomeIcon icon={faUser} className='md:text-gray-600 text-xs font-normal' /> Sign In
                            </button>
                        </label>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Nav;