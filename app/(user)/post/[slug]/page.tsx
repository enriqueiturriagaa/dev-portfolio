import { groq } from "next-sanity"
import RightPannel from "../../../../components/RightPannel";
import { client } from "../../../../lib/sanity.client";
import author from "../../../../schemas/author";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "../../../../components/RichTextComponents";
import ClientSideRoute from "../../../../components/ClientSideRoute";
import CTA from "../../../../components/CTA";
import { ArrowLongLeftIcon } from '@heroicons/react/24/solid';




type Props = {
    params: {
        slug: string;
    }
}



export const revalidate = 60;

export async function generateStaticParams() {
    const query = groq`
        *[_type == "post"] {
            slug
        }
    `;
    const slugs: Post[] = await client.fetch(query);
    const slugRoutes = slugs.map((slug) => slug.slug.current);
    return slugRoutes.map(slug => ({
        slug,
    }))


}


async function Post({ params: { slug } }: Props) {
    const query = groq`
        *[_type == "post" && slug.current == $slug][0] 
        {
            ...,
            author->,
            categories[]->
       
        }
    `
    const query2 = groq`
  *[_type == "category"]{
    _id,
    _type,
    title,
    slug,
    description,
    "posts": *[_type == "post" && references(^._id)]{
        title,
        slug
}
}`


    const post: Post = await client.fetch(query, { slug });
    const categories = await client.fetch(query2);


    return (
        <div className="max-w-5xl m-auto px-4 lg:px-0 font-roboto">
            <article className="w-full lg:w-2/3 m-auto lg:pr-20 min-w-[60%]">
                <div className="mb-10 text-[#F6931A] hover:underline cursor-pointer">
                    <a href='/'><ArrowLongLeftIcon className="inline w-8 hover:underline transition-all" /> All Projects</a>
                </div>
                <section>
                    <div className="mb-5">
                        <h1 className="font-roboto text-4xl">{post.title}</h1>

                        <p className="inline font-roboto text-gray-400 text-xs">Project by {post.author.name}, published on </p>
                        <p className="inline font-roboto text-gray-400 text-xs italics">
                            {new Date(post._createdAt).toLocaleDateString
                                ("en-US", {
                                    day: "numeric",
                                    month: "long",
                                    year: "numeric"
                                })}
                        </p>
                        <div className='my-2'>
                            <p className='text-xs font-light text-[#CCCCCC] inline'>Stack: </p>
                            {post.categories.map((category) => (
                                <div key={post._id} className=' inline'>
                                    <div className='inline text-sm'>{category.title} </div>
                                </div>
                            ))}
                        </div>
                        {/* Role */}
                        <div>
                            <p className='text-xs font-light text-[#CCCCCC] inline'>Role: </p>
                            <p className='font-roboto text-sm inline '>
                                {post.summary}
                            </p>

                        </div>

                    </div>
                    <div className="mb-5">
                        {/* RTE Here! */}
                        <PortableText value={post.body} components={RichTextComponents} />
                    </div>

                </section>
            </article>
            <div className="my-20 border-t-2 border-[#F6931A]"></div>
            <CTA />

        </div>
    )
}

export default Post