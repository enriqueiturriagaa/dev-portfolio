import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Hero() {
    return (
        <div className=' max-w-5xl m-auto px-4 lg:px-0 text-center font-roboto my-20'>
            <Image className="m-auto" src="/assets/logo.png" alt="logo" width={200} height={100} />
            <h1 className='font-semibold  text-4xl md:text-6xl mt-10 mb-5'>Hey there! I’m Enrique a <span className='text-[#6683F1]'>Web Developer</span> with a background in <span className='text-[#54B197]'>UX/UI.</span></h1>
            <p className='text-xl font-normal'>So, basically you get 2 in 1, I can design and I can develop...</p>
            <div className="flex font-roboto my-10 ">
                <Link
                    href="mailto:hey@enrique.zone"
                    className="m-auto px-8 py-3 border-2 border-[#F6931A] rounded-sm md:text-base bg-[#2A2523] hover:bg-[#F6931A] text-[#F6931A] hover:text-[#343434] transition-all flex items-center drop-shadow-gold-glow hover:drop-shadow-gold-glow-hover "
                ><p className="text-s md:text-xl font-semibold ">Contact Me!</p></Link>
            </div>
            <div className='relative '>
                <p className='inline-block text-[#F6931A]/50 text-sm'>Current Location: Playa Guiones 🏝️, CR 08:00 AM CST (in office till 6</p>
                <div className='inline-block relative ml-2'>
                    <span className="flex h-3 w-3 ">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#54B197]/40 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-[#54B197]/50"></span>
                    </span>
                </div>
                <p className='inline-block text-[#F6931A]/50 text-sm'>)</p>
            </div>
        </div>
    )
}

export default Hero