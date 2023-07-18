import { Container, Typography } from '@mui/material';
import ProjectCard from '../ProjectCard/ProjectCard';
import PROJECTS from '../../data/projects';

export default function ProjectsList() {
    return (
        <Container>
            {/* Title */}
            <Typography>sdfg</Typography>


            {/* Project List */}
            {PROJECTS.map((project, idx) => {
                const { title, img, description, tags, github, link } = project;
                return (
                    <ProjectCard 
                        key={idx}
                        position={idx}
                        title={title}
                        img={img}
                        description={description}
                        tags={tags}
                        github={github}
                        link={link}
                    />
                )
            })}
        </Container>
        
    )
}
