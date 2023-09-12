import {FiHome,FiPhoneCall,FiFileText,FiFolderMinus,FiSettings,FiUsers} from 'react-icons/fi'
import {TfiBag} from 'react-icons/tfi'
import {PiAirplaneLight} from 'react-icons/pi'
import {RiChatVoiceLine} from 'react-icons/ri'
export const navItems=[
    {   
        name:'Dashboard',
        Icon:<FiHome/>,
        url:'/invoices/dashboard'
    },
    {   
        name:'Reservations',
        Icon:<FiPhoneCall/>,
        url:'/invoices/reservations'
    },
    {   
        name:'Trips',
        Icon:<TfiBag/>,
        url:'/invoices/trips'
    },
    {   
        name:'Invoices',
        Icon:<FiFileText/>,
        url:'/invoices'
    },
    {   
        name:'Planes',
        Icon:<PiAirplaneLight/>,
        url:'/invoices/planes'
    },
    {   
        name:'Team',
        Icon:<FiUsers/>,
        url:'/invoices/team'
    },
    {   
        name:'Files',
        Icon:<FiFolderMinus/>,
        url:'/invoices/files'
    },
    {   
        name:'Messages',
        Icon:<RiChatVoiceLine/>,
        url:'/invoices/message'
    },
    {   
        name:'Setting',
        Icon:<FiSettings/>,
        url:'/invoices/setting'
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

// export const products=[
//     {
//         id:1,
//         name:'Plane',
//         options:['Falcon 8X TBA/LTI','Falcon 9X TBA/LTI','Falcon 11X TBA/LTI','Falcon 2X TBA/LTI']
//     },
//     {
//         id:2,
//         name:'Halicopter',
//         options:['Heli FX','Heli 2Y','Heli I','Heli S']
//     },
//     {
//         id:3,
//         name:'Drinks',
//         options:['Coke','Red Bull','Pepsi','Sprite']
//     },
//     {
//         id:4,
//         name:'Flowers',
//         options:['Red Rose','Night Q','Blue Rose','Tulip S']
//     },
//     {
//         id:4,
//         name:'AirBus',
//         options:['Cyborg-1','Penta-Cyborg','Cyborg-110','001-Cyborg']
//     },
// ]