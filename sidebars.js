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
      label: 'General',
      collapsible: true,
      items: [
      'home',
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
      items: [
      'comparison',
      'lido',
      'rocketpool',
      'exchanges',
      'solo-staking',
      'obol-ssv'
      ],
    },
      
    {
      type: 'category',
      label: 'Diva Operators',
      collapsible: true,
      items: [ 'operators', 'economics', 'install' ]

    },

    {
      type: 'category',
      label: 'Diva DAO',
      collapsible: true,
      items: [
        'dao',
        'delegates',
        'proposals',
        'distribution',
      ]

    },
    /*
    {
      type: 'category',
      label: 'Coming soon...',
      collapsible: true,
      items:  [ 'analytics', 'security','audits','deployed' ]
      ,
    },*/
    {
      type: 'category',
      label: 'Reference',
      collapsible: true,
      items: ['staking-rewards','components','glossary'],
    },
    {
      type: 'category',
      label: 'About these docs',
      collapsible: true,
      items: ['foundation', 'contributing'],
    },
  ],
  
};

module.exports = sidebars;
