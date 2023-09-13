"use client"
import React from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import FileInput from '../components/Fields/FileInput';
import Select from '../components/Fields/Select';
import { clients, productTypes, products, trips } from '../../data/data';
import FieldGroup from '../components/Fields/FieldGroup';
import { FormValues } from '../../types/types';
import useStore from '../hooks/useStore';
import { useRouter } from 'next/navigation';



function Invoice() {
  const { register, handleSubmit, reset, formState: { errors }, control } = useForm<FormValues |any>();
  const router=useRouter()
  const { append, remove, fields } = useFieldArray({
    name: 'products',
    control,
  })
  const setProducts=useStore((state)=>state.setProducts);
  console.log(setProducts)
  const handleInvoice = (data: any) => {
    setProducts(data.products)
    console.log(data);
    router.push('/download_invoice')
  }
  const handleCancel = () => { console.log('clicked') }
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
              <Select id='clint' border label='Select' register={register} required options={clients} />
              <Select id='trip_no' border label='Trip' register={register} required options={trips} />
            </div>
            <div className="w-[45%] md:w-[40%] lg:w-[25%]">
              <FileInput id='image' register={register} small errors={errors} required label='Plane Image' placeholder='image' />
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
                <h2 className='text-xs md:text-[16px] font-semibold md:pl-16 lg:pl-32'>Description</h2>
              </div>
              <div className="w-[20%]"><h2 className='text-xs md:text-base text-start font-semibold'>Total</h2></div>
            </div>
            <hr />
            {/*  Title of second part*/}
            {/* Dynamic part */}
            {fields.map((field, idx) =>
            (
              <FieldGroup
                key={idx}
                idx={idx}
                register={register}
                field_id={field.id}
                option_one={productTypes}
                option_two={products}
                remove={remove}
                errors={errors}

              />
            )
            )}
            {/* Dynamic part */}
            <button type='button' onClick={() => { append({ product: '', product_type: '', description: '', total: '' }) }} className='text-blue-800 font-semibold cursor-pointer'>+ Add Product</button>
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
                <button type='submit' className='bg-blue-800 text-white px-4 py-2 md:px-8 md:py-3 rounded-full'>Save</button>
                <div onClick={() => reset()} className="text-gray-800 border border-gray-400 px-4 py-2 md:px-8 md:py-3 cursor-pointer rounded-full">Cancel</div>
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