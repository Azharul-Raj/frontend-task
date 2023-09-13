"use client"
import React from 'react'
import { FieldErrors, FieldValues, UseFieldArrayRemove, UseFormRegister, useForm } from 'react-hook-form';
import { FiChevronDown } from 'react-icons/fi';
import { FaTrash } from 'react-icons/fa';
interface groupFieldProps {
  idx: number;
  field_id: string;
  option_one: string[];
  option_two: string[];
  errors?: FieldErrors<FieldValues>;
  remove: UseFieldArrayRemove;
  register: UseFormRegister<FieldValues>
}

function FieldGroup({ field_id, idx, option_one, option_two, errors, remove, register }: groupFieldProps) {
  return (
    <div key={field_id} className="flex items-center justify-around md:justify-between">
      <div className="space-x-2 flex items-center justify-between">
        {/* Options1 */}
        <div className="relative">
          <select className={` appearance-none w-20 text-xs md:text-base  md:w-[104px] lg:w-32 px-1 py-[10px] border border-gray-400 rounded-lg focus:outline-none caret-gray-900`} {...register(`products.${idx}.product_type`, { required: true })} >
            {
              option_one?.map((value, i) => {

                return (
                  <option className="text-xs md:text-base" key={i} value={value}>{value}</option>
                )
              })
            }
          </select>
          <div className="h-6 hidden md:block absolute right-1 top-4 pointer-events-none">
            <FiChevronDown />
          </div>
        </div>
        {/* Options2 */}
        <div className="relative ">
          <select className={` appearance-none px-1 w-20 text-xs md:text-base md:w-40 lg:w-48 py-[10px] border border-gray-400 rounded-lg focus:outline-none caret-gray-900`} {...register(`products.${idx}.product`, { required: true })}>
            {
              option_two?.map((value, i) =>
              (
                <option className="text-xs md:text-sm lg:text-base" key={i} value={value}>{value}</option>
              ))
            }
          </select>
          <div className="h-6 hidden md:block absolute right-1 top-4 pointer-events-none">
            <FiChevronDown />
          </div>
        </div>
        {/* Description */}
        <div className={`w-full py-2`}>
          <input placeholder={'Description'} className={`py-2 w-16 text-xs md:text-base md:w-full px-1 border border-gray-400 rounded-lg focus:outline-none`} type={'text'} {...register(`products.${idx}.description`, { required: true })} />
          {errors && errors[`products.${idx}.description`] && <p className="text-red-500 text-xs">Description is required</p>}
        </div>
      </div>
      {/* Right PART */}
      <div className="w-1/4 md:w-1/5 flex space-x-2 items-center">
        <div className={`w-full py-2`}>
          <input placeholder={'Total'} className={`py-2 w-16 text-xs md:text-base md:w-full px-1 border border-gray-400 rounded-lg focus:outline-none`} type={'text'} {...register(`products.${idx}.total`, { required: 'total is required.' })} />
          {errors && errors[`products.${idx}.total`] && <p className="text-red-500 text-xs">Amount is required</p>}
        </div>
        <div className={`${idx}`}>
          <div onClick={() => remove(idx)} className="bg-red-300 p-2 rounded-lg cursor-pointer text-red-600 text-sm md:text-2xl"><FaTrash /></div>
        </div>
      </div>
    </div>
  )
}

export default FieldGroup