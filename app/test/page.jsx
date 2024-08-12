import { CustomDataComponent } from '@/components/CustomDataProvider/CustomDataProvider'
import React from 'react'

export default function page() {
  return (
    <div className='px-16 scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-slate-700 scrollbar-track-slate-300'>
      <CustomDataComponent catId={819}/>
    </div>
  )
}
