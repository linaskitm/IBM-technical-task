import React from 'react'
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const InfoDisplay = ({info, api}) => {

    const fixInfo = (param) => {
      let fixed = param.replace("[", "").replace("]", "");
      return fixed;
    };

    return (
      <>
        {/* <div>
          {info.map((item) => (
            <div>
              <img src={api + item.image}></img>
              <p>Google Cloud Vision API detected these images labels:</p>
              <p>{fixInfo(item.name)}</p>
            </div>
          ))}
        </div> */}
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
