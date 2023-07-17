import Box from '@mui/material/Box'
import { Button, Stack, Typography } from '@mui/material';
import TypewriterComponent from 'typewriter-effect';

import {ReactComponent as Coding} from '../../assets/svg/coding.svg';  

export default function AboutMe() {
    return (
        <Box sx={{
            height: 'calc(100vh - 4.8rem)',
            padding: '2rem 3rem',
            display: 'flex',
            alignItems: 'center',
        }}>
            {/* Description Section. */}
            <Box sx={{
                maxWidth: '50%',
                minWidth: '400px', // This and the above properties bound the growth of this description box.
                padding: '1rem',
                color: 'white',
                fontFamily: 'Rajdhani',
            }}>
                <Typography variant='h4' sx={{
                    fontFamily: 'inherit',
                    fontWeight: 500,
                }}>
                    Welcome! I'm
                </Typography>
                <Typography sx={{
                    fontFamily: 'inherit',
                    fontSize: '4.3rem',
                    fontWeight: 700,
                }}>
                    RICHARD QUISUMBING
                </Typography>

                {/* Typewriter */}
                <Box sx={{
                    '& *': {
                        fontFamily: 'Inconsolata',
                        fontSize: '2rem',
                        color: '#569CD6',
                        fontWeight: '600',
                        display: 'inline'
                    }
                }}>
                    {/* Note: &nbsp is an entity code to simply add whitespace at the end. */}
                    <Typography>I love to&nbsp;</Typography> 
                    <TypewriterComponent 
                        options={{
                            strings: ['learn new technologies.', 'build amazing apps.'],
                            autoStart: true,
                            loop: true,
                            delay: 60,
                            deleteSpeed: 30,
                        }}
                    />
                </Box>
               
                <Typography sx={{
                    margin: '3rem 0',
                    fontFamily: 'inherit',
                    fontWeight: '500',
                    fontSize: '1.4rem'
                }}>
                    I am a penultimate student studying computer science with the aspiration 
                    to become a fullstack software developer! 
                </Typography>

                {/* Buttons section */}
                <Stack spacing={5} direction='row'>
                    <Button variant='contained' sx={{
                        background: '#17E469',
                        textTransform: 'none',
                        '&:hover': {
                            background: '#13bc57',
                        },
                        fontFamily: 'Rajdhani',
                        fontWeight: '700',
                        color: 'black',
                        fontSize: '1.25rem',
                    }}>Resume</Button>

                    <Button variant='outlined' sx={{
                        textTransform: 'none',
                        fontFamily: 'Rajdhani',
                        fontWeight: '700',
                        fontSize: '1.25rem',
                        border: '1px solid #17e4696d', // Border is dimmed green.
                        color: '#ffffffb9', // The button text is dimmed white.
                        '&:hover': { // When hovering the button, the border and colour become brighter.
                            border: '1px solid #17E469',
                            color: 'white',
                        }
                    }}>See My Past Work</Button>
                </Stack>
            </Box>

            {/* SVG Coder Section. */}
            <Box sx={{
                minWidth: '400px',
                maxWidth: '600px',
                '& .coding-img': {
                    height: '100%',
                    width: '100%'
                }
            }}>
                <Coding className='coding-img'/>
            </Box>
        </Box>
    )
}
