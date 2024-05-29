import React from 'react'
import { SignIn, SignInButton,SignedOut } from '@clerk/nextjs'

export default function page() {
  return (
    <> 
     <div className="max-w-sm mx-auto mt-6">
        <SignIn/>
    </div>
    </>
  )
}

