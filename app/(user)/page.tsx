import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";
import PreviewSuspense from "../../components/PreviewSuspense";
import PreviewBlogList from "../../components/PreviewBlogList";
import BlogList from "../../components/BlogList";
import RightPannel from "../../components/RightPannel";
import Hero from "../../components/Hero";
import SpinnerMobile from "../../components/SpinnerMobile";
import Experience from "../../components/Experience";
import Stack from "../../components/Stack";
import CTA from "../../components/CTA";


const query = groq`
    *[_type == "post"] {
        ...,
        liveLink,
        codelink,
        author->,
        categories[]->
        
    } | order(_updatedAt desc)
    
`;


const query2 = groq`
    *[_type == "category"]{
  ...,
  _id,
  _type,
  title,
  slug,
  image,
}`
const expQuery = groq`
*[_type == "experience"] {
    ...,
    title,
    description,
    time,
    tech
    
} | order(_publishedAt desc)

`;

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
    const experiences = await client.fetch(expQuery);


    return (
        <div className=" ">
            <Hero />
            <SpinnerMobile />
            <div className="w-full lg:px-0"><BlogList posts={posts} /></div>
            <Experience experiences={experiences} />
            <Stack categories={categories} />
            <CTA />


        </div>
    );
}