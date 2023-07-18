import NavbarItem from './NavbarItem';
import ROUTES from '../../data/routes';
import { Box, Button, Typography, Divider } from '@mui/material';
import { DocumentScanner } from '@mui/icons-material';

export default function Navbar() {
    return (
        // Links section.
        <Box sx={{
            height: '4.6rem',
            width: '100%',
            padding: '0.6rem 2rem',
            background: '#1D2430',
            position: 'fixed',
            top: '0',
            zIndex: '1',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        }}>
            {/* Left Navbar */}
            <Box sx={{
                height: '100%',
                display: 'flex',
                gap: '2rem',
                alignItems: 'center',
                whiteSpace: 'nowrap' // Prevents the text from wrapping.
            }}>
                <Typography sx={{
                    fontFamily: 'Inconsolata',
                    fontSize: '2rem',
                    fontWeight: '900',
                    color: '#569CD6',
                }}>
                    RQ
                </Typography>

                <Divider orientation='vertical' flexItem sx={{ background: 'white' }} />

                {/* Route btns. */}
                <Box sx={{
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4rem',
                }}>
                    {ROUTES.map((route) => {
                        const { page, href } = route;
                        return (
                            <NavbarItem 
                                key={page} 
                                name={page} 
                                href={href}
                            />
                        )
                    })}
                </Box>
            </Box>
            
            {/* Right Navbar */}
            {/* Nav Resume Btn. */}
            <Box>
                {/* DOWNLOAD LINK FOR RESUME CURRENTLY NOT WORKING!! */}
                <a href="/resume.pdf" download> 
                    <Button variant='outlined' endIcon={<DocumentScanner />} sx={{
                        textTransform: 'none',
                    }}>
                        Resume
                    </Button>
                </a>
            </Box>
        </Box>
    )
}
