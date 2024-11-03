import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import Link from "@docusaurus/Link";

import Header from "@site/src/components/Header/Header";
import content from "./community.content.json";
import styles from "./styles.module.css";

export default function Community() {
  return (
    <Layout title={content.title} description={content.subhead}>
      <main className="container container--fluid margin-vert--lg">
        <Header
          metadata={{}}
          title={content.headline}
          description={content.subhead}
        />

        {content.sections.map((section) => (
          <section key={section.title} className="margin-bottom--lg">
            <Heading as="h2">{section.title}</Heading>

            <ul className={clsx("row", styles.ul)}>
              {section.channels.map((channel) => (
                <li key={channel.title} className="col margin-vert--md">
                  <article className="card">
                    <Heading as="h3" className="card__header margin--none">
                      {channel.title}
                    </Heading>

                    <div className="card__body">
                      <p>{channel.description}</p>
                    </div>

                    <div className="card__footer">
                      <Link to={channel.link.href}>{channel.link.text}</Link>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </main>
    </Layout>
  );
}
