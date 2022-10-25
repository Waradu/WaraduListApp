import React from 'react'
import Navbar from "./navbar";
import Bottombar from "./bottombar";

export default function settings() {
  return (
    <>
      <div className="page" id="page">
        Settings
      </div>
      <Navbar />
      <Bottombar />
    </>
  )
}
