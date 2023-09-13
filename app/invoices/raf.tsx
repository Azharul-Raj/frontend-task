// import React from 'react'
// import { FaTrash } from 'react-icons/fa'
// import { FiChevronDown } from 'react-icons/fi'

// const fields: {
//     id: string
//     product_type: string,
//     product: string,
//     description: string,
//     total: number
// }[] = []

// const lists=[
//     {
//         id:'plane',
//         name:'Plane',
//         options:[
//             {
//                 id:'falcon_8',
//                 flight:'Falcon 8X TBA/LTI',
//                 description_id:'falcon_desc_8',
//                 price_id:'price_falcon_8'
//             },
//             {
//                 id:'falcon_9',
//                 flight:'Falcon 9X TBA/LTI',
//                 description_id:'falcon_desc_9',
//                 price_id:'price_falcon_9'
//             },
//             {
//                 id:'falcon_11',
//                 flight:'Falcon 11X TBA/LTI',
//                 description_id:'falcon_desc_11',
//                 price_id:'price_falcon_11'
//             },
//             {
//                 id:'falcon_12',
//                 flight:'Falcon 12X TBA/LTI',
//                 description_id:'falcon_desc_12',
//                 price_id:'price_falcon_12'
//             },
//         ],        
//     },
//     {
//         id:'halicopter',
//         name:'Halicopter',
//         options:[
//             {
//                 id:'heli_8',
//                 flight:'Heli 8X TBA/LTI',
//                 description_id:'heli_desc_8',
//                 price_id:'price_heli_8'
//             },
//             {
//                 id:'heli_9',
//                 flight:'Heli 9X TBA/LTI',
//                 description_id:'heli_desc_9',
//                 price_id:'price_heli_9'
//             },
//             {
//                 id:'heli_11',
//                 flight:'Heli 11X TBA/LTI',
//                 description_id:'heli_desc_11',
//                 price_id:'price_heli_11'
//             },
//             {
//                 id:'heli_12',
//                 flight:'Heli 12X TBA/LTI',
//                 description_id:'heli_desc_12',
//                 price_id:'price_heli_12'
//             },
//         ],  
//     },
//     {
//         id:'drinks',
//         name:'Drinks',
//         options:[
//             {
//                 id:'coke',
//                 name:'Coke',
//                 description_id:'coke_desc',
//                 price_id:'coke_price'
//             },
//             {
//                 id:'red_bull',
//                 name:'Red Bull',
//                 description_id:'red_bull_desc',
//                 price_id:'red_bull_price'
//             },
//             {
//                 id:'pepsi',
//                 name:'Pepsi',
//                 description_id:'pepsi_desc',
//                 price_id:'pepsi_price'
//             },
//             {
//                 id:'sprite',
//                 name:'Sprite',
//                 description_id:'sprite_desc',
//                 price_id:'sprite_price'
//             },
//         ]
//     },
//     {
//         //['Red Rose','Night Q','Blue Rose','Tulip S']
//         id:'flowers',
//         name:'Flowers',
//         options:[
//             {
//                 id:'red_rose',
//                 name:'Red Rose',
//                 description_id:'red_rose_desc',
//                 price_id:'red_rose_price'
//             },
//             {
//                 id:'night_q',
//                 name:'Night Q',
//                 description_id:'night_desc_q',
//                 price_id:'night_q_price'
//             },
//             {
//                 id:'blue_rose',
//                 name:'Blue Rose',
//                 description_id:'blue_rose_desc',
//                 price_id:'blue_rose_price'
//             },
//             {
//                 id:'tulip_s',
//                 name:'Tulip S',
//                 description_id:'tulip_s_desc',
//                 price_id:'tulip_s_price'
//             },
//         ]
//     },
//     {
//         //['Cyborg-1','Penta-Cyborg','Cyborg-110','001-Cyborg']
//         id:'air_bus',
//         name:'AirBus',
//         options:[
//             {
//                 id:'cyborg-1',
//                 name:'Cyborg 1',
//                 description_id:'cyborg1_desc',
//                 price_id:'cyborg1_price'
//             },
//             {
//                 id:'cyborg-001',
//                 name:'Cyborg 001',
//                 description_id:'cyborg001_desc',
//                 price_id:'cyborg001_price'
//             },
//             {
//                 id:'cyborg-2',
//                 name:'Cyborg 2',
//                 description_id:'cyborg2_desc',
//                 price_id:'cyborg2_price'
//             },
            
//         ]
//     },
// ]
// function raf() {
//     let second=
//     return (
        
//         <>
//             {fields.map((field, i) => (<div key={field.id} className="flex flex-col items-center justify-around md:justify-between">
//                 <div className="space-x-2 flex items-center justify-between">
//                     <div className="">
//                         <div className="relative ">
//                             <select className={` appearance-none px-1 py-[10px] border border-gray-400 rounded-lg focus:outline-none caret-gray-900`} {...register(id, { required })} name="" id="">
//                                 {
//                                     lists?.map((value, i) => { second=value.options 
//                                         (
//                                         <option className="text-xs md:text-base" key={i} value={value}>{value}</option>
//                                     )})
//                                 }
//                             </select>
//                             <div className="h-6 hidden md:block absolute right-4 top-4 pointer-events-none">
//                                 <FiChevronDown />
//                             </div>
//                         </div>
//                     </div>
//                     <div className="">
//                         <Select id='products' width=' w-16 md:w-32 lg:w-72' register={register} options={products} />
//                     </div>
//                     <div className="">
//                         <Input id='description' placeholder='Product for trip ' register={register} border />
//                     </div>


//                 </div>
//                 <div className="w-1/5 flex space-x-2 items-center">
//                     <Input id='total' placeholder='11,500.00' register={register} border />
//                     <div className="">
//                         <div className="bg-red-300 p-2 rounded-lg cursor-pointer text-red-600 text-2xl"><FaTrash /></div>
//                     </div>
//                 </div>
//             </div>))}
//             )
//         </>
// }

// export default raf