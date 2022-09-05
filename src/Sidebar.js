import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreOutlined from '@material-ui/icons/ExpandMoreOutlined';

function Sidebar() {
    return (
        <div className='sidebar'>
            <SidebarRow src='https://scontent.fhan2-2.fna.fbcdn.net/v/t39.30808-6/285816156_1221722155235730_2470915918231211275_n.jpg?stp=dst-jpg_s526x395&_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=p6E0LLfjdq0AX-PdC1U&_nc_ht=scontent.fhan2-2.fna&oh=00_AT8v59DzRJH-nrbs0U6q13e39tv71UW18bLK6Ec-PDtrMg&oe=631AA320' title='Đặng Bảo Quốc'/> 
            <SidebarRow 
                Icon={LocalHospitalIcon} 
                title="Covid 19" /> 
            <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />   
            <SidebarRow Icon={PeopleIcon} title="Friends" />   
            <SidebarRow Icon={ChatIcon} title="Messenger" />   
            <SidebarRow Icon={EmojiFlagsIcon} title="Marketplace" />  
             
            <SidebarRow Icon={VideoLibraryIcon} title="Videos" />   
            <SidebarRow Icon={ExpandMoreOutlined} title="Pages" />   
              
        </div>
    )
}

export default Sidebar