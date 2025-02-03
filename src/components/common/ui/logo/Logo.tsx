import React from 'react'
import Link from 'next/link'
import { ImageView } from '../../image-view/ImageView'


export function Logo () {
  return (
    <div>
        <Link href={'/'}>
          <ImageView src={'/Logo.svg'} alt='logo' width={242} height={66} className='w-[117px] lg:w-[242px]'/>
        </Link>
    </div>
  )
}

