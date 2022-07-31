module.exports = {
  title: 'Guany 的博客',
  description: '这是我的新博客',
  head: [
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0, user-scalable=no'
      }
    ],
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico'
      }
    ]
  ],
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Guany 的博客',
      description: '这是我的新博客'
    }
  },
  theme: 'reco',
  themeConfig: {
    nav: [
      {
        text: '首页',
        link: '/',
        icon: 'reco-home'
      },
      {
        text: '时间轴',
        link: '/timeline/',
        icon: 'reco-date'
      },
      {
        text: '联系',
        icon: 'reco-message',
        items: [
          {
            text: 'GitHub',
            link: 'https://github.com/tlyboy',
            icon: 'reco-github'
          }
        ]
      }
    ],
    type: 'blog',
    blogConfig: {
      category: {
        location: 2,
        text: '分类'
      },
      tag: {
        location: 3,
        text: '标签'
      }
    },
    logo: '/assets/img/logo.png',
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: '上次更新',
    author: 'Guany',
    authorAvatar: '/assets/img/avatar.png',
    startYear: '2022',
    noFoundPageByTencent: false,
    subSidebar: 'auto'
  },
  markdown: {
    lineNumbers: true
  }
}
