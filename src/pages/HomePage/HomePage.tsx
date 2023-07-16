import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import AboutMe from '../../components/AboutMe/AboutMe'
import ProjectsList from '../../components/ProjectsList/ProjectsList'

export default function HomePage() {
    return (
        <main>
            <Navbar />
            <AboutMe />
            <ProjectsList />
            
        </main>
    )
}
