import React from 'react'
import { BounceLoader } from 'react-spinners'

function Spinner() {
  return (
    <div className='h-[100vh] flex justify-center items-center'>
        <BounceLoader
        size={150}
        color='#8338E1'
        />
    </div>
  )
}

export default Spinner