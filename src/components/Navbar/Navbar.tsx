import NavbarItem from './NavbarItem';
import ROUTES from '../../data/routes';
import { Box, Button } from '@mui/material';
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
            gap: '2rem',
            alignItems: 'center',
        }}>
            {/* Route btns. */}
            <Box>
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

            {/* Nav Resume Btn. */}
            <Box>
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
