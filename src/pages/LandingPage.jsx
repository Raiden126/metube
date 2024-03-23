import React from 'react'
import Nav from '../components/Nav'
import Dashboard from '../components/Dashboard'
import Tabs from '../components/Tabs'

const LandingPage = () => {
    return (
        <>
            <main className='flex w-screen h-screen'>
                <div className='basis-1/6'>
                    <Dashboard />
                </div>
                <div className='basis-10/12'>
                    <Nav />
                    <Tabs />
                </div>
            </main>
        </>
    )
}

export default LandingPage