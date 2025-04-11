import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const notFound = () => {
  return (
    <>
      <div className='h-screen flex justify-center items-center flex-col'>
        <Image 
          src='/images/404.svg' 
          alt='404'
          width={500}
          height={500}
        />
        <Link href='/'>
          <Button>
            Back to Home
          </Button>
        </Link>
      </div>
    </>
  )
}

export default notFound