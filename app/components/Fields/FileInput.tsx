"use client"
import React, { useRef, useState } from 'react';
import {  FieldErrors,  FieldValues, UseFormRegister } from 'react-hook-form';
import { FiShare,FiX } from 'react-icons/fi';
import Swal from 'sweetalert2';

interface FileProps {
  id: string;
  label: string;
  placeholder: string;
  register: UseFormRegister<FieldValues>;
  type?: string;
  required: boolean;
  errors: FieldErrors<FieldValues>;
  small?: boolean;
}

function FileInput({ id, label, placeholder, register, small, errors }: FileProps) {
  const [isFileExist,setIsFileExist]=useState()
  const fileRef = useRef<HTMLInputElement | null>(null);
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target && typeof e.target.result === 'string') {
          setImageSrc(e.target.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };
  const handleClear=()=>{
    setImageSrc('');
  }

  const { ref, ...rest } = register(id, { required:{value:true,message:'Image is required'} });
  // if(errors.root?.message){}
  if( errors && errors?.products){
     Swal.fire({
      icon: 'error',
      title: 'Product error.',
      text: 'Add at least one product!',
    })
  }
  return (
    <div className="w-full py-2">
      <label className="text-gray-900 block pb-1 text-md font-semibold">{label}</label>
      <div className="relative">
        {imageSrc && (
          <div className="">
            <img
              id="img"
              className="absolute w-full h-full flex justify-center items-center object-cover rounded-sm overflow-hidden"
              src={imageSrc}
              alt=""
            />
            <p className="absolute text-white top-1/2 left-[40%] font-bold">Change</p>
            <div onClick={handleClear} className="absolute -right-2 -top-2 cursor-pointer text-lg p-2 bg-gray-100 rounded-full ">
              <FiX/>
            </div>
          </div>
        )}
        <div
          onClick={() => fileRef.current?.click()}
          className={`flex px-1 md:px-0 ${small ? 'space-x-3 py-5' : 'flex-col py-8'}  justify-center items-center  border-[1px] border-blue-500 border-dashed rounded-sm`}
        >
          <div className={`${small ? 'p-4 md:p-8 text-xl' : 'p-8 text-xl'} text-blue-500`}>
            <FiShare />
          </div>
          <p className={`${small ? '' : 'py-2 '} text-blue-500`}>Upload <br /> Plane image.</p>
          <input
            {...rest}
            ref={(e) => {
              ref(e);
              fileRef.current = e;
            }}
            onChange={handleFileChange}
            hidden
            placeholder={placeholder}
            className={`py-2 btn w-full px-1 border border-gray-400 focus:outline-none`}
            id={id}
            type={`file`}
          />
        </div>
      </div>
      { errors && errors[id] ? <p className="text-red-500">Image is required</p>:''}
    </div>
  );
}

export default FileInput;
