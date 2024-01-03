import React, { Suspense } from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import Section1 from '../components/Section1'
import Section2 from '../components/Section2'
import Section3 from '../components/Section3'
import Section4 from '../components/Section4'
import Section5 from '../components/Section5'
import Loading from '../components/Loading'
// Suspense fallback={<Loading />}

const HomeView = () => {
    return (
        <>
            <Loading />
            <Header />
            <Main>
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
                <Section5 />
            </Main>
        </>
    )
}

export default HomeView