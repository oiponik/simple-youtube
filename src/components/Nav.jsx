import * as React from 'react';
import { useEffect, useState, useRef } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Divider, InputBase, Paper } from '@mui/material';


const Nav = ({onSearch}) => {
  
  const [searchtext, setSearchtext] = useState('김승태')
  
  const inputRef = useRef();
  
  const handleSearch = () =>{
    const value = inputRef.current.value;
    onSearch(value)
    
  }

  const searchSubmit= () =>{
    handleSearch();
  }

  const onKeyPress = (event) =>{
    if(event.key ==='Enter') handleSearch();
  }
  
  return(
    <Box sx={{display:'flex', justifyContent: 'space-around',borderBottom: 1,borderColor:'lightgray', py:1, alignItems: 'center'}}>
      <Box component="h1" sx={{my:0}}><img src={`${process.env.PUBLIC_URL}/logo.png`} /></Box>
      <Paper
        component="div"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, height: 34 }}
      >
        <InputBase
          inputRef={inputRef}
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search video"
          onKeyPress={onKeyPress}
        />
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={searchSubmit}>
          <SearchIcon />
        </IconButton>
      </Paper>
    </Box>
  );
}

export default Nav;
