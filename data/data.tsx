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
//,'Falcon 9X TBA/LTI','Falcon 11X TBA/LTI','Falcon 2X TBA/LTI'
export const lists=[
    {
        id:'plane',
        name:'Plane',
        options:[
            {
                id:'falcon_8',
                flight:'Falcon 8X TBA/LTI',
                description_id:'falcon_desc_8',
                price_id:'price_falcon_8'
            },
            {
                id:'falcon_9',
                flight:'Falcon 9X TBA/LTI',
                description_id:'falcon_desc_9',
                price_id:'price_falcon_9'
            },
            {
                id:'falcon_11',
                flight:'Falcon 11X TBA/LTI',
                description_id:'falcon_desc_11',
                price_id:'price_falcon_11'
            },
            {
                id:'falcon_12',
                flight:'Falcon 12X TBA/LTI',
                description_id:'falcon_desc_12',
                price_id:'price_falcon_12'
            },
        ],        
    },
    {
        id:'halicopter',
        name:'Halicopter',
        options:[
            {
                id:'heli_8',
                flight:'Heli 8X TBA/LTI',
                description_id:'heli_desc_8',
                price_id:'price_heli_8'
            },
            {
                id:'heli_9',
                flight:'Heli 9X TBA/LTI',
                description_id:'heli_desc_9',
                price_id:'price_heli_9'
            },
            {
                id:'heli_11',
                flight:'Heli 11X TBA/LTI',
                description_id:'heli_desc_11',
                price_id:'price_heli_11'
            },
            {
                id:'heli_12',
                flight:'Heli 12X TBA/LTI',
                description_id:'heli_desc_12',
                price_id:'price_heli_12'
            },
        ],  
    },
    {
        id:'drinks',
        name:'Drinks',
        options:[
            {
                id:'coke',
                name:'Coke',
                description_id:'coke_desc',
                price_id:'coke_price'
            },
            {
                id:'red_bull',
                name:'Red Bull',
                description_id:'red_bull_desc',
                price_id:'red_bull_price'
            },
            {
                id:'pepsi',
                name:'Pepsi',
                description_id:'pepsi_desc',
                price_id:'pepsi_price'
            },
            {
                id:'sprite',
                name:'Sprite',
                description_id:'sprite_desc',
                price_id:'sprite_price'
            },
        ]
    },
    {
        //['Red Rose','Night Q','Blue Rose','Tulip S']
        id:'flowers',
        name:'Flowers',
        options:[
            {
                id:'red_rose',
                name:'Red Rose',
                description_id:'red_rose_desc',
                price_id:'red_rose_price'
            },
            {
                id:'night_q',
                name:'Night Q',
                description_id:'night_desc_q',
                price_id:'night_q_price'
            },
            {
                id:'blue_rose',
                name:'Blue Rose',
                description_id:'blue_rose_desc',
                price_id:'blue_rose_price'
            },
            {
                id:'tulip_s',
                name:'Tulip S',
                description_id:'tulip_s_desc',
                price_id:'tulip_s_price'
            },
        ]
    },
    {
        //['Cyborg-1','Penta-Cyborg','Cyborg-110','001-Cyborg']
        id:'air_bus',
        name:'AirBus',
        options:[
            {
                id:'cyborg-1',
                name:'Cyborg 1',
                description_id:'cyborg1_desc',
                price_id:'cyborg1_price'
            },
            {
                id:'cyborg-001',
                name:'Cyborg 001',
                description_id:'cyborg001_desc',
                price_id:'cyborg001_price'
            },
            {
                id:'cyborg-2',
                name:'Cyborg 2',
                description_id:'cyborg2_desc',
                price_id:'cyborg2_price'
            },
            
        ]
    },
]

