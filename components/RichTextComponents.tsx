import Image from 'next/image'
import Link from 'next/link'
import { ValueError } from 'sanity';
import urlFor from '../lib/urlFor';

export const RichTextComponents = {
    types: {
        // image: ({ value }: any) => {
        //     return (
        //         <div className="relative min-w-[100%] w-full h-96 my-0 mx-auto">
        //             <Image
        //                 className='object-contain min-w-[100%] lg:my-0 my-0 '
        //                 src={urlFor(value).url()}
        //                 alt="Blog Post Image"
        //                 fill
        //             />
        //         </div>
        //     );
        // }
        image: ({ value }: any) => {
            return (
                <div className="relative min-w-[100%] w-full  my-0 mx-auto object-contain">
                    {/* <Image
                        // className='object-contain min-w-[100%] lg:my-0 my-0 '
                        className='static object-contain w-full lg:my-0 my-0 py-0'
                        src={urlFor(value).url()}
                        alt="Blog Post Image"
                        fill

                    /> */}
                    <img src={urlFor(value).url()} className='static object-scale-down w-full lg:my-0 my-0 py-0' alt="Blog Post Image" />
                </div>
            );
        }
    },
    list: {
        bullet: ({ children }: any) => (
            <ul className='ml-10  py-5 list-disc space-y-5 font-roboto'>{children}</ul>
        ),
        number: ({ children }: any) => (
            <ol className='ml-10   mt-lg list-decimal font-roboto'>{children}</ol>
        ),

    },
    listItem: {
        number: ({ children }: any) => (
            <li className='py-1 mb-2 font-roboto'>{children}</li>
        ),
        bullet: ({ children }: any) => (
            <li className='py-1 mb-2 font-roboto'>{children}</li>
        ),
    },
    block: {
        h1: ({ children }: any) => (
            <h1 className='text-4xl pt-10 pb-2 font-roboto'>{children}</h1>),
        h2: ({ children }: any) => (
            <h2 className='text-3xl pt-10 pb-2 font-roboto'>{children}</h2>),
        h3: ({ children }: any) => (
            <h3 className='text-2xl pt-10 pb-2 font-roboto'>{children}</h3>),
        h4: ({ children }: any) => (
            <h4 className='text-xl pt-10 pb-2 font-roboto'>{children}</h4>),
        normal: ({ children }: any) => (
            <p className='pt-6 pb-1 font-roboto'>{children}</p>
        ),

        blockquote: ({ children }: any) => (
            <blockquote className=' py-5 mt-4 mb-8 italic border-l-4 border-[#E0F2FF] pl-5 font-roboto'>{children}</blockquote>)
    },
    marks: {
        link: ({ children, value }: any) => {
            const rel = !value.href.startsWith('/')
                ? "noreferrer noopener"
                : undefined;
            return (
                <Link href={value.href}
                    rel={rel}
                    target="_blank"
                    className='underline text-[#4D91C1] hover:text-[#27648F]font-roboto'>
                    {children}
                </Link>
            )
        }
    }
}