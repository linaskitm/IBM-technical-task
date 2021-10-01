import React from 'react'
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";
import SendIcon from "@mui/icons-material/Send";

const Input = styled("input")({
  display: "none",
});

 const Form = ({onSubmit, onChange, filename}) => {
    return (
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={2}
        pb={2}
      >
        <form onSubmit={onSubmit}>
          <label htmlFor="contained-button-file">
            <Input
              accept="image/*"
              id="contained-button-file"
              multiple
              type="file"
              onChange={onChange}
            />
            <Button variant="contained" component="span">
              Upload
            </Button>
          </label>
          <label htmlFor="customFile">{filename}</label>
          <label htmlFor="icon-button-file">
            <Input accept="image/*" id="icon-button-file" type="file" />
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
              onChange={onChange}
            >
              <PhotoCamera />
            </IconButton>
          </label>
          <Button variant="contained" type="submit" endIcon={<SendIcon />}>
            Send
          </Button>
        </form>
      </Stack>
    );
}
export default Form