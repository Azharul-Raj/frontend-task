"use client"
import React from 'react'
import { useForm } from 'react-hook-form'

import { FaTrash } from 'react-icons/fa';

import FileInput from '../components/Fields/FileInput';
import Select from '../components/Fields/Select';
import { clients, productTypes, products, trips } from '../../data/data';
import Input from '../components/Fields/Input';


function Invoice() {
  const {register,handleSubmit,reset,formState:{errors}}=useForm();
  const handleInvoice=(data:any)=>{
    console.log(data)
  }
  const handleCancel=()=>{console.log('clicked')}
  return (
    <section>
      <div className="py-3 pl-8 lg:pl-0">
        <h2 className='text-xl font-bold'>Invoices</h2>
        <p>Invoices / New Invoice</p>
      </div>
    {/* form part */}
    <div className="">
      <form onSubmit={handleSubmit(handleInvoice)} action="">
        {/* form top section */}
        <div className="bg-white rounded-lg p-5 md:p-7 flex items-center justify-between">
          <div className="w-[40%] md:w-[40%]">
            <Select id='clint' border label='Select' register={register} required options={clients}/>
            <Select id='trip_no' border label='Trip' register={register} required options={trips}/>
          </div>
          <div className="w-[45%] md:w-[40%] lg:w-[25%]">
            <FileInput id='image' register={register} small required label='Plane Image' placeholder='image'/>
          </div>
        </div>
        {/* form top section */}
        {/* form bottom */}
        
        <div className="bg-white rounded-lg p-2 md:p-7  mt-4">
          {/*  Title of second part*/}
          <div className="flex justify-between items-center">
          <div className="flex space-x-2 w-[80%]">
            <h2 className='text-xs md:text-[16px] font-semibold'>Product Type:</h2>
            <h2 className='text-xs md:text-[16px] font-semibold pl-3'>Products:</h2>
            <h2 className='text-xs md:text-[16px] font-semibold md:pl-16 lg:pl-52'>Description</h2>
          </div>
          <div className="w-[20%]"><h2 className='text-md text-start font-semibold'>Total</h2></div>
        </div>
        <hr />
          {/*  Title of second part*/}
          <div className="flex items-center justify-around md:justify-between">
          <div className="space-x-2 flex items-center justify-between">
            <div className="">
              <Select id='product_type' width='w-16 md:w-28' register={register} options={productTypes} />
            </div>
            <div className="">
            <Select id='products' width=' w-16 md:w-32 lg:w-72' register={register} options={products} />
            </div>
            <div className="">
            <Input id='description' placeholder='Product for trip ' register={register} border/>
            </div>
              
              
          </div>
          <div className="w-1/5 flex space-x-2 items-center">
            <Input id='total' placeholder='11,500.00' register={register} border/>
            <div className="">
              <div className="bg-red-300 p-2 rounded-lg cursor-pointer text-red-600 text-2xl"><FaTrash/></div>
            </div>
          </div>
          </div>
        <span onClick={handleCancel} className='text-blue-800 font-semibold cursor-pointer'>+ Add Product</span>
        {/* Calculation */}
        <div className="flex justify-between">
          <div className=""></div>
          <div className="flex flex-col">
          <div className=" flex justify-between items-center">
            <h2 className='text-sm md:text-xl font-semibold pr-4'>Subtotal : </h2>
            <h2 className='text-gray-600 text-md font-[400]'>16,550.00</h2>            
          </div>
          <div className="flex justify-between items-center">
            <h2 className='text-sm md:text-xl font-semibold -pr-4'>TVA : </h2>
            <span className='text-gray-600 text-md font-[400]'>28,800.00</span>            
          </div>
          </div>
        </div>
        <hr />
        {/* very bottom */}
        <div className="flex justify-between items-center pt-2">
          <div className="flex space-x-3 items-center">
            <button className='bg-blue-800 text-white px-4 py-2 md:px-8 md:py-3 rounded-full'>Save</button>
            <div className="text-gray-800 border border-gray-400 px-4 py-2 md:px-8 md:py-3 cursor-pointer rounded-full">Cancel</div>
          </div>
          <div className=" flex justify-between items-center font-semibold text-sm md:text-xl text-blue-600">
            <h2 className=''>Total</h2>
            <span className='md:ml-6'>:</span>
            <span className='pl-2'>16,550.00</span>            
          </div>
        </div>
        {/* very bottom */}
        </div>
        {/* form bottom */}
      </form>
    </div>
    {/* form part */}
    </section>
  )
}

export default Invoice