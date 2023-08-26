import NavBar from '../Components/NavBar';
import AvatarLogo from '../Components/AvatarLogo';
import { Stack, Card, CardContent, CardMedia, CardActionArea, Typography } from '@mui/material';

function HomePage() {

// const handleOnClich = () => 

  return (
    <Stack
    sx={{ width: "100vw", height: "100vh" }}
    >
        <Stack sx={{ height: "100%" }}>
            <Stack 
                direction="row" 
                justifyContent="space-between"
                alignItems="center"
                sx={{mx: "5%"}}
            >
            <AvatarLogo />
            <NavBar />
        </Stack>
      <Stack 
      direction="row" 
      justifyContent="space-around"
      alignItems="center"
      sx={{mt: 3}}>
      <Card sx={{ width: "30%" }}
      >
      <CardActionArea>
        <CardMedia
          component="img"
          height="60%"
          image="/IMG_4214a.jpg"
          alt="Earrings"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Earrings
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Bla bla bla
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ width: "30%" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="60%"
          image="/IMG_4455a.jpg" 
          alt="Pendants"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Pendants
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Bla bla bla
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ width: "30%" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="60%"
          image="/IMG_4348a.jpg"
          alt="Sets"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Sets
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Bla bla bla
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
      </Stack>
        </Stack>
      
    </Stack>
    
);
}

export default HomePage;