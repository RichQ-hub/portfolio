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
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc luctus, massa et commodo euismod, ex leo egestas nunc, vitae maximus dolor tortor sed metus. Phasellus risus diam, bibendum at volutpat ac, ullamcorper ut dui. Nam ac elementum risus, semper luctus.',
        img: flockr,
        tags: [BACKEND],
        github: 'https://github.com/RichQ-hub/Flockr'
    },
    {
        title: 'Persolvo',
        description: 
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc luctus, massa et commodo euismod, ex leo egestas nunc, vitae maximus dolor tortor sed metus. Phasellus risus diam, bibendum at volutpat ac, ullamcorper ut dui. Nam ac elementum risus, semper luctus.',
        img: persolvo,
        tags: [FRONTEND, REACT_JS],
        github: 'https://github.com/RichQ-hub/Persolvo',
        link: 'https://richq-hub.github.io/Persolvo/'
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
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc luctus, massa et commodo euismod, ex leo egestas nunc, vitae maximus dolor tortor sed metus. Phasellus risus diam, bibendum at volutpat ac, ullamcorper ut dui. Nam ac elementum risus, semper luctus.',
        img: dinerCritic,
        tags: [FRONTEND, BACKEND, REACT_JS],
        github: 'https://github.com/RichQ-hub/yelp-clone'
    }
]

export default PROJECTS;