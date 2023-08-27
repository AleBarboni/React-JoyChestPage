import { Grid } from '@mui/material';
import ProductCard from './../Components/ProductCard';
import itemData from './../itemData';

function EarringsPage() {
    return (
          <Grid container spacing={2}
          >
            {itemData.map((item, index) => (
               <Grid item key={index}>
                <ProductCard 
                  image={item.image}
                  title={item.title}
                  price={item.price}
                />
                </Grid>
              ))}
            
          </Grid>
    );
}

export default EarringsPage;