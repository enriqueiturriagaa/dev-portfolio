import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";
import PreviewSuspense from "../../components/PreviewSuspense";
import PreviewBlogList from "../../components/PreviewBlogList";
import BlogList from "../../components/BlogList";
import RightPannel from "../../components/RightPannel";
import Hero from "../../components/Hero";


const query = groq`
    *[_type == "post"] {
        ...,
        author->,
        categories[]->
        
    } | order(_createdAt desc)
    
`;


const query2 = groq`
    *[_type == "category"]{
  _id,
  _type,
  title,
  slug,
  "posts": *[_type == "post" && references(^._id)]{
    title,
    slug
  }
}`


export const revalidate = 60;

export default async function HomePage() {

    if (previewData()) {
        return (<PreviewSuspense fallback={
            <div role="status">
                <p className="text-center text-lg animate-pulse">
                    Loading Preview Data...
                </p>
            </div>
        }>
            <PreviewBlogList query={query} />
        </PreviewSuspense>)
    }

    const posts = await client.fetch(query);
    const categories = await client.fetch(query2);


    return (
        <div className=" ">
            <Hero />
            <div className="w-full lg:w-2/3  lg:pr-20 min-w-[60%] px-4 lg:px-0"><BlogList posts={posts} categories={categories} /></div>


        </div>
    );
}