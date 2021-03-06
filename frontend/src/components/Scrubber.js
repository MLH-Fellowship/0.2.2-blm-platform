import React, { useState } from 'react';
import {
  Typography,
  Button,
  Container
} from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import axios from "axios";
import logo from "../assets/default.png";

function Scrubber(props) {
  const { classes } = props;
  const [ img, setImg ] = useState(logo);

  const onImgUpload = async event => {
    const b64 = await toBase64(event.target.files[0]);
    const url = "https://cors-anywhere.herokuapp.com/https://5pawt634b1.execute-api.us-west-2.amazonaws.com/dev/api/v001/scrub";
    const res = await axios.post(url, {
      "data": b64,
      "ext": ".jpg"
    });
    setImg(`data:image/jpeg;base64,${res.data.data}`);
  }

  return (
    <Container component="main" maxWidth="sm">
      <div className={classes.container}>
        <Typography variant="h2" style={{marginTop: "15px"}}>Image Scrubber</Typography>
        <Typography variant="body1" style={{marginTop: "15px", textAlign: "center"}}>People can use image metadata against you to track your whereabouts. Protect yourself by anonymizing your images.</Typography>
        <Button
          fullWidth
          variant="contained"
          component="label"
          color="primary"
          style={{marginTop: "15px", marginBottom: "15px"}}
        >
          Upload File
          <input
            type="file"
            style={{ display: "none" }}
            onChange={onImgUpload}
          />
        </Button>
        <img style={{maxWidth: "500px", maxHeight: "500px", marginBottom: "10px"}} src={img} ></img>
      </div>
    </Container>
  );
}

const toBase64 = file => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result.split(',')[1]);
  reader.onerror = error => reject(error);
});

const styles = {
  container: {
    maxWidth: "500px",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
};

export default withStyles(styles)(Scrubber);
