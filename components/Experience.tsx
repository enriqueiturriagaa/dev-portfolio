import React from 'react'


type Props = {
    experiences: Experience[];
}

function Experience({ experiences }: Props) {

    return (
        <div className='max-w-5xl m-auto px-4 lg:px-0 py-20 font-roboto'>
            <h2 className='font-bold text-3xl mb-8'>Experience</h2>
            {experiences.map((experience) => (
                <div className='bg-gradient-to-r-lg from-indigo-800 to-indigo-900 shadow-lg rounded-sm'>
                    <div className=' rounded-sm p-10 lg:flex lg:space-x-10 bg-gradient-to-r from-orange-500 to-black'>
                        {/* Left */}
                        <div className='mb-5 lg-mb-0'>
                            <h1 className='font-semibold text-xl mt-0 leading-none mb-1'>{experience.title}</h1>
                            <p className='mb-3'>{experience.time}</p>
                            <p className='text-sm text-[#DADADA]'>{experience.summary}</p>
                        </div>
                        {/* Right */}
                        <div>
                            <div className='flex items-center mb-3'>
                                <h3 className='text-base'>Stack</h3>
                                <div className='bg-[#F6931A] grow h-[2px] mx-3'></div>
                            </div>
                            <p className='text-sm text-[#DADADA]'>{experience.tech}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Experience