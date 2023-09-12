import React,{useRef} from 'react'
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import {FiShare} from 'react-icons/fi'

interface FileProps{
  id:string;
  label:string;
  placeholder:string
  register:UseFormRegister<FieldValues>
  type?:string;
  required:boolean;
  errors?:FieldErrors<FieldValues>
  small?:boolean
}

function FileInput({id,label,placeholder,register,required,small,errors}:FileProps) {
  const fileRef =  useRef<HTMLInputElement | null>(null);

  const { ref, ...rest } = register(id,{required})
  const autoResize=(e:React.ChangeEvent<HTMLTextAreaElement>)=>{
    const value=e.target?.value
  }
  return (
    <div className="w-full py-2">
        <label className='text-gray-900 block pb-1 text-md font-semibold'>{label}</label>
        <div onClick={()=>fileRef.current?.click()} className={`flex px-1 md:px-0 ${small?'space-x-3 py-5':'flex-col py-8'}  justify-center items-center  border-[1px] border-blue-500 border-dashed rounded-sm`}>
            <div className={`${small?'p-8 text-xl':'p-8 text-xl'} text-blue-500`}>
              <FiShare/>
            </div>
            <p className={`${small?'':'py-2 '} text-blue-500`}>Upload <br /> Plane image.</p>
      <input
      {...rest}
      ref={(e)=>{
        ref(e)
        fileRef.current=e
      }}
      hidden placeholder={placeholder}  className={`py-2 w-full px-1 border border-gray-400 focus:outline-none`} id={id} type={`file`}  />
        </div>
      
      {errors && <p>{errors.root?.message}</p> }
    </div>
  )
}

export default FileInput;