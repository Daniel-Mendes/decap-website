import React from "react";
import { useBlogPost } from "@docusaurus/plugin-content-blog/client";
import BlogPostItemImage from "./Image";
import BlogPostItemHeaderTitle from "@theme/BlogPostItem/Header/Title";
import BlogPostItemHeaderInfo from "@theme/BlogPostItem/Header/Info";
import BlogPostItemHeaderAuthors from "@theme/BlogPostItem/Header/Authors";

export default function BlogPostItemHeader(): JSX.Element {
  const { isBlogPostPage } = useBlogPost();

  return (
    <header>
      {!isBlogPostPage && <BlogPostItemImage />}
      <BlogPostItemHeaderTitle />
      <BlogPostItemHeaderInfo />
      <BlogPostItemHeaderAuthors />
      {isBlogPostPage && <BlogPostItemImage />}
    </header>
  );
}
