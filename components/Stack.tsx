import React from 'react'
import Image from 'next/image';
import urlFor from '../lib/urlFor';


type Props = {
    categories: Category[];
}

function Stack({ categories }: Props) {
    return (
        <div className='mx-0 w-full px-0 py-10 my-20 text-center bg-gradient-to-r-lg from-indigo-800 to-indigo-900 border-y-2 border-[#2E2E2E] font-roboto'>
            <div className='my-10'>
                <h2 className='font-bold text-3xl mb-8 text-[#F6931A]'>Stack and Tech I use and Love!</h2>
                <div className='max-w-5xl m-auto px-4 lg:px-0 grid gap-4 grid-cols-3 md:grid-cols-6 md:grid-rows-2 grid-rows-3 items-center '>
                    {categories.map((category) => (
                        <div key={category._id} className='items-center m-auto'>
                            <Image
                                className='p-0 m-0 rounded-sm mb-4'
                                src={urlFor(category.image).url()}
                                alt={category.title}
                                width={100}
                                height={100}
                            />

                        </div>))
                    }
                </div>
            </div>
        </div>
    )
}

export default Stack