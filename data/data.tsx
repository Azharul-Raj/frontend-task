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

export const clients=['Select Client','IndiGo','easyJet','Lufthansa','Wizz Air']
export const trips=['T2930','T2940','T2852','T2955','T3255']
export const productTypes=['Plane','Halicopter','Drinks','Flowers','Private Jet','Air Bus'];
export const products=['Falcon 8X TBA/LTI','Falcon 9X TBA/LTI','Falcon 11X TBA/LTI','Falcon 2X TBA/LTI']