import Link from 'next/link'
import React from 'react'

function CTA() {
    return (
        <div className=' max-w-5xl m-auto px-4 lg:px-0 py-20 font-roboto text-center'>
            <h2 className='font-bold text-3xl mb-4'>Let’s get started!</h2>
            <p className='text-lg'>Just send me a quick email to open up the conversation</p>
            <div className='flex mt-5'>

                <Link
                    href="mailto:hey@enrique.zone"
                    className=" m-auto  px-6 py-2 border-2 border-[#F6931A] rounded-sm md:text-base bg-[#2A2523] hover:bg-[#F6931A] text-[#F6931A] hover:text-[#343434] transition-all flex items-center drop-shadow-gold-glow hover:drop-shadow-gold-glow-hover "
                ><p className="text-s md:text-l ">hey@enrique.zone</p></Link>
            </div>
        </div>
    )
}

export default CTA