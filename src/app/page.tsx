import BuildAndLaunch from '@/components/BuildAndLaunch'
import Hero from '@/components/Hero'
import Laptop from '@/components/Laptop'
import Launch from '@/components/Launch'
import Other1 from '@/components/Other1'
import Other2 from '@/components/Other2'
import Partners from '@/components/Partners'
import React from 'react'

const page = () => {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <Laptop />
      <BuildAndLaunch />
      <Partners />
      <Other1 />
      <Other2 />
      <Launch />
    </div>
  )
}

export default page
