import Navbar from '../../components/Navbar/Navbar'
import AboutMe from '../../components/AboutMe/AboutMe'
import ProjectsList from '../../components/ProjectsList/ProjectsList'

export default function HomePage() {
    return (
        <>
            <Navbar />
            <main>
                <AboutMe />
                <ProjectsList />
            </main>
        </>
    )
}
