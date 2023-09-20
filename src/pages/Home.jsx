import React from 'react'
import HomeHero from '../components/Landing/HomeHero'
import Pricing from '../components/Price/Pricing'
import Hero from '../components/Landing/Hero'
import { UserAuth } from '../context/AuthContext'
import SearchPage from './SearchPage'

const Home = () => {
    const {user} = UserAuth()

    return (
        <div>
            { !user?.email? (
            <div>
                <HomeHero />
                <Hero />
                <Pricing />
            </div>
            ) : (
            <SearchPage />
            )}
        </div>
    )
}

export default Home