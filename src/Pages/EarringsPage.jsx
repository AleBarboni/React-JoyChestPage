import { Stack } from '@mui/material';
import ProductCard from './../Components/ProductCard';

function EarringsPage() {
    return (
        // <Stack sx={{ width: "100%", height: "100vh" }}> 
          <Stack sx={{ height: "100%" }} 
          direction="row">
            <ProductCard 
              image="/IMG_3996.jpg"
              title="Flower earrings"
              price="60 lei"
              />
              <ProductCard 
              image="/IMG_4214a.jpg"
              title="Flower earrings"
              price="60 lei"
              />
          </Stack>
        // </Stack>
    )
}

export default EarringsPage;