import { Stack, Card, CardContent, CardMedia, CardActionArea, Typography } from '@mui/material';

function CategoryCard({image, categoryTitle, path}) {

// const handleOnClich = () => 

  return (
      <Card 
      onClick={path}
      sx={{ width: "30%" }}
      >
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{ minHeight: "30%" }}
          image={image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {categoryTitle}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
);
}

export default CategoryCard;
