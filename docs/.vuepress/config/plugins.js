// 插件配置
module.exports = [
  // 本地插件
  // [require('./plugins/love-me'), { // 鼠标点击爱心特效
  //   color: '#11a8cd', // 爱心颜色，默认随机色
  //   excludeClassName: 'theme-vdoing-content' // 要排除元素的class, 默认空''
  // }],

  'vuepress-plugin-baidu-autopush', // 百度自动推送

  // 可以添加第三方搜索链接的搜索框（原官方搜索框的参数仍可用）
  // [
  //   'thirdparty-search',
  //   {
  //     thirdparty: [
  //       // 可选，默认 []
  //       {
  //         title: '通过谷歌搜索本站的',
  //         frontUrl: 'https://www.google.com/search?q=',
  //       },
  //       {
  //         title: '在MDN中搜索',
  //         frontUrl: 'https://developer.mozilla.org/zh-CN/search?q=', // 搜索链接的前面部分
  //         behindUrl: '', // 搜索链接的后面部分，可选，默认 ''
  //       },
  //       {
  //         title: '在Bing中搜索',
  //         frontUrl: 'https://cn.bing.com/search?q=',
  //       },
  //       {
  //         title: '通过百度搜索本站的',
  //         frontUrl: 'https://www.baidu.com/s?wd=site%3Aggball.top%20',
  //       },
  //     ],
  //   },
  // ],

  ['@vuepress/search', {
    searchMaxSuggestions: 10
  }],

  [
    'one-click-copy',
    {
      // 代码块复制按钮
      copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
      copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
      duration: 1000, // prompt message display time.
      showInMobile: false, // whether to display on the mobile side, default: false.
    },
  ],
  [
    'demo-block',
    {
      // demo演示模块 https://github.com/xiguaxigua/vuepress-plugin-demo-block
      settings: {
        // jsLib: ['http://xxx'], // 在线示例(jsfiddle, codepen)中的js依赖
        // cssLib: ['http://xxx'], // 在线示例中的css依赖
        // vue: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js', // 在线示例中的vue依赖
        jsfiddle: false, // 是否显示 jsfiddle 链接
        codepen: true, // 是否显示 codepen 链接
        horizontal: false, // 是否展示为横向样式
      },
    },
  ],
  [
    'vuepress-plugin-zooming', // 放大图片
    {
      selector: '.theme-vdoing-content img:not(.no-zoom)', // 排除class是no-zoom的图片
      options: {
        bgColor: 'rgba(0,0,0,0.6)',
      },
    },
  ],
  [
    'vuepress-plugin-baidu-tongji', // 百度统计
    {
      hm: '90fa1d789bda248d3b76621e1a912093',
    },
  ],
  [
    'vuepress-plugin-comment', // 评论
    {
      choosen: 'gitalk',
      options: {
        clientID: 'd0e20a12ae99855dc7f1', // 申请地址 https://github.com/settings/applications/new
        clientSecret: '0f26b8984b4c67b999b7e0798c746be834b43050',
        repo: 'blog-comments', // GitHub 仓库
        owner: 'a1667834841', // GitHub仓库所有者
        admin: ['a1667834841'], // 对仓库有写权限的人
        // distractionFreeMode: true,
        pagerDirection: 'last', // 'first'正序 | 'last'倒序
        id: '<%- (frontmatter.permalink || frontmatter.to.path).slice(-16) %>', //  页面的唯一标识,长度不能超过50
        title: '「评论」<%- frontmatter.title %>', // GitHub issue 的标题
        labels: ['Gitalk', 'Comment'], // GitHub issue 的标签
        body:
          '页面：<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>', // GitHub issue 的内容
      },
    },
  ],
  [
    '@vuepress/last-updated', // "上次更新"时间格式
    {
      transformer: (timestamp, lang) => {
        const dayjs = require('dayjs') // https://day.js.org/
        return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
      },
    },
  ],
  [
    '@vuepress/google-analytics',
    {
      'ga': 'G-EWS9D4PTVZ' // UA-00000000-0
    }
  ]
]
