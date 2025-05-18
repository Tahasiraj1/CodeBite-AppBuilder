import BuildAndLaunch from '@/components/BuildAndLaunch'
import Hero from '@/components/Hero'
import Laptop from '@/components/Laptop'
import Launch from '@/components/Launch'
import Other1 from '@/components/Other1'
import Other2 from '@/components/Other2'
import Other3 from '@/components/Other3'
import Partners from '@/components/Partners'
import React from 'react'

const page = () => {
  return (
    <div className='overflow-x-clip'>
      <Hero />
      <Laptop />
      <BuildAndLaunch />
      <Partners />
      <Other1 />
      <Other2 />
      <Other3 />
      <Launch />
    </div>
  )
}

export default page
