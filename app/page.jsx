import React from "react";
import { builder } from "@builder.io/sdk";
import Head from "next/head";
import { RenderBuilderContent } from "@/components/builder";

// Replace with your Public API Key
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

export default async function Page(props) {
  const homepageContent = await builder
    .get('homepage', {
      prerender: false,
    })
    .toPromise();

  return (
    <>
      <Head>
        <title>{content?.data.title}</title>
      </Head>
      {/* Render the Builder page */}
      <RenderBuilderContent 
        model="homepage" 
        content={homepageContent} />
    </>
  );
}
