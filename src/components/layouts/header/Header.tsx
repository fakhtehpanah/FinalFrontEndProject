import React from 'react'
import Cart from '/Users/fakhtehpanah/Desktop/Programming projects/shop next/my-app/public/01 align center.svg'
import User from '/public/fi-rs-user.svg'
import menu from '/public/menu.svg'
// import Headset from "/Users/fakhtehpanah/Desktop/Programming projects/shop next/my-app/public/fi-rs-headset 1.svg";

import Headset from "/Users/fakhtehpanah/Desktop/Programming projects/shop next/my-app/public/fi-rs-headset 1.svg";
import Apps from '/Users/fakhtehpanah/Desktop/Programming projects/shop next/my-app/public/fi-rs-apps.svg'
import Search from '/Users/fakhtehpanah/Desktop//Programming projects/shop next/my-app/public/fi-rs-search.svg'
import Flame from '/Users/fakhtehpanah/Desktop/Programming projects/shop next/my-app/public/fi-rs-flame 1.svg'
import { IconBox, ImageView, Logo } from '@/components/common'
import Link from 'next/link'
import { SearchForm } from './search-form'
import { Menu } from './menu';
export function Header() {
  return (
    <header>
        <div className='border-b flex justify-between py-5 items-center px-6'>
            <Logo />
            <SearchForm/>
            <div className='lg:hidden'>
                <ImageView src={menu} alt='menu'/>
                <Menu/>
            </div>
            <ul className='hidden lg:flex p-6'>
                <Link href="/account">
                     <li className='flex mx-1 cursor-pointer gap-1'>
                        <ImageView src={User} alt='user'/>
                        <div className='font-thin'>Account</div>
                    </li>
                </Link>
                <Link href="/cart">
                    <li className='flex mx-1 cursor-pointer gap-1'>
                        <ImageView src={Cart} alt='cart'/>
                        <div className='font-thin'>Cart</div>
                    </li>
                </Link>
            </ul>
        </div>
        <div className='flex justify-between border-b px-6 py-8 lg:hidden'>
            <button>
                <ImageView src={'/fi-rs-search.svg'}  alt='search' width={20} height={20}/>
            </button>
            <ul className='flex gap-2'>
                <Link href={"/account"}>
                    <li>
                        <ImageView src={User} alt='user'/>
                    </li>
                </Link>
                <Link href={"/cart"}>  
                    <li>
                        <ImageView src={Cart} alt='cart'/>
                    </li>
                </Link>
            </ul>
        </div>  
        <div className='hidden lg:flex justify-between px-6 py-2 items-center border-b'>
            <div>
                <div className='bg-[#3BB77E] p-4 text-white rounded flex gap-3'>
                    <ImageView src={Apps}/>
                   <p>browse all categories</p>
                </div>
            </div>     
            <div>
                <ul className='flex gap-6'>
                    <Link href={'/'}>
                    <li className='flex gap-1'>
                        <ImageView src={Flame}/>
                        <p>Hot Deals</p>
                    </li>
                    </Link>
                    <Link href={'/'}>
                        <li>Home</li>
                    </Link>
                    <Link href={'/'}>
                        <li>Vegetables</li>
                    </Link>
                    <Link href={'/drink'}>
                        <li>Drink</li>
                    </Link>
                </ul>
            </div> 
            <div className='flex p-2'>
                <ImageView src={Headset} alt='' className='mx-2'/>
                <div className='px-3'>
                    <p className='text-[#3BB77E]'>1900 - 8888</p>
                    <p className='font-thin'>24/7 Support Center</p>
                </div>
            </div>
        </div>
    </header>
  )
}

