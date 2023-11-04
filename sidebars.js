/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {

  mainSidebar: [
    {
      type: 'category',
      label: 'Diva Staking',
      collapsible: true,
      link: { type: 'doc', id: 'home' },
      items: [
      'intro',
      'participants',
      'features',
      'lst',
      'roadmap',
      'dvt'
      ],
    },

    {
      type: 'category',
      label: 'Comparisons',
      collapsible: true,
      link: { type: 'doc', id: 'comparison' },
      items: [
      'solo-staking',
      'lido',
      'rocketpool',
      'exchanges',
      'obol-ssv',
      'trilemma'
      ],
    },
      
    {
      type: 'category',
      label: 'Diva Operators',
      link: { type: 'doc', id: 'operators' },
      collapsible: true,
      items: [ 'economics', 'install', 'validator_migrations' ]
    },

    {
      type: 'category',
      label: 'Diva DAO',
      collapsible: true,
      link: { type: 'doc', id: 'dao' },
      items: [
        'delegates',
        'proposals',
        'distribution',
      ]

    },
    'early_stakers',
    {
      type: 'category',
      label: 'Links & resources',
      collapsible: true,
      link: { type: 'doc', id: 'resources' },
      items: [
        'about',
        'shamir',
        'foundation',
        'contributing'
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      collapsible: true,
      items: ['staking-rewards','components','glossary'],
    },
  ],
  
};

module.exports = sidebars;
