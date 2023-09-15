"use client"

import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";

function DownloadInvoiceLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    const [isMount,setIsMount]=useState(false)
  
  useEffect(()=>{
    setIsMount(true)
  },[])
  if(!isMount) return <Spinner/>
  return (
    <>
    {
        children
    }
    </>
  )
}

export default DownloadInvoiceLayout