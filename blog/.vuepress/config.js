module.exports = {
  title: 'Guany’s Blog',
  description: 'Guany’s Blog',
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
  dest: '.vuepress/dist',
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  theme: 'reco',
  themeConfig: {
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
    nav: [
      { text: '主页', link: '/', icon: 'reco-home' },
      { text: '时间轴', link: '/timeline/', icon: 'reco-date' },
      {
        text: '学习路线',
        items: [
          {
            text: 'Java',
            link: 'https://www.bilibili.com/read/cv9965357'
          },
          {
            text: 'Python',
            link: 'https://www.bilibili.com/read/cv10593914'
          },
          {
            text: '前端',
            link: 'https://www.bilibili.com/read/cv10431130'
          }
        ],
        icon: 'reco-bilibili'
      },
      {
        text: 'GitHub',
        link: 'https://github.com/tlyboy/tlyboy.github.io',
        icon: 'reco-github'
      }
    ],
    startYear: '2021',
    author: 'tlyboy',
    logo: '/head.png',
    authorAvatar: '/avatar.png',
    type: 'blog',
    noFoundPageByTencent: false,
    sidebarDepth: 2,
    sidebar: {
      '/back-end/1/': ['java_basics', 'java_advanced'],
      '/back-end/2/': [
        'java_web',
        'mysql',
        'xml',
        'ajax',
        'json',
        'redis',
        'maven',
        'linux'
      ],
      '/back-end/3/': [
        'git',
        'spring',
        'spring_mvc',
        'mybatis',
        'spring_boot',
        'yaml'
      ],
      '/back-end/4/': ['docker', 'mongodb'],
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
      '/dev-env/': ['wt', 'powershell', 'php']
    },
    subSidebar: 'auto',
    lastUpdated: '上次更新',
    smoothScroll: true
  },
  markdown: {
    lineNumbers: true
  }
}
