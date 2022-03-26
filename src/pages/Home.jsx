import React from 'react';
import VideoList from '../components/video_list/VideoList';

const Home = ({videos}) => {
  return (
    <VideoList videos={videos}></VideoList>
  );
};

export default Home;