module.exports = {
  title: 'Guany 的博客',
  description: '这是我的新博客',
  head: [
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,user-scalable=no'
      }
    ],
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico'
      }
    ],
    [
      'link',
      {
        rel: 'apple-touch-icon',
        href: '/favicon.png'
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
    sidebarDepth: 2,
    sidebar: {
      '/dev-env/': ['wt', 'powershell', 'php'],
      '/front-end/1/': [
        'vscode',
        'html',
        'html5',
        'css',
        'css3',
        'pin_you_gou_case',
        'mobile'
      ],
      '/front-end/2/': [
        'javascript_basics',
        'javascript_advanced',
        'web_apis',
        'jquery',
        'ajax'
      ],
      '/front-end/3/': ['nodejs', 'vue2', 'vue3'],
      '/front-end/4/': ['react', 'typescript', 'applet'],
      '/java/3/': [
        'git',
        'spring',
        'spring_mvc',
        'mybatis',
        'spring_boot',
        'yaml'
      ],
      '/java/4/': ['docker', 'mongodb']
    },
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
    friendLink: [
      {
        title: '午后南杂',
        desc: 'Enjoy when you can, and endure when you must.',
        email: '1156743527@qq.com',
        link: 'https://www.recoluan.com'
      },
      {
        title: 'vuepress-theme-reco',
        desc: 'A simple and beautiful vuepress Blog & Doc theme.',
        avatar:
          'https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png',
        link: 'https://vuepress-theme-reco.recoluan.com'
      }
    ],
    logo: '/logo.png',
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: '上次更新',
    author: 'tlyboy',
    authorAvatar: '/avatar.png',
    startYear: '2021',
    noFoundPageByTencent: false,
    subSidebar: 'auto'
  },
  markdown: {
    lineNumbers: true
  }
}
