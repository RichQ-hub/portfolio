import Project from "../types/Project";
import { FRONTEND, BACKEND, REACT_JS } from "./tags";

// Image paths.
import flockr from '../assets/images/projects/flockr.png';
import persolvo from '../assets/images/projects/persolvo.png';
import dinerCritic from '../assets/images/projects/diner-critic.png';

const PROJECTS: Project[] = [
    {
        title: 'Flockr',
        description: 
            'A chat application developed in a team of 4. Similar to Discord, it includes features such as authentication, chat rooms and real-time messaging. This project served as my introduction into backend development with Python and Flask.',
        img: flockr,
        tags: [BACKEND],
        github: 'https://github.com/RichQ-hub/Flockr'
    },
    {
        title: 'Persolvo',
        description: 
            'An interactive pathfinding tool designed to assist students visualise well-known pathfinding algorithms on a grid-like surface.',
        img: persolvo,
        tags: [FRONTEND, REACT_JS],
        github: 'https://github.com/RichQ-hub/Persolvo',
        link: 'https://persolvo.netlify.app'
    },
    // {
    //     title: 'Loop Mania',
    //     description: 
    //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc luctus, massa et commodo euismod, ex leo egestas nunc, vitae maximus dolor tortor sed metus. Phasellus risus diam, bibendum at volutpat ac, ullamcorper ut dui. Nam ac elementum risus, semper luctus.',
    //     img: 'na',
    //     tags: [BACKEND],
    //     github: 'https://github.com/RichQ-hub/LoopMania'
    // },
    {
        title: 'Diner Critic (WIP)',
        description: 
            'A fullstack application inspired by Yelp for reviewing restaurants. In the future, this app will feature authentication, a rating system, sorting system, and much more.',
        img: dinerCritic,
        tags: [FRONTEND, BACKEND, REACT_JS],
        github: 'https://github.com/RichQ-hub/yelp-clone',
    }
]

export default PROJECTS;