import React from 'react'
import { styled } from "@mui/material/styles";
import {Button, Grid } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const Input = styled("input")({
  display: "none",
});

 const Form = ({onSubmit, onChange, filename, validate, refreshPage, onClick}) => {
    return (
      
        <form onSubmit={onSubmit}>
          <Grid container spacing={2} justifyContent="center" mb={2} >
            <Grid item>
              <label htmlFor="contained-button-file">
                <Input
                  accept="image/*"
                  id="contained-button-file"
                  multiple
                  type="file"
                  onChange={onChange}
                />
                <Button variant="contained" component="span">
                  Choose file
                </Button>
              </label>
            </Grid>
            <Grid item>
            <label htmlFor="customFile">
              {filename && (
                <Button variant="contained" disabled>
                  {filename}
                </Button>
              )}
            </label>
            </Grid>
            {validate && (
              <Grid item>
              <Button variant="contained" type="submit" endIcon={<SendIcon />}>
                Send
              </Button>
              </Grid>
            )}
            {refreshPage && (
              <Grid item>
              <Button variant="contained" onClick={onClick}>
                Refresh
              </Button>
              </Grid>
            )}
          </Grid>
        </form>
      
    );
}
export default Form