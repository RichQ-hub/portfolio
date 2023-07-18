import { Grid, Typography, Box } from '@mui/material';
import Tag from '../../types/Tag'
import { styled } from 'styled-components';
import { GitHub, Link } from '@mui/icons-material';

const ProjectImg = styled.img`
    padding: 2%;
    height: auto;
    width: 100%;
`;

const ProjectLinks = styled.div`
    display: flex;
    align-items: center;
    gap: 1.6rem;
    height: auto;
`;

const StyledLink = styled.a`
    height: 2.8rem;
    width: 2.8rem;
    transition: transform ease-in-out 0.2s;

    &:hover svg {
        fill: red;
        transform: scale(1.1);
    };

    * {
        height: inherit;
    }
`;

const StyledGithub = styled(StyledLink)`
    &:hover svg {
        fill: #569CD6;
    }
`;

const ProjectDesc = styled.div<{position: number}>`
    display: flex;
    flex-direction: column;
    align-items: ${({position}) => position % 2 === 0 ? 'flex-end' : 'flex-start'};
    text-align: ${({position}) => position % 2 === 0 ? 'end' : 'start'};

    * {
        color: white;
    };

    @media (max-width: 900px) {
        align-items: center;
        text-align: center;
    }

`;

interface ProjectCardProps {
    position: number,
    title: string,
    img: string,
    description: string,
    tags: Tag[],
    github?: string,
    link?: string,
}

export default function ProjectCard(props: ProjectCardProps) {
    const {
        position,
        title, 
        img,
        description,
        tags,
        github,
        link
    } = props;

    return (
        <Grid item container columnSpacing={4} direction={position % 2 == 0 ? "row" : "row-reverse"}>
            <Grid item xs={12} md={5} sx={{
                display: 'flex',
                alignItems: 'center',
            }}>
                <ProjectDesc position={position}>
                    {/* Project Name Section */}
                    <Typography sx={{
                        fontFamily: 'Rajdhani',
                        fontSize: '2.5rem',
                        fontWeight: 700,
                        color: '#569CD6',
                    }}>{title}</Typography>

                    {/* Project Description Section */}
                    <Typography sx={{
                        margin: '1.4rem 0',
                        fontFamily: 'Rajdhani',
                        fontSize: '1rem',
                        fontWeight: 500,
                    }}>{description}</Typography>

                    {/* Project Github and Link Section */}
                    <ProjectLinks>
                        <StyledGithub href={github} target='_blank'>
                            <GitHub sx={{ height: '100%', width: '100%' }}/>
                        </StyledGithub>
                        <StyledLink href={link} target='_blank'>
                            <Link sx={{ height: '100%', width: '100%' }}/>
                        </StyledLink>
                    </ProjectLinks>
                </ProjectDesc>
            </Grid>

            {/* Image Section */}
            <Grid item xs={12} md={7} sx={{
                display: 'flex',
                justifyContent: 'center',
            }}>
                <ProjectImg src={img} alt="" />
            </Grid>
        </Grid>
        
    )
}
