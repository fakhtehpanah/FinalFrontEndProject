import React from 'react'
import {Footer} from './footer'
import { Header } from './header'

interface Props {
    children: React.ReactNode
}
export function Layouts({children}: Props) {
  return (
    <div>
        <Header/>
        <main>{children}</main>
        <Footer/>
    </div>
  )
}

