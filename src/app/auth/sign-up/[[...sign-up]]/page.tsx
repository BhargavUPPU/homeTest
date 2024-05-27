import { SignUp } from '@clerk/nextjs'
import React from 'react'

export default function page() {
  return (
    <>
    <div className="max-w-sm mx-auto mt-6">
        <SignUp/>
    </div>
    </>
  )
}
