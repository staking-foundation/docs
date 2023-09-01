// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const math = require('remark-math');
const katex = require('rehype-katex');


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Diva Staking docs – by the Staking Foundation',
  tagline: 'Diva delivers Ethereum Liquid Staking powered by Distributed Validation. Launching soon.',
  url: 'https://docs.staking.foundation',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/diva.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'diva', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
        gtag: {
          trackingID: 'G-X8QXVBR3VV',
        },
        docs: {
          breadcrumbs: false,
          remarkPlugins: [math],
          rehypePlugins: [katex],
          sidebarPath: require.resolve('./sidebars.js'),
          // path: "docs",
          routeBasePath: "/",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: false,
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },

      metadata: [
        { name: 'og:image', content: 'https://diva.community/metalogo.png' },
        { name: 'twitter:image', content: 'https://diva.community/metalogo.png' },
        {name: 'og:title', content: 'Ethereum Liquid Staking powered by Distributed Validators'},
        {name: 'og:description', content: 'Diva is an Ethereum Liquid Staking protocol powered by Distributed Validators.'},
        {name: 'description', content: 'Diva is an Ethereum Liquid Staking protocol powered by Distributed Validators'},
        {name: 'twitter:card', content: 'summary_large_image'},
        {name: 'twitter:url', content: 'https://docs.staking.foundation/'},
        {name: 'og:url', content: 'https://docs.staking.foundation/'},
        {name: 'twitter:title', content: 'Ethereum Liquid Staking powered by Distributed Validators'},
        {name: 'twitter:description', content: 'https://docs.staking.foundation/'}
      ],
      navbar: {
        title: 'diva',
        logo: {
          alt: '💄',
          src: 'img/diva.svg',
        },
        items: [
          { href: 'https://stake.diva.community', label: 'Try Diva testnet', position: 'right' },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Diva',
            items: [
              {
                label: 'The Staking Foundation',
                href: 'https://staking.foundation',
              },
              {
                label: 'Diva Staking Testnet',
                href: 'https://stake.diva.community',
              },
              {
                label: 'Diva Operator Install Guide',
                href: 'https://docs.shamirlabs.org/',
              },
              {
                label: 'DIVA Token: 0xbfabde619ed5c4311811cf422562709710db587d',
                href: 'https://etherscan.io/token/0xbfabde619ed5c4311811cf422562709710db587d',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/diva',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/divastaking',
              },
              {
                label: 'Medium',
                href: 'https://divastaking.medium.com',
              },
              {
                label: 'Github',
                href: 'https://github.com/staking-foundation',
              },
              {
                label: 'Tally Governance',
                href: 'https://www.tally.xyz/gov/diva',
              },
              {
                label: 'DAO Forum',
                href: 'https://commonwealth.im/divastaking/discussions',
              },
              {
                label: 'Divascan Explorer',
                href: 'https://divascan.io',
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
    }),
};


module.exports = config;
