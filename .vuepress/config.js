module.exports = {
  title: 'T251 - Fall 2018',
  description: 'Music Theory and Literature III',
  themeConfig: {
    algolia: {
      appId: '1AX0GKGSNL',
      apiKey: '4a51abda7eb890f308dd2c5fa47f097c',
      indexName: 'T251',
    },

    sidebar: [
      '/syllabus',
      {
        title: 'Unit 1',
        collapsable: false,
        children: [
          ['/unit-1/', 'Materials'],
          '/unit-1/w1',
          '/unit-1/w2',
          '/unit-1/w3',
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
