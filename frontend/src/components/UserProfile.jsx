import React from 'react';
import { 
  Avatar, 
  Card, 
  CardContent, 
  CardHeader, 
  Typography, 
  ThemeProvider, 
  createTheme 
} from '@mui/material';
import { styled } from '@mui/system';

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5',
    },
    background: {
      default: '#f5f5f5',
    },
  },
});

// Create styled components
const BackgroundContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: 'auto',
//   background: `linear-gradient(to right, ${theme.palette.grey[100]}, ${theme.palette.grey[200]})`,
//   backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cpath d='M54.627 0 L60 5.373 L60 60 L54.627 60 L54.627 0zM5.373 0 L0 5.373 L0 60 L5.373 60 L5.373 0z' fill='%23374151' fill-opacity='0.05'/%3E%3C/svg%3E")`,
}));

const ProfileCard = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: '400px',
  margin: 'auto',
}));

const ProfileCardHeader = styled(CardHeader)(({ theme }) => ({
  background: `linear-gradient(to right, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
  color: theme.palette.primary.contrastText,
  display: 'flex',
  flexDirection: 'column',

  textAlign: 'center',
}));

const LargeAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(12),
  height: theme.spacing(12),
  margin: 'auto',
  marginBottom: theme.spacing(2),
  border: `4px solid ${theme.palette.background.paper}`,
}));

export default function UserProfile() {
  return (
    <ThemeProvider theme={theme}>
      {/* <BackgroundContainer> */}
        <ProfileCard elevation={3}>
          <ProfileCardHeader
            avatar={
              <LargeAvatar 
                alt="User's profile picture" 
                src="/placeholder.svg?height=96&width=96"
              />
            }
            title={
              <Typography variant="h5" component="h2" >
                User Name
              </Typography>
            }
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p" align="center">
              A passionate developer with a love for creating beautiful and functional web applications. Always
              learning and exploring new technologies to push the boundaries of what's possible on the web.
            </Typography>
          </CardContent>
        </ProfileCard>
      {/* </BackgroundContainer> */}
    </ThemeProvider>
  );
}