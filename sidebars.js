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
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],


  mainSidebar: [
    {
      type: 'category',
      label: 'General',
      collapsible: true,
      items: ['introduction',
      'participants',
      'features',
      'lsd', /* this is linked from the homepage. change to lsd later. check for inside links */
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
    /*
    {
      type: 'category',
      label: 'Staking Guide',
      collapsible: true,
      items: [   
        'staker_guide',
        'staker_faq',
        'analytics',
        ],
    },
    */
      
    {
      type: 'category',
      label: 'Operator Guide',
      collapsible: true,
      items: [ 'operators' ]

    },
    /*
    {
      type: 'category',
      label: 'Staking Economics',
      collapsible: true,
      items: [ 'econ_rewards','econ_entities' ]
      ,
    },*/
    {
      type: 'category',
      label: 'Coming soon...',
      collapsible: true,
      items:  [ 'analytics', 'security','audits','deployed' ]
      ,
    },
    {
      type: 'category',
      label: 'Reference',
      collapsible: true,
      items: [ 'components','glossary'/*,'tech-ent','dkg'*/],
    },
  ],
  developerSidebar: [
    {
      type: 'category',
      label: 'Contracts',
      collapsible: true,
      items: [ 'divacon','divaoraclecon'],
    },
  ],



};

module.exports = sidebars;
