import React from 'react';
import {
  Grid,
  Typography,
  TextField,
  Button,
  Container
} from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';

function Scrubber(props) {
  const { classes } = props;
  return (
    <Container component="main" maxWidth="sm">
      <div className={classes.container}>
        <Typography variant="h2" style={{marginTop: "15px"}}>Image Scrubber</Typography>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Image URL"
          autoFocus
        />
        <Button
          fullWidth
          variant="contained"
          color="primary"
        >
          Srub Image
        </Button>
      </div>
    </Container>
  );
}

const styles = {
  container: {
    maxWidth: "500px",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
};

export default withStyles(styles)(Scrubber);
