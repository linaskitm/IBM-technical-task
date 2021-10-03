import React from 'react'
import {
  Grid,
  Card,
  CardActionArea,
  Typography,
  CardMedia,
  CardContent,
} from "@mui/material";

const InfoDisplay = ({info, api}) => {

    const fixInfo = (param) => {
      let fixed = param.replace("[", "").replace("]", "").replace(/,/g, ", ");
      return fixed;
    };

    return (
      <>
        <Grid container spacing={3} my={5}>
          {info.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="250"
                    image={api + item.image}
                    alt={item.image}
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      {fixInfo(item.name)}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </>
    );
}

export default InfoDisplay
