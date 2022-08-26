import React from 'react';
import './Sidebar.css'
import MyImage from './musicMatchLogo.png'
import SidebarOptions from './SidebarOptions'
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from './DataLayer';


const Sidebar = () => {
  const [{ playlists }, dispatch] = useDataLayerValue()

  return (
    <div className="sidebar">
      
      <img src={MyImage} alt="" />

      <SidebarOptions Icon={HomeIcon} title='Home' />
      <SidebarOptions Icon={SearchIcon} title='Search' />
      <SidebarOptions Icon={LibraryMusicIcon} title='Your Library' />
      <br />
      <br />
      <strong className='sidebar__title'>PLAYLISTS</strong>
      <hr />

      {playlists?.items?.map((playlist) => (
      <SidebarOptions title={playlist.name} />))}
      
      <SidebarOptions title='Hip Hop' />

    </div>
  );
}

export default Sidebar;
