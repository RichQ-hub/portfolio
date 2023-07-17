import { Box, Typography } from "@mui/material";
import { Link } from "react-scroll";

interface NavbarItemProps {
    name: string,
    href: string
}

export default function NavbarItem(props: NavbarItemProps) {
    const { name, href } = props;

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            cursor: 'pointer',
            '&:hover *': {
                color: '#17E469',
            }
        }}>
            <Link to={href} activeClass="nav__item--active" smooth duration={1000}>
                <Typography sx={{
                    textAlign: 'center',
                    fontFamily: 'Noto Sans',
                    fontSize: '1.125rem',
                    letterSpacing: '1.25px',
                    fontWeight: 800, // This actually changes nothing, since the ExtraBold style is fixed at a weight of 800.
                    color: 'white',
                }}>{name}</Typography>
            </Link>
        </Box>
    )
}
