import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import "./css/hheader.css";
import Hheaderoptions from './Hheaderoptions';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar } from "@mui/material" ;
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

const Hheader = () => {


    const user = useSelector(selectUser);

  return (
    <>
        <div className='header'>
            <div className="header__left">
                <div className="header__logo">
                    <img src="images/linkedin.png" alt=''/>
                </div>
                <div className="header__search">
                    <SearchIcon />
                        <input type="text" placeholder="Search"/>
                </div>
            </div>

            <div className="header__right">
                <Hheaderoptions Icon={HomeIcon} title="Home"/>
                <Hheaderoptions Icon={PeopleIcon} title="My Network"/>
                <Hheaderoptions Icon={BusinessCenterIcon} title="Jobs"/>
                <Hheaderoptions Icon={MessageIcon} title="Messaging"/>
                <Hheaderoptions Icon={NotificationsIcon} title="Notifications"/>
                <Hheaderoptions avatar={Avatar} title={user.displayName}/>
            </div>
        </div>
    </>
  )
};

export default Hheader