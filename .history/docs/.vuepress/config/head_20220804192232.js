// head
module.exports = [
  // 注入到页面<head> 中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
  ['link', { rel: 'icon', href: '/img/logo.png' }], //favicons，资源放在public文件夹
  [
    'meta',
    {
      name: 'keywords',
      content: '后端博客,个人技术博客,后端,后端开发,ssm,spring,springCloud,数据库,技术文档,学习,面试,JavaScript,js,ES6,TypeScript,vue,python,css3,html5,Node,git,github,markdown',
    },
  ],
  ['meta', {name: 'referrer', content: 'no-referrer-when-downgrade'}],

  ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色
  ['link', { rel: 'stylesheet', href: 'https://at.alicdn.com/t/font_3077305_pt8umhrn4k9.css' }],
  ['script', { src: "https://www.googletagmanager.com/gtag/js?id=G-EWS9D4PTVZ",async: true}],
  ['script', {},
              " window.dataLayer = window.dataLayer || [];\
              function gtag(){dataLayer.push(arguments);}\
              gtag('js', new Date());\
              gtag('config', 'G-EWS9D4PTVZ');"],
  
  //  ['script', { src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" ,async: true}],
  //  ['script', {},
  //             '(adsbygoogle = window.adsbygoogle || []).push({\
  //             google_ad_client: "ca-pub-000000000000",\
  //             enable_page_level_ads: true});'],
  // [
  //   'script',
  //   {
  //     'data-ad-client': 'ca-pub-7828333725993554',
  //     async: 'async',
  //     src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
  //   },
  // ], // 网站关联Google AdSense 与 html格式广告支持
]
