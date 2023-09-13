"use client"
import React from 'react'
import useStore from '../hooks/useStore';

function DownloadInvoice() {
  const products = useStore((state) => state.products);
  const subtotal = products.reduce((acc, curr) => Number(acc) + Number(curr.total), 0)
  console.log(products)
  const tva = 2800.00
  return (
    <section className=''>
      <h2 className='text-center text-3xl font-bold pt-4'>Your Invoice</h2>
      {/* First section */}
      <div className="p-9">
        <div className="flex justify-between items-center py-2">
          <div className="">
            <h4 className='text-lg font-bold'>Invoice No <span className='text-gray-500'>#I909112</span></h4>
            <p className='text-sm font-bold'>Date :<span className='text-gray-400'> 07/09/2022</span></p>
          </div>
          <div className="">
            <h2 className='text-4xl font-bold'>Logo</h2>
          </div>
          <div className="text-gray-400 text-[16px]">
            <p>1474 Avenue Kwame</p>
            <p>NKRUMAH 10 BP 13395</p>
            <p>10 Ouagadougou, Burkina Faso</p>
            <p>finance@lizetransport.com</p>
            <p>+1 (226) 50 272383</p>
          </div>
        </div>
        <hr />
        {/* Second Section */}
        <div className="flex justify-between items-center pt-3">
          <h2 className='text-gray-800 font-semibold'>Invoice To:</h2>
          <div className=""></div>
        </div>
        <div className="flex justify-between items-center pb-3">
          <div className="text-gray-400 text-[16px]">
            <p>John Doe</p>
            <p>Lize Transport Organization</p>
            <p>+1 (226) 50 272383</p>
          </div>
          <div className="text-gray-400 text-[16px]">
            <p>1474 Avenue Kwame, </p>
            <p>NKRUMAH 10 BP 13395</p>
            <p>10 Ouagadougou, Burkina Faso</p>
            <p>finance@lizetransport.com</p>
          </div>
        </div>

        <div className="">
          <hr />
          <hr />
          <div className="flex justify-between items-center text-gray-900 font-semibold py-2">
            <p>Products:</p>
            <p>Description:</p>
            <p>Reservation:</p>
            <p>Trip:</p>
            <p>Total:</p>
          </div>
          <hr />
          <hr />
          {
            products.map(({ product_type, product, description, total }, i) => (
              <div key={i} className="flex justify-between items-center py-2">
                <p>{product_type}</p>
                <p>{description}</p>
                <p>t22f</p>
                <p>{product}</p>
                <p>{total}</p>
              </div>
            ))
          }
        </div>
      <hr />
      <div className="flex flex-col justify-end font-semibold items-end py-2">
        <div className="flex justify-between">
          <p>Subtotal : <span className='pl-3 text-gray-500'>{subtotal}.00</span></p>
        </div>
        <div className="flex justify-between">
          <p className=''>TVA : <span className='pl-3 text-gray-500'>{tva}</span></p>
        </div>
      </div>
        <hr />
        <div className="flex justify-end py-2">
          <p className='font-bold text-blue-700'>Total : <span className=''>{subtotal + tva}</span></p>
        </div>
        <hr />
      </div>
    </section>
  )
}

export default DownloadInvoice;