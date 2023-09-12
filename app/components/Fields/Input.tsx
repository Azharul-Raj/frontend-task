
import {useForm,FieldErrors, FieldValues, UseFormRegister} from 'react-hook-form';


interface InputProps{
    id:string;
    label?:string;
    placeholder:string
    register:UseFormRegister<FieldValues>
    type?:string;
    required?:boolean;
    errors?:FieldErrors<FieldValues>
    border?:boolean
}

function Input({id,label,type,required,errors,register,placeholder,border}:InputProps) {
  return (
    <div className={`w-full py-2`}>
        {label &&<label className='text-gray-900 block pb-1 text-lg font-semibold'>{label}</label>}
      <input placeholder={placeholder}  className={`py-2 w-full px-1 border border-gray-400 ${border?
        'rounded':'rounded-lg'} focus:outline-none`} id={id} type={type?type:'text'} {...register(id,{required})} />
      
      {errors && <p>{errors.root?.message}</p> }
    </div>
  )
}

export default Input;