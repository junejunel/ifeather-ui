---
title: 快速上手
---
# 快速上手

## 完整引入

在 `main.js` 中写入以下内容，就可以将 ifeather-ui 完整引入使用：
``` js
import Vue from vue
import IFeatherUI from 'ifeather-ui'
import 'ifeather-ui/lib/styles/ifeather-ui.css'
// 其他代码 ...

Vue.use(IFeatherUI)
```

## 按需引入
如果你只希望引入部分组件和指令，比如 Button、Dialog 组件，那么需要先通过npm安装好 babel-plugin-component 包，然后在你的项目的 .babelrc 文件中写上这部分内容
``` js
{
  "plugins": [
      ["component", {
          "libraryName": "ifeather-ui",
          "libDir": "lib",
          "styleLibrary": {
              "name": "styles",
              "base": false, // no base.css file
              "path": "[module].css"
          }
      }]
  ]
}

```

然后在 `main.js` 中写入以下内容，就可以进行按需加载了，你可以像这样做加载一个Button

``` js
import Vue from 'vue'
import { Button } from 'ifeather-ui'

Vue.component('fe-button', Button)

```
