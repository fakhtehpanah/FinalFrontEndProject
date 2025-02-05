import { ImageView } from '@/components/common'
import React from 'react'

export function SearchForm() {

  return (
    <div className='hidden lg:flex'>
        <form action="#" name='search-form'  method='post' className='flex items-center'>
            <input type="text" name='search_text' placeholder='Search for items' className='py-2 px-20 rounded-md border border-[#BCE3C9] focus:outline-none font-thin' />
            <button className='bg-red-300 absolute mx-80'>
                <ImageView src={'/fi-rs-search.svg'}  alt='search' width={20} height={20}/>
            </button>        
          </form>
    </div>
  )
}

