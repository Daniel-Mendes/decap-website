import Heading from "@theme/Heading";

import type { BlogPaginatedMetadata } from "@docusaurus/plugin-content-blog";

type Props = {
  readonly metadata: BlogPaginatedMetadata;
};

export default function BlogListHeader({ metadata }: Props) {
  const { blogTitle, blogDescription } = metadata;

  return (
    <header className="margin-bottom--lg">
      <Heading as="h1" dangerouslySetInnerHTML={{ __html: blogTitle }} />
      <p>{blogDescription}</p>
    </header>
  );
}
