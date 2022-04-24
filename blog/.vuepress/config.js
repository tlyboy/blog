module.exports = {
  base: '/blog/',
  title: 'Guany 的博客',
  description: 'Guany 的博客',
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
      {
        text: '主页',
        link: '/',
        icon: 'reco-home'
      },
      {
        text: '时间轴',
        link: '/timeline/',
        icon: 'reco-date'
      },
      {
        text: '学习路线',
        link: 'https://www.bilibili.com/read/cv14612853?spm_id_from=333.999.0.0',
        icon: 'reco-bilibili'
      },
      {
        text: 'GitHub',
        link: 'https://github.com/tlyboy/blog',
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
    subSidebar: 'auto',
    lastUpdated: '上次更新',
    smoothScroll: true
  },
  markdown: {
    lineNumbers: true
  }
}
