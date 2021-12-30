const sidebar = require('./sidebar')
module.exports = {
  title: 'IFeatherUI',
  base: '/ifeather-ui/',
  description: 'a lightweight ui toolkit for Vue.js 2.X',
  port: 8080, 
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '组件', link: '/component/guide/introduction' },
      { text: '主题', link: '/component/guide/theme' },
      // { text: 'External', link: 'https://google.com' },
    ],
    sidebar,
    // sidebar: {
    //   '/component/': [
    //     {
    //       title: '开发指南',
    //       collapsable: false,
    //       children: [
    //         'guide/introduction',
    //         'guide/guide'
    //       ]
    //     },
    //     {
    //       title: '基础组件',
    //       collapsable: false,
    //       children: [
    //         'basic/button',
    //         'basic/input',
    //         'basic/form',
    //         'basic/notice'
    //       ]
    //     },
    //   ]
    // }
  }
}