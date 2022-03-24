import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import VideoItem from '../video_item/VideoItem';

const VideoList = (props) => {
const [videoId, setvideoId] = useState();
  return(
    <>
    <Box sx={{display: 'flex', justifyContent: 'center', mt:2}}>
      <Grid container maxWidth="md" spacing={2} sx={{}}>
          
          {
            props.videos.map((item, index)=>{
              return(
                <>
                {
                // item.id===null?setvideoId(item.id.videoId):setvideoId(item.id)
                //console.log(item.id)
                }
                <Grid key={item.id} item xs={12} md={6} >
                  <VideoItem item={item}></VideoItem>
                </Grid>
                </>
              )
            })
          }
        
      </Grid>
    </Box>
  </>
  );
};

export default VideoList;