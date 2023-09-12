"use client"
import React from 'react'
import { useForm } from 'react-hook-form'
import FileInput from '../components/Fields/FileInput';
import Select from '../components/Fields/Select';
import { clients, productTypes, products, trips } from '../../data/data';
import Input from '../components/Fields/Input';

function Invoice() {
  const {register,handleSubmit,reset,formState:{errors}}=useForm();
  const handleInvoice=()=>{}
  const handleCancel=()=>{console.log('clicked')}
  return (
    <section>
      <div className="py-3">
        <h2 className='text-xl font-bold'>Invoices</h2>
        <p>Invoices / New Invoice</p>
      </div>
    {/* form part */}
    <div className="">
      <form action="">
        {/* form top section */}
        <div className="bg-white rounded-lg p-7 flex items-center justify-between">
          <div className="md:w-[40%]">
            <Select id='clint' border label='Select' register={register} required options={clients}/>
            <Select id='trip_no' border label='Trip' register={register} required options={trips}/>
          </div>
          <div className="md:w-[40%] lg:w-[25%]">
            <FileInput id='image' register={register} small required label='Plane Image' placeholder='image'/>
          </div>
        </div>
        {/* form top section */}
        {/* form bottom */}
        
        <div className="bg-white rounded-lg p-7  mt-4">
          {/*  Title of second part*/}
          <div className="flex justify-between items-center">
          <div className="flex space-x-2 w-[80%]">
            <h2 className='text-md font-semibold'>Product Type:</h2>
            <h2 className='text-md font-semibold pl-3'>Products:</h2>
            <h2 className='text-md font-semibold lg:pl-52'>Description</h2>
          </div>
          <div className="w-[20%]"><h2 className='text-md text-start font-semibold'>Total</h2></div>
        </div>
        <hr />
          {/*  Title of second part*/}
          <div className="flex items-center justify-between">
          <div className="space-x-2 flex items-center justify-between">
            <div className="">
              <Select id='product_type' width='w-28' register={register} options={productTypes} />
            </div>
            <div className="">
            <Select id='products' width='w-72' register={register} options={products} />
            </div>
            <div className="">
            <Input id='description' placeholder='Product for trip ' register={register} border/>
            </div>
              
              
          </div>
          <div className="lg:w-1/5">
            <Input id='total' placeholder='11,500.00' register={register} border/>
          </div>
          </div>
        <span onClick={handleCancel} className='text-blue-800 font-semibold cursor-pointer'>+ Add Product</span>
        <div className="flex justify-between">
          <div className=""></div>
          <div className="w-1/5 flex flex-col justify-around">
          <div className=" flex justify-between items-center">
            <h2 className='text-xl font-semibold text-end'>Subtotal : </h2>
            <span className='text-gray-600 text-md font-[400]'>16,550.00</span>            
          </div>
          <div className="flex justify-between items-center">
            <h2 className='text-xl font-semibold text-end'>TVA : </h2>
            <span className='text-gray-600 text-md font-[400]'>28,800.00</span>            
          </div>
          </div>
        </div>
        </div>
        {/* form bottom */}
      </form>
    </div>
    {/* form part */}
    </section>
  )
}

export default Invoice