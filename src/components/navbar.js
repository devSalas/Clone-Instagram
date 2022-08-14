
import * as React from 'react';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import SendIcon from '@mui/icons-material/Send';
import AddBoxIcon from '@mui/icons-material/AddBox';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "./navbar.css"
export default function Navbar(){

  
  return(
    <>
    <nav>
      <HomeIcon/>
      <SendIcon/>
      <AddBoxIcon/>
      <FavoriteBorderIcon/>
      <AccountCircleIcon/>
    </nav>
    </>
  )
}