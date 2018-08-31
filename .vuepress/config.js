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
      ['/syllabus', 'Syllabus'],
      {
        title: 'Unit 1',
        collapsable: false,
        children: [
          ['/unit-1/', 'Materials'],
          '/unit-1/w1',
          '/unit-1/w2',
          '/unit-1/w3',
//        '/unit-1/w4',
//        '/unit-1/w5',
        ]
      },
//     {
//        title: 'Unit 2'
//        children: [
//          ['/unit-2/', 'Materials'],
//          '/unit-2/w6',
//          '/unit-2/w7',
//          '/unit-2/w8',
//          '/unit-2/w9',
//          '/unit-2/w10',
//        ],
//      },
//      {
//        title: 'Unit 3'
//        children: [
//          ['/unit-2/', 'Materials'],
//          '/unit-3/w11',
//          '/unit-3/w12',
//          '/unit-3/w13',
//          '/unit-3/w14',
//          '/unit-3/w15',
//        ],
//      },
    ]
  }
}
