'use client'
import { useHomeContext } from '@/context/HomeContext'
import React, { useEffect } from 'react'

function page() {
    const {saveTransaction} = useHomeContext()
    useEffect(()=>{
        
        saveTransaction('transactions','success')
    },[])

    return (
      <div className='flex min-h-screen w-full justify-center items-center'>
        <div>
          <p>payment success</p>
          <p>redirecting to transactionss page</p>
          </div> 
      </div>
    )
}

export default page
