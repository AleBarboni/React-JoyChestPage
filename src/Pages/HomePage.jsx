import NavBar from '../Components/NavBar';
import AvatarLogo from '../Components/AvatarLogo';
import { Stack, Typography } from '@mui/material';
import CategoryCard from '../Components/CategoryCard';
// import RoutePaths from '../Constants/route-paths';
// import { useDispatch } from "react-redux";

function HomePage() {
  // const dispatch = useDispatch();

  // const handleOnClick = () => {RoutePaths.EARRINGS}

  return (
    <Stack
    sx={{ width: "100vw", height: "100vh"}}
    >
        <Stack sx={{ height: "100%" }}>
            <Stack 
              className='home-bar'
              // direction="row" 
              justifyContent="space-between"
              alignItems="center"
              sx={{mx: "5%"}}
            >
            <NavBar />
            <AvatarLogo />
        </Stack>
        <Stack
        alignItems="center"
        sx={{m: "2%"}}
        >
        <Typography variant="h4">Abstract Models</Typography>
        <Typography variant="h6" textAlign="center" width= "80%">When you look at a abstract painting, what do you see? 
          There is no right or wrong answer to this question. Abstract art is open to interpretation, 
          and that is one of the beautiful things about it. This art requires you to have an open, 
          inquiring mind; you must enter the painting and see where it takes you.</Typography>
        </Stack>
        <Stack 
        direction="row" 
        justifyContent="space-around"
        alignItems="center"
        sx={{mt: 3}}>
          < CategoryCard 
          image="/IMG_4429a.jpg"
          categoryTitle="Earrings"
          // path={RoutePaths.EARRINGS}
          // onClick={handleOnClick}
          />
          <CategoryCard 
          image="/IMG_4455a.jpg"
          categoryTitle="Pendants"
          />
          <CategoryCard 
          image="/IMG_4348a.jpg"
          categoryTitle="Sets"
          />
        </Stack>
        <Stack
        justifyContent="space-between"
        alignItems="center"
        sx={{m: "2%"}}
        >
        <Typography variant="h4">Floral Models</Typography>
        <Typography variant="h6" textAlign="center" width= "80%">There is nothing like a beautiful flower to lift one`s spirits. 
        The charming thing about flowers is that they speak volumes without saying a word. 
        Flowers can represent a multitude of emotions and feelings: from love, passion and desire 
        to purity or innocence, or say: I love you, I`m sorry, I`m proud of you, or say just because!
        </Typography>
        </Stack>
      </Stack>
    </Stack>
    
);
}

export default HomePage;