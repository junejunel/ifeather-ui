---
title: 主题定制
---
# 主题定制

主题定制，需要在你的项目的入口文件同级目录下创建一个 global.scss 文件，然后在其中写入类似下面这样的代码。
```js
$--color-primary: red;
@import "~ifeather-ui/lib/styles/index.scss";
```

然后在入口文件中把引入组件库的方式改变一下

```js
import Vue from vue
import IFeatherUI from 'ifeather-ui'
import './global.scss'
// 其他代码 ...

Vue.use(IFeatherUI)
```