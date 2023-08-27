import { Card, CardContent, CardMedia, CardActions, Button, Typography, Stack } from '@mui/material';


function ProductCard({image, title, price}) {
  return (
    <Card sx={{ width: 230, height: "100%" }}>
      <CardMedia
      component="img"
        height= "70%"
        image={image}
      />
      <CardContent>
        <Stack 
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        >
        <Typography variant="h5">
          {title}
        </Typography>
        <Typography variant="h4">
          {price}
        </Typography>
        </Stack>
      </CardContent>
      <CardActions>
        <Button size="small">Details</Button>
        <Button size="small">More photos</Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard;