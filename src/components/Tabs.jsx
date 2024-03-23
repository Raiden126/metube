import React, { useState } from 'react';
import ScrollMenu from 'react-scroll-horizontal';

const Tabs = () => {
    const [tabs, setTabs] = useState(['All', 'Javascript', 'Java', 'Music', 'Movie', 'Mern Stack', 'Animation', 'Marvel',
    'Magic', 'Python', 'Backend', 'Frontend', 'Dc', 'Mean Stack', 'Vue', 'Redis','Redux', 'Redux Toolkit']);

    return (
        <nav className='md:w-full mt-2 md:h-14 md:flex md:items-center md:justify-evenly border-solid'>
            <ScrollMenu 
                arrowLeft={<div>{">"}</div>}
                arrowRight={<div>{"<"}</div>}
                wheel={false}
            >
                {tabs.map((tab, index) => 
                    (
                    <div key={index} className='flex justify-center items-center mx-3 z-10'>
                        <button
                            className='border border-solid border-gray-200 bg-slate-600 text-white h-8 w-auto px-3 rounded-md hover:bg-slate-500 focus:bg-white focus:text-black focus:border-gray-600'
                        >
                            {tab}
                        </button>
                    </div>
                ))}
            </ScrollMenu>
        </nav>
    );
};

export default Tabs;
