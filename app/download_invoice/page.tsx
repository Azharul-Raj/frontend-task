"use client"
import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import useStore from '../hooks/useStore';
import { useRouter } from 'next/navigation';

function DownloadInvoice() {
  const router=useRouter()
  const pdfRef=useRef(null)
  const products = useStore((state) => state.products);
  if(!products.length){
    console.log('here')
    return router.push('/invoices')
  }
  const subtotal = products.reduce((acc, curr) => Number(acc) + parseFloat(curr.total), 0)
  const downloadPDF=()=>{
    const page=pdfRef.current;
    if(page){
      html2canvas(page).then((canvas)=>{
        const imageData=  canvas.toDataURL('image/png');
        const pdf=new jsPDF('p','mm','a4',true);
        const pdfWidth=pdf.internal.pageSize.getWidth();
        const pdfHeight=pdf.internal.pageSize.getHeight();
        const imgWidth=canvas.width;
        const imgHeight=canvas.height;
        const ratio=Math.min(pdfWidth/imgWidth,pdfHeight/imgHeight);
        const imgX=(pdfWidth-imgWidth*ratio)/2;
        const imgY=30;
        pdf.addImage(imageData,'PNG',imgX,imgY,imgWidth*ratio,imgHeight*ratio);
        pdf.save('Invoice.pdf')
      })

    }
  }
  const tva = 2800.00
  return (
    <section className=''>
      <h2 className='text-center text-3xl font-bold pt-4'>Your Invoice</h2>
      {/* First section */}
      <div ref={pdfRef} className="p-2 md:p-9">
        <div className="flex justify-between items-center py-2">
          <div className="">
            <h4 className='text-lg font-bold'>Invoice No <span className='text-gray-500'>#I909112</span></h4>
            <p className='text-sm font-bold'>Date :<span className='text-gray-400'> 07/09/2022</span></p>
          </div>
          <div className="hidden md:block">
            <h2 className='text-4xl font-bold'>Logo</h2>
          </div>
          <div className="text-gray-400 text-sm md:text-lg">
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
          <div className="text-gray-400 text-sm md:text-lg">
            <p>John Doe</p>
            <p>Lize Transport Organization</p>
            <p>+1 (226) 50 272383</p>
          </div>
          <div className="text-gray-400 text-sm md:text-lg">
            <p>1474 Avenue Kwame, </p>
            <p>NKRUMAH 10 BP 13395</p>
            <p>10 Ouagadougou, Burkina Faso</p>
            <p>finance@lizetransport.com</p>
          </div>
        </div>

        <div className="">
          <hr />
          <hr />
          <div className="flex justify-between items-center text-gray-900 text-sm md:text-lg font-semibold py-2">
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
              <div key={i} className="flex justify-between items-center text-xs md:text-lg text-center py-2">
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
          <p>Subtotal : <span className='pl-3 text-gray-500'>{subtotal?subtotal:''}</span></p>
        </div>
        <div className="flex justify-between">
          <p className=''>TVA : <span className='pl-3 text-gray-500'>{tva?tva:''}</span></p>
        </div>
      </div>
        <hr />
        <div className="flex justify-end py-2">
          <p className='font-bold text-blue-700'>Total : {subtotal + tva}</p>
        </div>
        <hr />
      </div>
      <div className="text-center pb-2">
        <button onClick={downloadPDF} className='px-4 py-2 bg-blue-600 text-semibold rounded-full text-white'>Download/Print as PDF</button>
      </div>
    </section>
  )
}

export default DownloadInvoice;