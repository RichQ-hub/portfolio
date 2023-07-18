
import Tag from '../../types/Tag'

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
        <div>ProjectCard</div>
    )
}
