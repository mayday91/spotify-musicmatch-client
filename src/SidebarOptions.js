import React from 'react';
import './SidebarOptions.css'
import icons from '@mui/icons-material'

const SidebarOptions = ({ title, Icon }) => {
  return (
    <div className='sidebarOptions'>
      {Icon && <Icon className='sidebarOptions__icon'></Icon>}
      {Icon ?  <h4>{title}</h4> : <p>{title}</p>}
    </div>
  );
}

export default SidebarOptions;
