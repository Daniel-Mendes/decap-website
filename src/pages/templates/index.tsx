import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import IconExternalLink from "@theme/Icon/ExternalLink";

import content from "./templates.content.json";
import styles from "./styles.module.css";
import Header from "@site/src/components/Header/Header";

type TemplateCardProps = {
  title: string;
  type: string;
  tools: string[];
  image: string;
  links: { demo_url?: string; source_url: string; docs_url?: string };
};

function TemplateCard({ title, type, image, tools, links }: TemplateCardProps) {
  return (
    <article className={clsx("card padding--sm", styles.template)}>
      {image && (
        <div className="card__header">
          <img src={image} className={styles.templateImage} />
        </div>
      )}

      <div className="card__body">
        {/* <span className="text--primary">{type}</span> */}
        <Heading
          as="h2"
          title={title}
          className={clsx("text--black", styles.title)}
        >
          {title}
        </Heading>
        <ul className={styles.tools}>
          {tools.map((tool) => (
            <li key={tool} className="badge badge--secondary">
              {tool}
            </li>
          ))}
        </ul>
      </div>

      <div className={clsx("card__footer", styles.links)}>
        <Link to={links.source_url}>
          Code Source <IconExternalLink />
        </Link>
        {links.demo_url && (
          <Link to={links.demo_url}>
            View Demo <IconExternalLink />
          </Link>
        )}
        {links.docs_url && (
          <Link to={links.docs_url}>
            Read more <IconExternalLink />
          </Link>
        )}
      </div>
    </article>
  );
}

export default function Templates(): JSX.Element {
  return (
    <Layout title={content.title} description={content.subhead}>
      <main className="container container--fluid margin-vert--lg">
        <Header title={content.headline} description={content.subhead} />

        <section className={styles.templates}>
          {content.templates.map((template) => (
            <TemplateCard key={template.title} {...template} />
          ))}
        </section>
      </main>
    </Layout>
  );
}
