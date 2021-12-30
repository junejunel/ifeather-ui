const sidebars = {
  '/component/': [
    {
      title: '开发指南',
      collapsable: false,
      children: [
        'guide/introduction',
        'guide/install',
        'guide/start',
        'guide/theme',
      ]
    },
    {
      title: 'Basic 基础组件',
      collapsable: false,
      children: [
        'basic/button',
      ]
    },
    {
      title: 'Form 表单组件',
      collapsable: false,
      children: [
        'basic/input',
        'basic/switch',
        'basic/radio',
        'basic/checkbox',
        'basic/form',
      ]
    },
    {
      title: 'Notice 消息组件',
      collapsable: false,
      children: [
        'basic/notice',
      ]
    },
    {
      title: 'others 其他组件',
      collapsable: false,
      children: [
        'basic/dialog',
      ]
    },
  ]
}

module.exports = sidebars;