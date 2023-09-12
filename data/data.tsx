import {FiHome,FiPhoneCall,FiFileText,FiFolderMinus,FiSettings,FiLogOut} from 'react-icons/fi'
import {TfiBag} from 'react-icons/tfi'
import {PiAirplaneLight} from 'react-icons/pi'
import {RiChatVoiceLine} from 'react-icons/ri'
export const navItems=[
    {   
        name:'Dashboard',
        Icon:<FiHome/>,
        url:'/'
    },
    {   
        name:'Reservations',
        Icon:<FiPhoneCall/>,
        url:'/'
    },
    {   
        name:'Trips',
        Icon:<TfiBag/>,
        url:'/'
    },
    {   
        name:'Invoices',
        Icon:<FiFileText/>,
        url:'/invoices'
    },
    {   
        name:'Planes',
        Icon:<PiAirplaneLight/>,
        url:'/'
    },
    {   
        name:'Planes',
        Icon:<PiAirplaneLight/>,
        url:'/'
    },
    {   
        name:'Files',
        Icon:<FiFolderMinus/>,
        url:'/'
    },
    {   
        name:'Messages',
        Icon:<RiChatVoiceLine/>,
        url:'/'
    },
    {   
        name:'Setting',
        Icon:<FiSettings/>,
        url:'/'
    },
    // {   
    //     name:'Logout',
    //     Icon:<FiLogOut/>,
    //     url:'/logout'
    // },
]