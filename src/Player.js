import React, {useEffect} from 'react';
import './Player.css'
import './Sidebar.css'
import './Body.css'
import './Footer.css'
import Sidebar from './Sidebar'
import Body from './Body'
import Footer from './Footer'

const Player = ({ spotify }) => {
  
  useEffect(() => {
    
  },)
  return (
      <div className="player">
        <div className="player__body">
          <Sidebar />
          <Body />
        </div>
          <Footer />
      </div>
    )
}

export default Player