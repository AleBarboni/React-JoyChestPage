// import * as React from 'react';
import {Box, ImageList, ImageListItem} from '@mui/material';
import itemData from '../itemData';

function ProductsPresentation() {
  return (
    <Box sx={{ overflowY: 'scroll' }}>
    <ImageList variant="masonry" cols={3} gap={8}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  </Box>
  );
}


export default ProductsPresentation

