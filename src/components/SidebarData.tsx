import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import AnalyticsIcon from '@mui/icons-material/Analytics';

export const SidebarData = [
    {
        title: "Home",
        icon: <HomeIcon />,
        link: "/home",
    },
    {
        title: "page1",
        icon: <EmailIcon />,
        link: "/page1",
    },
    {
        title: "page2",
        icon: <AnalyticsIcon />,
        link: "/page2",
    },
]