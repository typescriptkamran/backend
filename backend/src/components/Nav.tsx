'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import {signIn, signOut, useSession, getProviders} from 'next-auth/react'
import { Button } from './ui/button'

const Nav = () => {
  let isUserLoggedIn = true
  return (
    <nav className='flex justify-between w-full items-center '>

      <Link href="/" className='flex  gap-3 md:gap-5'>
        <Image src="/images/logo.svg"
        alt='logo'
        width={50}
        height={50} />
        <p className='logo-text'>protopia</p>
      
      </Link>
      

      {/* mobile navigation */}
      <div className='flex gap-3 '>
        {isUserLoggedIn ?
        (<div className='flex gap-3'>

          <Link href="/create-prompt" className='bg-black rounded-lg border-2 py-2 px-3 text-slate-200 '>create post</Link>
          
          
          <Button onClick={signOut}>signOut</Button>

        </div>
        
        )
        :
        (<>

        </>) 
        }
      </div>
      

    </nav>
  )
}

export default Nav