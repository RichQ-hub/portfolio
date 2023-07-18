import { Container, Typography, Grid } from '@mui/material';
import ProjectCard from '../ProjectCard/ProjectCard';
import PROJECTS from '../../data/projects';

export default function ProjectsList() {
    return (
        <Container id='projects' sx={{
            padding: '5rem 0',
        }}>
            {/* Title */}
            <Typography sx={{ 
                marginBottom: '5rem', 
                textAlign: 'center',
                fontFamily: 'Rajdhani',
                fontWeight: '700',
                fontSize: '3.125rem',
                color: '#17E469',
            }} variant='h2'>PROJECTS</Typography>

            {/* Project List */}
            <Grid container rowSpacing={4}>
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
            </Grid>
        </Container>
        
    )
}
