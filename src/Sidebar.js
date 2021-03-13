import React from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption'
import Image from './spotify1.png'
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from './DataLayer';

const Sidebar = () => {
    const[{playlists}, dispatch] = useDataLayerValue()
    return (
        <div className="sidebar">
            <img className="Sidebar__logo" src={Image} alt="spotify" />
            <SidebarOption title="Home" Icon={HomeIcon}  />
            <SidebarOption title="Search" Icon={SearchIcon} />
            <SidebarOption title="Your Library" Icon={LibraryMusicIcon} />
            
            <br/>
            <strong className="sidebar__title">PLAYLIST</strong>
            <hr/>
            {playlists?.items?.map(playlist=>(
                <SidebarOption title={playlist.name} />
            ))}
        </div>
    )
}

export default Sidebar
