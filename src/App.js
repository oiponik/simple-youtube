import logo from './logo.svg';
import './App.css';
import VideoList from './components/video_list/VideoList';
import { useEffect, useState } from 'react';
import Nav from './components/Nav';
import { Route, Routes } from 'react-router-dom';
import VideoView from './pages/VideoView';
import Home from './pages/Home';

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
      
      <Routes>
        <Route path="/" element={<Home videos={videos}/>} />
        <Route path="/videoView/:id" element={<VideoView videos={videos}/>} />
      </Routes>
    </>
  );
}

export default App;
