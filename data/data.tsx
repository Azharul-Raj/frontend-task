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
export const productTypes=['Plane','Halicopter','Drinks','Flowers','PrivateJet','AirBus'];
export const products=['Falcon 8X TBA/LTI','Falcon 9X TBA/LTI','Falcon 11X TBA/LTI','Falcon 2X TBA/LTI']
export const lists=[
    {
        name:'Plane',
        options:['Falcon 8X TBA/LTI','Falcon 9X TBA/LTI','Falcon 11X TBA/LTI','Falcon 12X TBA/LTI']            
    },
    {
        name:'Halicopter',
        options:['Heli 8X TBA/LTI','Heli 9X TBA/LTI','Heli 11X TBA/LTI','Heli 12X TBA/LTI']           
    },
    {
        name:'Drinks',
        options:['Coke','Red Bull','Pepsi','Sprite']           
    },
    {
        name:'Flowers',
        options:['Red Rose','Night Q','Blue Rose','Tulip S']           
    },
    {
        name:'PrivateJet',
        options:['Phenom 300','Learjet 60','Citation III','Citation XLS']
    },
    {
        name:'AirBus',
        options:['Cyborg-1','Penta-Cyborg','Cyborg-110','001-Cyborg']
    },
]

