import "./header.css"
import React from 'react';
import Navbar from "./navbar";

export default function Header(){

  return(
    <header>
    <picture>
      <h2>instagram</h2>
    </picture>
    <div>
      <input name="search" placeholder="Search" />
    </div>
    <Navbar/>
    </header>
  )
}