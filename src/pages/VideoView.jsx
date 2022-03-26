import React from 'react';
import { useParams } from 'react-router-dom';
import VideoList from '../components/video_list/VideoList';

const VideoView = ({videos}) => {
  const { id } = useParams();
  console.log(id)
  return (
    <>
      <div>
        <iframe width="560" height="315" src={"https://www.youtube.com/embed/"+id} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <VideoList videos={videos}></VideoList>
    </>
  );
};

export default VideoView;