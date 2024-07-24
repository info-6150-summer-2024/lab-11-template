import Box from '@mui/material/Box';


const AppBar = function() {
    return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
    <header>
        <nav><h1 style={{ textAlign: 'center' }}>INFO 6150 ECom App</h1></nav>
    </header>
    </Box>
    )
}

export default AppBar;