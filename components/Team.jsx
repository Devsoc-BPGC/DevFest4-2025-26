'use client'

import Image from 'next/image'
import BlurText from '@/components/BlurText'
import Coordi from '@/components/Coordinators'

const Team = () => {
  return (
    <section id='team' className='relative min-h-screen px-6 pt-32 pb-32'>
      {/* effects */}
      <div className='absolute inset-0 overflow-hidden -z-20'>
        <div className='h-full w-full bg-gray-950 overflow-hidden'>
          <div className='relative h-full w-full overflow-hidden bg-gray-900/40 px-8 py-12 backdrop-blur-xl flex items-center justify-center'>
            <div className='absolute -top-24 -left-24 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl'></div>
            <div className='absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl'></div>
          </div>
        </div>
      </div>

      {/* title */}
      <div className='relative z-10 w-full max-w-7xl mx-auto flex flex-col'>
        <BlurText
          text='The Team'
          delay={80}
          animateBy='letters'
          direction='top'
          className='text-white font-bold text-3xl md:text-4xl lg:text-5xl mb-10'
        />

        {/* content (placeholder image idk) */}
        <div className='mx-auto relative w-full max-w-7xl rounded-3xl border border-white/25 bg-white/5 backdrop-blur-2xl shadow-[0_18px_60px_rgba(0,0,0,0.75)] p-4 md:p-6 lg:p-8'>
          {/* Container with fixed height */}
          <div className='relative w-full h-[60vh] rounded-2xl overflow-hidden'>
            <Image
              src='/team.jpeg'
              alt='DevFest Team'
              fill
              className='object-cover rounded-2xl'
              sizes='100vw'
            />
          </div>
        </div>
        {/* coco section */}
        <Coordi />
      </div>
    </section>
  )
}

export default Team
