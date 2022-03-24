import logo from './logo.svg';
import './App.css';
import VideoList from './components/video_list/VideoList';
import { useEffect, useState } from 'react';
import Nav from './components/Nav';

function App({Youtube}) {
  const [videos, setVideos] = useState([]);
  const search = query =>{
    
    Youtube
      .search(query)
      .then(videos => setVideos(videos))
  }
  
  useEffect(()=>{
    Youtube
      .mostPopular()
      .then(videos => setVideos(videos))
  }, [])

  return (
    <>
      <Nav onSearch={search}></Nav>
      <VideoList videos={videos}></VideoList>
    </>
  );
}

export default App;
