import './App.css';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import SignMessage from './signMessage';
import VerifyMessage from './verifyMessage';


function App() {


  return( 

    <Container component="main" maxWidth="xs">
    <CssBaseline />
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
        <SignMessage />
    </Box>

    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
        <VerifyMessage />
    </Box>
    </Container>
  
  );


     
};

export default App;
