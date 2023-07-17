import NavbarItem from './NavbarItem';
import ROUTES from '../../data/routes';
import { Box, Button, Typography } from '@mui/material';
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
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        }}>
            {/* Left Navbar */}
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '10%',
                whiteSpace: 'nowrap' // Prevents the text from wrapping.
            }}>
                <Typography sx={{
                    fontFamily: 'Roboto',
                    fontSize: '1.75rem',
                    fontWeight: 'bold',
                    color: '#5484FF',
                }}>
                    Richard Quisumbing
                </Typography>
                {/* Route btns. */}
                <Box sx={{
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
                <a download href="/resume.pdf" target="_blank"> 
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
