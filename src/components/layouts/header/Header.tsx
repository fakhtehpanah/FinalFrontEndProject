import React from 'react'
import Cart from '/Users/fakhtehpanah/Desktop/Programming projects/shop next/my-app/public/01 align center.svg'
import User from '/public/fi-rs-user.svg'
import Logo from '/public/Logo.svg'
import Menu from '/public/menu.svg'
import Search from '/Users/fakhtehpanah/Desktop/Programming projects/shop next/my-app/public/fi-rs-search.svg'
import { ImageView } from '@/components/common'
import Link from 'next/link'
export function Header() {
  return (
    <header className='bg-green-100'>
        <div className='border-b flex justify-between py-8 px-6'>
            <div>
                <ImageView src={Logo} alt='logo' width={242} height={66} className='w-[117px] lg:w-[242px]'/>
            </div>
            <div className=' hidden lg:flex'>
                    <form action="#" name='search-form' method='post' className='flex items-center'>
                        <input type="text" name='search_text' placeholder='Search for items' className='py-2 px-20 rounded-md focus:outline-none font-thin' />
                        <button>click</button>
                    </form>
            </div>
            <div className='lg:hidden'>
                <ImageView src={Menu} alt='menu'/>
            </div>
            <ul className='hidden lg:flex p-6'>
                <Link href="/account">
                     <li className='flex mx-1 cursor-pointer'>
                        <ImageView src={User} alt='user'/>
                        <div className='font-thin mx-1'>Account</div>
                    </li>
                </Link>
                <Link href="/cart">
                    <li className='flex mx-1 cursor-pointer'>
                        <ImageView src={Cart} alt='cart'/>
                        <div className='font-thin mx-1'>Cart</div>
                    </li>
                </Link>
            </ul>
        </div>
        <div className='flex justify-between border-b px-6 py-8 lg:hidden'>
            <div>
                <ImageView src={Search} alt='search'/>
            </div>
            <ul className='flex'>
                <Link href={"/account"}>
                    <li className='mx-2'>
                        <ImageView src={User} alt='user'/>
                    </li>
                </Link>
                <Link href={"/cart"}>  
                    <li className='mx-2'>
                        <ImageView src={Cart} alt='cart'/>
                    </li>
                </Link>
            </ul>
        </div>  
        <div className='hidden lg:flex justify-between px-6 py-10'>
            <div>browse all categories</div>     
            <div>
                <ul className='flex'>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            </div> 
            <div>numbers</div>
        </div>
    </header>
  )
}

