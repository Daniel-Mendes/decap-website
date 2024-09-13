import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Plugins from '../components/plugins';

function PluginsPage({ data }) {
  const { title, headline, subhead, categories } =
    data.markdownRemark.frontmatter;

  return (
    <Layout hasPageHero>
      <Helmet title={title} />
      <Plugins headline={headline} subhead={subhead} categories={categories} />
    </Layout>
  );
}

export const pageQuery = graphql`
  query pluginsPage {
    markdownRemark(fileAbsolutePath: { regex: "/plugins/" }) {
      frontmatter {
        title
        headline
        subhead
        categories {
          name
          slug
          plugins {
            name
            title
            slug
            description
            image
            npmUrl
            repoUrl
            homepageUrl
            downloads
            official
          }
        }
      }
    }
  }
`;

export default PluginsPage;
