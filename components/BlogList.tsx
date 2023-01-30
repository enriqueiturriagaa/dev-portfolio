import { ArrowUpRightIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';
import urlFor from '../lib/urlFor';
import ClientSideRoute from './ClientSideRoute';

type Props = {
    posts: Post[];
}

function BlogList({ posts }: Props) {
    return (
        <div className='max-w-5xl m-auto px-4 lg:px-0 font-roboto py-20 flex justify-between flex-wrap'>

            {posts.map((post) => (
                // <ClientSideRoute key={post._id} route={`/post/${post.slug.current}`}>
                <div key={post._id} className=" flex mx-auto lg:w-[32%]  md:min-w-[250px]  flex-col mb-10 group  border-2 rounded border-[#2B2B2B] bg-[#2B2B2B]/50 p-[20px] hover:drop-shadow-blue-glow transition-all">
                    <div className='grow flex flex-col space-between p-1 transition-transform duration-200 ease-out '>
                        {/* TOP */}
                        <div className='grow'>
                            <Image
                                className='p-0 m-0 rounded-sm mb-4'
                                src={urlFor(post.mainImage).url()}
                                alt={post.author.name}
                                width={400}
                                height={200}
                            />
                            <p className=' text-xl font-bold mb-2'>
                                {post.title}
                            </p>
                            <div>
                                {/* Stack */}
                                <div className='my-2'>
                                    <p className='text-xs font-light text-[#CCCCCC]'>Stack</p>
                                    {post.categories.map((category) => (
                                        <div key={post._id} className=' inline'>
                                            <div className='inline text-sm'>{category.title} </div>
                                        </div>
                                    ))}
                                </div>
                                {/* Role */}
                                <div>
                                    <p className='text-xs font-light text-[#CCCCCC]'>Role</p>
                                    <p className='font-roboto text-sm line-clamp-4 '>
                                        {post.summary}
                                    </p>

                                </div>
                            </div>

                        </div>
                        {/* Bottom */}
                        <div className='grow-0 '>
                            {/* Buttons */}
                            <div className='flex justify-between mt-6 space-x-2 '>
                                {post.liveLink === null ?
                                    <div className='w-full'>
                                        <ClientSideRoute key={post._id} route={`/post/${post.slug.current}`}>
                                            <div className="w-full	 items-center px-6 py-2 border-2 border-[#F6931A]  rounded-sm md:text-base  hover:bg-[#F6931A] text-[#F6931A] hover:text-[#343434] transition-all drop-shadow-gold-glow hover:drop-shadow-gold-glow-hover  cursor-pointer">
                                                <p className=" text-xs  mx-auto text-center font-regular ">Project</p>
                                            </div>
                                        </ClientSideRoute>
                                    </div>
                                    : <Link
                                        href={`${post.liveLink}`}
                                        className="w-full items-center px-6 py-2 border-2 border-[#F6931A]  rounded-sm md:text-base  hover:bg-[#F6931A] text-[#F6931A] hover:text-[#343434] transition-all drop-shadow-gold-glow hover:drop-shadow-gold-glow-hover "
                                        target={'_blank'}
                                    ><p className=" text-xs  mx-auto text-center font-regular ">Site</p></Link>}
                                {post.codeLink ?
                                    // <div className='w-full'>Comming soon</div>
                                    <Link
                                        href={`${post.codeLink}`}
                                        className="w-full items-center px-6 py-2 border-2 border-[#6683F1] rounded-sm md:text-base  hover:bg-[#6683F1] text-[#6683F1] hover:text-[#343434] transition-all drop-shadow-gold-glow hover:drop-shadow-gold-glow-hover "
                                        target={'_blank'}
                                    ><p className=" text-xs  mx-auto text-center font-regular">Code</p></Link>
                                    :
                                    null
                                }
                            </div>
                        </div>
                    </div>
                </div>

                // </ClientSideRoute>
            ))}
            <p className='text-[#CCCCCC] inline-block mx-auto'>This is just a small sample of my projects...</p>
        </div>
    )
}

export default BlogList