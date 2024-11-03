import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import postCssPlugin from "./plugins/postCssPlugin";

import blog from "./_data/blog.json";
import changelog from "./_data/changelog.json";

const config: Config = {
  title: "Decap CMS",
  tagline: "Open source content management for your Git workflow",
  favicon: "img/favicon/favicon.ico",

  // Set the production url of your site here
  url: "https://decap-docusaurus.netlify.app",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  organizationName: "decaporg",
  projectName: "decap-website",

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  onDuplicateRoutes: "throw",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: "https://decap-docusaurus.netlify.app/admin/#/collections/",
        },
        blog: {
          blogTitle: blog.headline,
          blogDescription: blog.subhead,
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          editUrl: "https://decap-docusaurus.netlify.app/admin/#/collections/",
          authorsMapPath: "../_data/authors.json",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-content-blog",
      {
        id: "changelog",
        routeBasePath: "changelog",
        path: "./changelog",
        blogTitle: changelog.headline,
        blogDescription: changelog.subhead,
        blogSidebarCount: 0,
        blogSidebarTitle: "All posts",
        authorsMapPath: "../_data/authors.json",
        onUntruncatedBlogPosts: "ignore",
      },
    ],
    postCssPlugin,
  ],

  themeConfig: {
    image: "img/decap-social-card.jpg",
    navbar: {
      title: "Decap",
      logo: {
        alt: "Decap Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "docs",
          position: "left",
          label: "Docs",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          type: "dropdown",
          label: "Product",
          position: "left",
          items: [
            // {
            //   label: "Features",
            //   to: "/features",
            // },
            // {
            //   label: "Use Cases",
            //   to: "/use-cases",
            // },
            // {
            //   label: "Comparison",
            //   to: "/comparison",
            // },
            {
              label: "Product Updates",
              to: "/changelog",
            },
          ],
        },
        {
          type: "dropdown",
          label: "Developers",
          position: "left",
          items: [
            {
              to: "/docs/category/guides",
              label: "Guides",
            },
            { to: "/templates", label: "Templates" },
            {
              to: "/docs/reference/configuration",
              label: "Config Reference",
            },
            {
              label: "Roadmap",
              href: "https://github.com/orgs/decaporg/projects/2",
            },
          ],
        },
        {
          type: "dropdown",
          label: "Community",
          position: "left",
          items: [
            {
              label: "Hire an Expert",
              to: "/enterprise",
            },
            {
              label: "Contributing",
              to: "/community",
            },
            {
              label: "Discord",
              href: "https://decapcms.org/chat",
            },
            {
              label: "GitHub Discussions",
              href: "https://github.com/decaporg/decap-cms/discussions",
            },
            {
              label: "Twitter",
              href: "https://x.com/Decap_CMS",
            },
          ],
        },
        {
          type: "docSidebar",
          sidebarId: "docs",
          label: "Get Started",
          position: "right",
          className: "button button--primary button--md",
        },
      ],
    },
    footer: {
      logo: {
        alt: "Decap Logo",
        src: "img/decap-logo.svg",
        width: 150,
      },
      links: [
        {
          title: "Product",
          items: [
            // {
            //   label: "Features",
            //   href: "/features",
            // },
            // {
            //   label: "Use Cases",
            //   href: "/use-cases",
            // },
            // {
            //   label: "Comparison",
            //   to: "/comparison",
            // },
            {
              label: "Blog",
              href: "/blog",
            },
            {
              label: "Product Updates",
              to: "/changelog",
            },
          ],
        },
        {
          title: "Developers",
          items: [
            {
              to: "/docs/getting-started/introduction",
              label: "Documentation",
            },
            {
              to: "/docs/category/guides",
              label: "Guides",
            },
            { label: "Templates", to: "/templates" },
            {
              to: "/docs/reference/configuration",
              label: "Config Reference",
            },
            {
              label: "Roadmap",
              href: "https://github.com/orgs/decaporg/projects/2",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Hire an Expert",
              to: "/enterprise",
            },
            {
              label: "Contributing",
              to: "/community",
            },
            {
              label: "Discord",
              href: "https://decapcms.org/chat",
            },
            {
              label: "GitHub Discussions",
              href: "https://github.com/decaporg/decap-cms/discussions",
            },
            {
              label: "Twitter",
              href: "https://x.com/Decap_CMS",
            },
          ],
        },
      ],
      copyright: `Maintained with care by <a href="https://techhub.p-m.si/" target="_blank">PM TechHub</a> and amazing contributors.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    algolia: {
      appId: "633NBL2XMU",
      apiKey: "2e154688e9f443d6d895c9f226f01833",
      indexName: "decapcms",
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
