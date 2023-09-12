import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import {FiChevronDown} from 'react-icons/fi'

interface SelectProps{
    id:string;
    label?:string;
    width?:string;
    register:UseFormRegister<FieldValues>
    required?:boolean;
    options?:string[];
    errors?:FieldErrors<FieldValues>
    border?:boolean
}

function Select({id,label,register,errors,options,required,border,width}:SelectProps) {
  return (
    <div className="py-2">
       {label&& <label className={`block text-md font-semibold ${border?'pl-2':''}`} htmlFor={id}>{label}</label>}
        <div className="relative ">
        <select className={`${width?width:'w-full'} appearance-none px-1 py-[10px] border border-gray-400 ${border?
        'rounded-full px-2':'rounded-lg'} focus:outline-none caret-gray-900`} {...register(id,{required})} name="" id="">
            {
                options?.map((value,i)=>(
                    <option key={i} value={value}>{value}</option>
                ))
            }
        </select>
            <div className="h-6 absolute right-4 top-4 pointer-events-none">
                <FiChevronDown/>
            </div>
        </div>
    </div>
  )
}

export default Select