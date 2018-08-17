module.exports = {
  title: 'T251 - Fall 2018',
  description: 'Music Theory and Literature III',
  themeConfig: {
    algolia: {
      appId: 'VJIBPRX7TQ',
      apiKey: '4e28485e489ac23796659ce3077ccc68',
      indexName: 'T251',
      algoliaOptions: {
        hitsPerPage: 6,
      }
    },

    sidebar: [
      ['/', 'Syllabus'],
      {
        title: 'Unit 1',
        collapsable: false,
        children: [
          ['/unit-1/', 'Materials'],
          '/unit-1/w1',
//        '/unit-1/w2',
//        '/unit-1/w3',
        ]
      },
//     {
//        title: 'Unit 2'
//      },
//      {
//        title: 'Unit 3'
//      },
    ]
  }
}
