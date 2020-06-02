import React from 'react';
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Avatar,
  Typography
} from "@material-ui/core";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import { withStyles } from '@material-ui/core/styles';
import logo from "../assets/logo.svg";

function NewsItem(props) {
  const { classes, content } = props;
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar src={logo}></Avatar>
        }
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
        title={content.title}
        subheader={content.date}
      />
      <CardMedia
        style={{height: "0", paddingTop: "20%"}}
        className={classes.media}
        image={content.img}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {content.body}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton>
          <FavoriteIcon />
        </IconButton>
        <IconButton>
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

const styles = {};

export default withStyles(styles)(NewsItem);
