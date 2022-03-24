import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import styles from './video_item.module.css';

const VideoItem = ({props, item: { snippet } }) => {
  
  return(
    // <h1>{props.item.snippet.localized.title}</h1>
    <Card className={styles.video} sx={{ display: 'flex', height:snippet.thumbnails.medium.height/1.5}}>
      <CardMedia className={styles.thumbnail}
          component="img"
          sx={{ width: snippet.thumbnails.medium.width/1.5,height:snippet.thumbnails.medium.height/1.5}}
          image={snippet.thumbnails.medium.url}
          // alt={snippet.localized.description}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography className={styles.title} component="div" variant="p" >
            {snippet.title}
          </Typography>
          <Typography className={styles.channelTitle} variant="subtitle1" color="text.secondary" component="div">
          {snippet.channelTitle}
          </Typography>
        </CardContent>
        
      </Box>
    </Card>
  );
};

export default VideoItem;