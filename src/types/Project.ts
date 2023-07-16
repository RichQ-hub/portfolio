import Tag from "./Tag"

interface Project {
    title: string,
    description: string,
    img: string, // Location of the img asset.
    tags: Tag[],
    github?: string,
    link?: string
}

export default Project;