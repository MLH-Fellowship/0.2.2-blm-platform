import React, { useEffect, useState } from 'react';
import {
  Grid,
  Typography
} from "@material-ui/core";
import NewsItem from "./NewsItem";

function Home() {
  const [newsList, setNewsList] = useState([]);
  useEffect(() => {
    const newsList = [
      {
        title: "News 1",
        date: "May 30, 2020",
        img: "https://bsp-static.playbill.com/dims4/default/9e8d33d/2147483647/crop/970x546%2B0%2B0/resize/970x546/quality/90/?url=http%3A%2F%2Fpb-asset-replication.s3.amazonaws.com%2Ffa%2F20%2F718ce329428fa1b0ad3e2213aaed%2Fblm.jpg",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris feugiat sem quis posuere elementum. Aenean at accumsan felis. Curabitur iaculis, massa at consectetur mollis, lacus tellus pellentesque nisi"
      },
      {
        title: "News 2",
        date: "May 31, 2020",
        img: "https://bsp-static.playbill.com/dims4/default/9e8d33d/2147483647/crop/970x546%2B0%2B0/resize/970x546/quality/90/?url=http%3A%2F%2Fpb-asset-replication.s3.amazonaws.com%2Ffa%2F20%2F718ce329428fa1b0ad3e2213aaed%2Fblm.jpg",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris feugiat sem quis posuere elementum. Aenean at accumsan felis. Curabitur iaculis, massa at consectetur mollis, lacus tellus pellentesque nisi"
      },
      {
        title: "News 3",
        date: "May 31, 2020",
        img: "https://bsp-static.playbill.com/dims4/default/9e8d33d/2147483647/crop/970x546%2B0%2B0/resize/970x546/quality/90/?url=http%3A%2F%2Fpb-asset-replication.s3.amazonaws.com%2Ffa%2F20%2F718ce329428fa1b0ad3e2213aaed%2Fblm.jpg",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris feugiat sem quis posuere elementum. Aenean at accumsan felis. Curabitur iaculis, massa at consectetur mollis, lacus tellus pellentesque nisi"
      }
    ];
    setNewsList(newsList);
  }, []);
  return <div style={{padding: "20px"}}>
    <Typography variant="h2" align="center" style={{marginBottom: "5px"}}>In The News</Typography>
    <Grid container spacing={3}>
      {newsList.map((newsItem) => {
        return (
          <Grid item xs={4}>
            <NewsItem content={newsItem}></NewsItem>
          </Grid>
        );
      })}
    </Grid>
  </div>;
}

export default Home;
