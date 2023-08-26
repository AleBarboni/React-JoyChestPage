import { Card, CardContent, CardMedia, CardActions, Button, Typography } from '@mui/material';


function ProductCard({image, title, price}) {
  return (
    <Card sx={{ width: "20%", height: "30%" }}>
      <CardMedia
      component="img"
        height= "40%"
        image={image}
        title="green iguana"
      />
      <CardContent>
        <Typography variant="h5">
          {title}
        </Typography>
        <Typography variant="h4">
          {price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Description</Button>
        <Button size="small">See more photos</Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard;